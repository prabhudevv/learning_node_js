const express = require("express");
const path = require("path");
const hbs = require("hbs");

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

app.get("", (req, res) => {
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
    helpText: "Help page",
    title: "Help",
    name: "Prabhudev V",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMsg: "404! Help text not found",
    name: "Prabhudev V",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMsg: "404! Page not found",
    name: "Prabhudev V",
  });
});

// node .\src\app.js
app.get("/weather", (req, res) => {
  res.send("wWather page");
});

// start server
app.listen(3000, () => {
  console.log("Server started correctly! on port 3000");
});
