'use strict';

module.exports = /*@ngInject*/
  function appController($rootScope, $auth, userMe, $mdToast, $mdSidenav, $mdBottomSheet, $q, $state, GameInfo, $interval, saveGame) {
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
        getGameAndStartInterval();
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

    function getGameAndStartInterval() {
      GameInfo.get({gameId:$rootScope.user.gameId}).$promise.then(function (data) {
        $rootScope.game = data.message;
        vm.totalGold = $rootScope.game.totalGold;
        $rootScope._saveGameInterval = $interval(function () {
          saveGame.save({gameId: $rootScope.user.gameId}, $rootScope.game).$promise.then(function() {});
        }, 5000);
      });
    }

    function toggleRightSidebar() {
      $mdSidenav('left').toggle();
    }

    function toggleItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('right').toggle();
      });
    }

    function selectItem () {
      vm.toggleItemsList();
    }

    function logout() {
      $auth.logout();
      $interval.cancel($rootScope._intervalGoldPromise);
      $interval.cancel($rootScope._saveGameInterval);
      $state.go('login');
    }
  };
