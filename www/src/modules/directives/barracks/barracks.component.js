'use strict';

function barracksDirective(/* inject dependencies here, i.e. : $rootScope */) {
  return {
    restrict: 'E',
    bindToController: {},
    controller: BarracksController,
    controllerAs: 'barracks',
    templateUrl: 'directives/barracks/barracks.html'
  };
}

BarracksController.$inject = ['$rootScope','$gameConstants', '$mdDialog', '$mdToast'];
function BarracksController($rootScope, $gameConstants, $mdDialog, $mdToast) {
  var vm = this;
  vm.soldierCost = 10;
  vm.createSoldier = _createSoldier;
  vm.buyBarracks = _buyBarracks;
  vm.showCreateSoldiersDialog = _showCreateSoldiersDialog();

  initialize();

  /////////////////////

  function initialize() {
    vm.barracksCost = $gameConstants.HEADQUARTERS.COST;
  }

  function _createSoldier() {
    $rootScope.game.totalGold -= vm.soldierCost;
    $rootScope.game.soldiers++;
  }

  function _buyBarracks() {
    $rootScope.game.totalGold -= vm.barracksCost;
    $rootScope.game.buildings.barracks++;
  }

  function _showCreateSoldiersDialog() {

  }

  function _beforeFightDialogController($scope, $rootScope, $mdDialog, familyName, $mdToast) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.trainSoldiers = function() {
      var soldiersToTrain = parseInt($scope.training.soldiersToTrain);
      if ($rootScope.game.totalGold < soldiersToTrain * $gameConstants.BARRACKS.TRAIN_COST) {
        _showSimpleToast('Not enough gold to train');
      } else {
        
      }
    };
  }

  function _showSimpleToast(message) {
    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position('bottom right')
        .hideDelay(3000)
    );
  }

}

module.exports = barracksDirective;
