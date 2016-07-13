'use strict';

module.exports = /*@ngInject*/
    function loginController($auth, $scope) {
        var vm = this;


        vm.doLogin = function () {
          $auth.login(vm.user)
            .then(function () {
              console.log('logado');
            });
        };
    };
