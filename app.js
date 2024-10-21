const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const siteTitle = process.env.SITE_TITLE2 || 'Inflix Movies - Local Environment';

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API to provide site title
app.get('/api/title', (req, res) => {
    res.json({ title: siteTitle });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});