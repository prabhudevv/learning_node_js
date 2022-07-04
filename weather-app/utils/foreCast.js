const request = require("request");

const foreCast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0a82bdc4c6628b5f968dd500d30a8857&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    console.log(response.body.location);
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined,
        "Today's temperature in " + response.body.location.name + ", " + response.body.location.country + " is " + response.body.current.temperature + "°c, " + response.body.current.weather_descriptions + ", there is a " + response.body.current.precip + "% chance of rain"
      );
    }
  });
};

module.exports = foreCast;
