'use strict';

module.exports = /*@ngInject*/
  function loginController($auth, $state, $mdDialog, $mdToast) {
    var vm = this;

    vm.doLogin = function () {
      $auth.login(vm.user)
        .then(function () {
          $state.go('app.home');
        }, function () {
          $mdToast.show(
            $mdToast.simple()
              .textContent('Error on login')
              .position('top right')
              .hideDelay(3000)
          );
        });
    };

    vm.doRegistration = function () {
      $mdDialog.show({
        templateUrl: 'app/login/registration-user/registrationUser.html',
        clickOutsideToClose: false,
        disableParentScroll: true,
        controller: 'registrationController',
        controllerAs: 'registration'
      });
    };
  };
