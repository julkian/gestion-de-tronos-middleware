'use strict';

module.exports = /*@ngInject*/
function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })

      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'app/layout.html',
        controller: 'appController',
        controllerAs: 'app'
      })

      .state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      });
  };
