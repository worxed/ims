// Client-side code
import bodyParser from 'body-parser';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(bodyParser.json({ extended: true }));

const url = 'http://localhost:3000/item';
const data = {
    name: 'Example Item',
    sku: 'EXM-001',
    quantity: 10,
    weight: 5.5
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));