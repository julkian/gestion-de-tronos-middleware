'use strict';

module.exports = /*@ngInject*/
function routesConfig($stateProvider) {
    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'app/layout.html',
        controller: 'appController'
      })

      .state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeController'
      });
  };
