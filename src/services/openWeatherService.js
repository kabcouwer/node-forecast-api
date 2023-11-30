const Weather = require("../models/weatherModel");
const { ErrorResponse } = require("../utils/errorResponse");

async function getWeatherByCity(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

  return fetch(apiUrl)
    .then(response => {
      // Check is the response is OK (200)
      if (!response.ok) {
        throw new ErrorResponse(`OpenWeather API returned ${response.statusText}.`, response.status);
      }

      return response.json();
    })
    .then(data => new Weather(city, data.main.temp, data.weather[0].description))
    .catch(error => {
      console.log('Error in getWeatherByCity service:', error);

      // Re-throw the error
      throw new ErrorResponse(error.message, error.statusCode);
    });
}

module.exports = {
  getWeatherByCity
};
