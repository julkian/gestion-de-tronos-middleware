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
app.use('/site', routes.siteRoute);

/* SERVE */
var port = applicationConstants.SERVER_PORT;
app.listen(port, applicationConstants.SERVER_IP);

console.log('Listening to port', port);