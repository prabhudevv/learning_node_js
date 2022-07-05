const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geoCode = require("./utils/geoCode");
const foreCast = require("./utils/foreCast");

const app = express();

// Define paths for express config
const publicDirectoryFile = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryFile));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Prabhudev V",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Prabhudev V",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "Help",
    name: "Prabhudev V",
  });
});

// app.get("/help/*", (req, res) => {
//   res.render("404", {
//     title: "404",
//     errorMsg: "404! Help text not found",
//     name: "Prabhudev V",
//   });
// });

// app.get("*", (req, res) => {
//   res.render("404", {
//     title: "404",
//     errorMsg: "404! Page not found",
//     name: "Prabhudev V",
//   });
// });

// node .\src\app.js
app.get("/weather", (req, res) => {
  console.log(req.query);
  if (!req.query.address) {
    return res.send({
      error: "You must provide a address",
    });
  }

  geoCode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    } else {
      foreCast(latitude, longitude, (error, data) => {
        if (error) {
          res.send({ error });
        }
        res.send({
          foreCast: data,
          location,
          address: req.query.address,
        });
      });
    }
  });
});

app.get("/products", (req, res) => {
  console.log(req.query);
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

// start server
app.listen(3000, () => {
  console.log("Server started correctly! on port 3000");
});
