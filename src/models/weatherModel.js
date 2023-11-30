class Weather {
  constructor(city, temperature, description) {
    this.city = this.formatCity(city);
    this.temperature = this.formatTemperature(temperature);
    this.description = description;
  }

  // Format temperature from Kelvin to Fahrenheit
  formatTemperature(temperature) {
    return ((temperature - 273.15) * 9 / 5 + 32).toFixed(1);
  }

  // Format city to be capitalized
  formatCity(city) {
    var splitCity = city.toLowerCase().split(" ")
    for(var i = 0; i < splitCity.length; i++ ) {
      splitCity[i] = splitCity[i].charAt(0).toUpperCase() + splitCity[i].substring(1);     
    }
    return splitCity.join(" ")
  }
}

module.exports = Weather;
