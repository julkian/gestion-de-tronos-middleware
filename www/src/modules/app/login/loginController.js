'use strict';

module.exports = /*@ngInject*/
  function loginController($auth, $scope, userMe, $state) {
    var vm = this;

    vm.doLogin = function () {
      $auth.login(vm.user)
        .then(function () {
          userMe.me().$promise.then(function (data) {
            $state.go('app.home');
          });
        });
    };
  };
