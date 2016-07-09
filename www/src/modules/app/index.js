'use strict';

module.exports =
  angular.module('app', [
    'ui.router',
    //load extra external dependencies here, e.g.:
    //'ngAnimate',
    'ngMaterial',
    //html templates in $templateCache generated by Gulp:
    require('../../../tmp/templates').name,
    //useful directives, filters, services shared across the app
    require('../components').name,
    //example app module:
    require('./home').name

  ])
    .config(require('./app.config'))
    .config(require('./app.config.routes'))
    .controller('appController', require('./appController'));
