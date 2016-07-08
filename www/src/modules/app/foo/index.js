'use strict';

module.exports =
  angular.module('gestion de tronos.foo', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])

  .config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
    .state('foo', {
      url: '/cosa',
      templateUrl: 'app/foo/layout.html',
      controller: 'fooController'
    });
  })
  .controller('fooController', require('./fooController'));
