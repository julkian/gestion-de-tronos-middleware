'use strict';

module.exports =
  angular.module('app.component.directives', [])
  .directive('gtHouses', require('./houses/houses.component.js'))
  .directive('gtFamilies', require('./families/families.component.js'));
