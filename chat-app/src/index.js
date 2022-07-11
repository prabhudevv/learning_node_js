const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for express config
const publicDirectoryFile = path.join(__dirname, "../public");

// Setup static directory to server
app.use(express.static(publicDirectoryFile));

app.listen(port, () => {
  console.log("Server is up on " + port);
});