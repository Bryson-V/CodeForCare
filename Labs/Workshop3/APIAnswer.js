// RUN WITH: node serverAnswers.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT_DIR = __dirname;
const INVENTORY_FILE = path.join(ROOT_DIR, 'inventory.json');

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml'
};

let inventory = readInventory();

function readInventory() {
    try {
        return JSON.parse(fs.readFileSync(INVENTORY_FILE, 'utf8'));
    } catch (error) {
        console.error(`Could not read inventory file: ${error.message}`);
        return [];
    }
}

function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, {
        'Content-Type': MIME_TYPES['.json'],
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(JSON.stringify(data, null, 2));
}

function handleInventory(req, res) {
    if (req.method === 'OPTIONS') {
        sendJson(res, 204, null);
        return;
    }

    if (req.method === 'GET') {
        console.log('\n--- GET REQUEST RECEIVED ---');
        console.log('Current Inventory being sent to user:', inventory);
        sendJson(res, 200, inventory);
        return;
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const submittedItem = body ? JSON.parse(body) : {};
                const quantity = Number(submittedItem.quantity);

                if (!submittedItem.item || !Number.isFinite(quantity) || quantity <= 0) {
                    sendJson(res, 400, { message: 'Please provide an item and a positive quantity.' });
                    return;
                }

                const newItem = {
                    id: inventory.length + 1,
                    item: submittedItem.item,
                    quantity
                };

                inventory.push(newItem);

                sendJson(res, 200, {
                    message: 'Item added successfully!',
                    addedItem: newItem,
                    currentInventory: inventory
                });
            } catch (error) {
                sendJson(res, 400, { message: 'Invalid JSON request body.' });
            }
        });

        return;
    }

    sendJson(res, 405, { message: 'Method not allowed.' });
}

function serveStaticFile(req, res, pathname) {
    const requestedPath = pathname === '/' ? '/index1.html' : decodeURIComponent(pathname);
    const filePath = path.join(ROOT_DIR, requestedPath.replace(/^\/+/, ''));
    const relativePath = path.relative(ROOT_DIR, filePath);

    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
        res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>403 Forbidden</h1>');
        return;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`Server Error: ${error.code}`);
            }
            return;
        }

        const extname = String(path.extname(filePath)).toLowerCase();
        const contentType = MIME_TYPES[extname] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(req.method === 'HEAD' ? undefined : content);
    });
}

const server = http.createServer((req, res) => {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (requestUrl.pathname === '/api/inventory') {
        handleInventory(req, res);
        return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Method not allowed.');
        return;
    }

    serveStaticFile(req, res, requestUrl.pathname);
});

server.listen(PORT, () => {
    console.log(`Website: http://localhost:${PORT}`);
    console.log(`API:     http://localhost:${PORT}/api/inventory`);
    console.log('Press Ctrl + C to stop the server');
});
