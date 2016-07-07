'use strict';

module.exports =
  angular.module('gestion de tronos.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
