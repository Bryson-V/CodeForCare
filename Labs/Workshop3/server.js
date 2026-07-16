//use URL http://localhost:3000/api/inventory when running
//run npm run backend

import express from 'express';
import cors from 'cors';
import inventory from '../../src/inventory.json' with { type: 'json' };
const app = express();
const PORT = 3000;


// Middleware
app.use(express.json());
app.use(cors());

// GET Route: Fetch the whole inventory
app.get('/api/inventory', (req, res) => {
    console.log("\n--- GET REQUEST RECEIVED ---");
    console.log("Current Inventory being sent to user:", inventory);
    
    res.status(200).json(inventory);
});

// POST Route: Add a new item to the inventory
app.post('/api/inventory', (req, res) => {
    console.log("\n--- POST REQUEST RECEIVED ---");
    console.log("Inventory BEFORE adding item:", inventory);
    console.log("Item data sent by user:", req.body);

    // Form the new object
    const newItem = {
        id: inventory.length + 1,
        item: req.body.item,
        quantity: req.body.quantity
    };

    // Push it into our mock database array
    inventory.push(newItem);

    // Print what the inventory looks like AFTER the addition
    console.log("Inventory AFTER adding item:", inventory);
    console.log("-----------------------------\n");

    // Respond to the client
    res.status(201).json(newItem);
});

// Server listener
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
    console.log("Press Ctrl + C to stop the server");
});