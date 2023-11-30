const express = require("express");
const router = express.Router();

// Import controller
const weatherController = require("../controllers/weatherController");

// Routes
router.get("/weather", weatherController.getWeatherByCity);

module.exports = router;
