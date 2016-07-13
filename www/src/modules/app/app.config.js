'use strict';

module.exports = /*@ngInject*/
  function config($locationProvider, $authProvider, $httpProvider, userMeProvider, createUserProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('dark');

    // AUTH
    $authProvider.withCredentials = true;
    $authProvider.baseUrl = 'http://localhost:8080' || '';
    $authProvider.loginUrl = '/rest/auth/login';
    $authProvider.signupUrl = '/rest/register';

    //HTTP
    $httpProvider.defaults.headers.common.Accept = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
    $httpProvider.defaults.withCredentials = true;

    var restConfig = {
      baseUrl: "http://localhost:8080" || ''
    };

    userMeProvider.config(restConfig);
    createUserProvider.config(restConfig);
  };
