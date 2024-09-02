// SETUP
import express from 'express';

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});


// server/index.js
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('it works.');
});

app.post('/item', (req, res) => {
    console.log('Received request to /item');
    const { name, sku, quantity, weight } = req.body;
  
    if (!name || !sku || !quantity || !weight) {
      console.log('Missing required properties');
      return res.status(400).json({ error: 'Missing required properties' });
    }
  
    if (typeof quantity !== 'number' || typeof weight !== 'number') {
      console.log('Quantity and weight must be numbers');
      return res.status(400).json({ error: 'Quantity and weight must be numbers' });
    }
  
    console.log('Returning JSON response');
    res.json({ name, sku, quantity, weight });
  });

const port = 3000;
app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server started on port ${port}`);
    }
});


process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});