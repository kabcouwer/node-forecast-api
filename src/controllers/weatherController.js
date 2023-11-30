const openWeatherService = require("../services/openWeatherService");
const { sendErrorResponse } = require("../utils/errorResponse");

async function getWeatherByCity(req, res) {
  const city = req.query.city;

  openWeatherService.getWeatherByCity(city)
    .then(weather => {
      res.status(200).json({
        success: true,
        data: weather
      });
    })
    .catch(error => {
      console.log('Error in the getWeatherByCity controller:', error);

      // Send the error response using sendErrorResponse utility function
      sendErrorResponse(res, error);
    })
}

module.exports = {
  getWeatherByCity
};
