'use strict';

function marketDirective(/* inject dependencies here, i.e. : $rootScope */) {
  return {
    restrict: 'E',
    bindToController: {},
    controller: MarketController,
    controllerAs: 'market',
    templateUrl: 'directives/market/market.html'
  };
}

MarketController.$inject = ['$rootScope','$gameConstants', 'saveGame'];
function MarketController($rootScope, $gameConstants, saveGame) {
  var vm = this;
  vm.lvlUpMarket = _lvlUpMarket;

  initialize();

  /////////////////////

  function initialize() {
    vm.marketCost = $gameConstants.MARKET[$rootScope.game.buildings.market+1 + ''].COST;
    if ($rootScope.game.buildings.market) {
      vm.marketDiscount = $gameConstants.MARKET[$rootScope.game.buildings.market + ''].SAVE_PERCENT;
    }
  }

  function _lvlUpMarket() {
    $rootScope.game.buildings.market++;
    vm.marketDiscount = $gameConstants.MARKET[$rootScope.game.buildings.market + ''].SAVE_PERCENT;
    vm.marketCost = $gameConstants.MARKET[$rootScope.game.buildings.market+1 + ''].COST;
    saveGame.save({gameId: $rootScope.user.gameId}, $rootScope.game).$promise.then(function() {});
  }
}

module.exports = marketDirective;
