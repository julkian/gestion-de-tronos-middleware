'use strict';

module.exports =
  angular.module('app.component.resources', [])
    .provider('userMe', require('./users-resources/user.resources').userMeProvider)
    .provider('createUser', require('./users-resources/user.resources').createUserProvider);
