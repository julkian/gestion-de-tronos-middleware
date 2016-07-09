'use strict';

module.exports = /*@ngInject*/
  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  };
