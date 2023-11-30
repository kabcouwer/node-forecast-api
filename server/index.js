const express = require("express");
const PORT = process.env.PORT || 3001;
const server = express();

// Middleware
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));

// Import test route
server.get("/api/hello", (req, res) => {
    res.status(200).send("Hello, world!");
});

// Import API routes
server.use("/api", require("../src/routes/weatherRoutes"));

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
