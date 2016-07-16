'use strict';

module.exports =
  angular.module('app.component.directives', [])
    .directive('gtHouses', require('./houses/houses.component'))
    .directive('gtBarracks', require('./barracks/barracks.component'));

