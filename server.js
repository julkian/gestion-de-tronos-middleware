var express = require('express');
var applicationConstants = require('./constants/application');
var configServer = require('./config');
var routes = require('./routes');
var mongoose = require('mongoose');

/* SERVER CONFIG */
var app = express();
configServer.config(app);

/* MONGODB */
mongoose.connect(applicationConstants.MONGO_IP);

/* SERVER ROUTES */
app.use('/rest', routes.restRoute);

app.use('/site', express.static(__dirname + '/www/release/'));
app.get('/site/*', function(req, res) {
    res.sendFile(__dirname + '/www/release/index.html');
});

// Error 404 resource not found
app.all('*', function(req, res) { res.status(404).send("Recurso no encontrado"); });

/* SERVE */
var port = applicationConstants.SERVER_PORT;
app.listen(port, applicationConstants.SERVER_IP);

console.log('Listening to port', port);