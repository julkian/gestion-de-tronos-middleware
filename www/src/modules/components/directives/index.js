'use strict';

module.exports =
  angular.module('app.component.directives', [])
  .directive('gtHouses', require('./houses/houses.component.js'));
