var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var Logger = require('./logger/logger');
var Routes = require('./routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"../ui/build/")));
const logger = new Logger();

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname,"../ui/build/"));
    logger.info(`Sending index.html`);
});

// user route
app.use("/api", Routes);

// handle undefined routes
app.use("*", (req, res, next) => {
    res.send("Make sure url is correct!!!");
});

module.exports = app;
