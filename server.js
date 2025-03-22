// Import required modules
const express = require('express');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 3000;

// Serve static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});