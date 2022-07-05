const request = require("request");

const foreCast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0a82bdc4c6628b5f968dd500d30a8857&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Today's temperature in " +
          body.location.name +
          ", " +
          body.location.country +
          " is " +
          body.current.temperature +
          "°c, " +
          body.current.weather_descriptions +
          ", there is a " +
          body.current.precip +
          "% chance of rain"
      );
    }
  });
};

module.exports = foreCast;
