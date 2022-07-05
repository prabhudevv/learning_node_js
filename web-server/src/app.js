const express = require('express');
const path = require('path');

const app = express();

const publicDirectoryFile = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryFile));

// node .\src\app.js
app.get('/weather', (req, res) => {
    res.send("wWather page");
})

// start server
app.listen(3000, () => {
    console.log("Server started correctly! on port 3000");
})