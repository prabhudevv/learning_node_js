const request = require("request");
const geoCode = require("./utils/geoCode");
const foreCast = require("./utils/foreCast");

// request({ url: url }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to the weather service");
//   } else if (JSON.parse(response.body).error) {
//     console.log(JSON.parse(response.body).error.info);
//   } else {
//     const temperature = JSON.parse(response.body).current.temperature;
//     const precip = JSON.parse(response.body).current.precip;
//     const weather_descriptions = JSON.parse(response.body).current
//       .weather_descriptions;
//     console.log(
//       weather_descriptions +
//         ". Currently it is " +
//         temperature +
//         " degrees out, there is a " +
//         precip +
//         "% chance of rain."
//     );
//   }
// });

geoCode("New york", (error, data) => {
  // console.log("@@@@@@@@@@@@@@@@@@@@@");
  // console.log("Error", error);
  console.log("Data", data);
});

foreCast("New york", (error, data) => {
  // console.log("@@@@@@@@@@@@@@@@@@@@@");
  // console.log("Error", error);
  console.log("Data", data);
});
