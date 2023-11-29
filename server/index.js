const express = require('express'); // Import express

const PORT = process.env.PORT || 3001; // Set port to 3001 or the environment's port

const server = express(); // Create express server
server.use(express.json()); // Parse incoming requests with JSON payloads
server.use(express.urlencoded({ extended: true })); // Parse incoming requests with urlencoded payloads

// Import routes
server.get('/api/hello', (req, res) => {
    res.status(200).send('Hello, world!');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
