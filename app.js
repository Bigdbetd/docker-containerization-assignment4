const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Basic route
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'running',
        message: 'Docker containerization successful!',
        timestamp: new Date().toISOString(),
        port: PORT
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Application successfully containerized with Docker!');
});