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

BarracksController.$inject = ['$rootScope','$gameConstants'];
function BarracksController($rootScope, $gameConstants) {
  var vm = this;
  vm.soldierCost = 10;
  vm.createSoldier = _createSoldier;
  vm.buyBarracks = _buyBarracks;

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

}

module.exports = barracksDirective;
