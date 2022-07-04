const geoCode = require("./utils/geoCode");
const foreCast = require("./utils/foreCast");

const address = process.argv[2];

// > node app.js "Bangalore"
if (!address) {
  console.log("Please provide address");
} else {
  geoCode(address, (error, data) => {
    if (error) {
      return console.log("Error", error);
    } else {
      foreCast(data.latitude, data.longitude, (error, data) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log(data);
        }
      });
    }
  });
}