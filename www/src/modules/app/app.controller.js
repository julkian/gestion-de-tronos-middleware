'use strict';

module.exports = /*@ngInject*/
  function appController($rootScope, $auth, userMe, $mdToast, $mdSidenav, $mdBottomSheet, $q, $state, GameInfo, $interval) {
    var vm = this;
    vm.logout = logout;
    vm.toggleRightSidebar = toggleRightSidebar;
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;

    inicialize();

    function inicialize() {
      userMe.me().$promise.then(function (data) {
        $rootScope.user = data.message;
        vm.currentUserName =  data.message.username;
        getGame();
      }, function () {
        $auth.logout();
        $mdToast.show(
          $mdToast.simple()
            .textContent('Internal Server Error')
            .position('top right')
            .hideDelay(3000)
        );
      });

      vm.faq = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam elit, viverra vel diam vestibulum, malesuada " +
        "mattis dui. Donec in purus pharetra, dapibus libero et, fermentum lectus. Vestibulum in condimentum metus. Nunc non eros sit amet turpis pellentesque aliquam. " +
        "Duis convallis velit eleifend, molestie justo id, interdum enim. Nullam interdum velit nec odio tristique fringilla. Sed rhoncus tortor in leo fringilla, mattis tristique " +
        "velit ullamcorper. Aliquam pulvinar, est ut interdum bibendum, dolor purus tristique urna, eu tempus erat tellus eu felis.";

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

    function getGame() {
      GameInfo.get({gameId:$rootScope.user.gameId}).$promise.then(function (data) {
        $rootScope.game = data.message;
        vm.totalGold = $rootScope.game.totalGold;
      });
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
      $interval.cancel($rootScope._intervalGoldPromise);
      $state.go('login');
    }
  };
