'use strict';

module.exports = /*@ngInject*/
  function registrationController($mdDialog, $mdToast, createUser) {
    var vm = this;

    vm.closeUserDetail = closeDialog;
    vm.saveUser = saveUser;


    function closeDialog() {
      $mdDialog.hide();
    }

    function saveUser() {
      if (vm.password) {
        if (vm.password === vm.passwordControl) {
          vm.user.password = vm.password;
          if (vm.user.username) {
            save();
          } else {
            $mdToast.show(
              $mdToast.simple()
                .textContent('username is mandatory')
                .position('top right')
                .hideDelay(3000)
            );
          }
        } else {
          $mdToast.show(
            $mdToast.simple()
              .textContent('Not the same password')
              .position('top right')
              .hideDelay(3000)
          );
        }
      } else {
        $mdToast.show(
          $mdToast.simple()
            .textContent('password is mandatory')
            .position('top right')
            .hideDelay(3000)
        );
      }
    }

    function save() {
      console.log('do save');
      createUser.registration(vm.user).$promise.then(function () {
        $mdToast.show(
          $mdToast.simple()
            .textContent('User Created')
            .position('top right')
            .hideDelay(3000)
        );
        closeDialog();
      }, function () {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Internal Server Error')
            .position('top right')
            .hideDelay(3000)
        );
      });
    }
  };
