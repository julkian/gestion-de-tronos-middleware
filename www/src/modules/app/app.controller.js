'use strict';

module.exports = /*@ngInject*/
  function appController($rootScope, $auth, userMe, $mdToast, $mdSidenav, $mdBottomSheet, $q, $state) {
    var vm = this;
    vm.logout = logout;
    vm.toggleRightSidebar = toggleRightSidebar;
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;

    inicialize();

    function inicialize() {
      userMe.me().$promise.then(function (data) {
        $rootScope.me = data.message;
        vm.currentUserName =  data.message.username;
      }, function () {
        $auth.logout();
        $mdToast.show(
          $mdToast.simple()
            .textContent('Internal Server Error')
            .position('top right')
            .hideDelay(3000)
        );
      });

      vm.menuItems = [
        {
          name: 'Game',
          icon: 'games',
          sref: '.home'
        },
        {
          name: 'FAQ',
          icon: 'chat_bubble',
          sref: '.somewhere'
        }
      ];
    }

    function toggleRightSidebar() {
      $mdSidenav('right').toggle();
    }

    function toggleItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    function selectItem () {
      vm.toggleItemsList();
    }

    function logout() {
      $auth.logout();
      $state.go('login');
    }
  };
