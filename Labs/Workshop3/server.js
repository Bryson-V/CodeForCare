// RUN WITH: npm run backend

import express from 'express';
import cors from 'cors';
import path from 'path';

import inventory from './inventory.json' with { type: 'json' };
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});

// GET: Fetch the whole inventory
app.get('/api/inventory', (req, res) => {
    console.log("\n--- GET REQUEST RECEIVED ---");
    console.log("Current Inventory being sent to user:", inventory);
    
    res.status(200).json(inventory);
});

// POST: Add a new item to the inventory
app.post('/api/inventory', (req, res) => {
    const newItem = {
        id: inventory.length + 1,
        item: req.body.item,
        quantity: req.body.quantity
    };

    inventory.push(newItem); // Push your new item to the fake database

    res.status(200).json({
        message: "Item added successfully!",
        addedItem: newItem,
        currentInventory: inventory
    });
});

// Server listener
app.listen(PORT, () => {
    // Website for users to interact with
    console.log(`Website: http://localhost:${PORT}`);
    
    // API endpoint used by the website to GET (retrieve) and POST (add) data to the inventory JSON file
    console.log(`API:     http://localhost:${PORT}/api/inventory`);
    console.log("Press Ctrl + C to stop the server");
});