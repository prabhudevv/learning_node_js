const request = require("request");

const foreCast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0a82bdc4c6628b5f968dd500d30a8857&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url }, (error, response) => {
    console.log(JSON.parse(response.body));
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (JSON.parse(response.body).error) {
      callback(JSON.parse(response.body).error.info, undefined);
    } else {
      callback(undefined, {
        latitude: JSON.parse(response.body).location.lat,
        longitude: JSON.parse(response.body).location.lon,
        location: JSON.parse(response.body).location.name,
      });
    }
  });
};

module.exports = foreCast;
