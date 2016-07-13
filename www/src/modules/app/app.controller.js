'use strict';

module.exports = /*@ngInject*/
  function appController($rootScope, $auth, userMe, $mdToast) {
    var vm = this;

    inicialize();

    function inicialize() {
      userMe.me().$promise.then(function (data) {
        $rootScope.me = data.message;
      }, function () {
        $auth.logout();
        $mdToast.show(
          $mdToast.simple()
            .textContent('Internal Server Error')
            .position('top right')
            .hideDelay(3000)
        );
      });
    }
  };
