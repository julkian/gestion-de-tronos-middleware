var express = require('express');

var routes = require("./routes");

var app = express();

app.use('/rest', routes.restRoute);
app.use('/site', routes.siteRoute);

/* SERVE */
var port = 8080;
app.listen(port, 'localhost');

console.log('Listening to port', port);