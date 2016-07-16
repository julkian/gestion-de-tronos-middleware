'use strict';

    function housesDirective(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            restrict: 'E',
            bindToController: {},
            controller: HousesController,
            controllerAs: 'houses',
            templateUrl: 'directives/houses/houses.html'
        };
    }

    HousesController.$inject = ['$rootScope', '$interval', '$gameConstants'];
    function HousesController ($rootScope, $interval, $gameConstants) {
        var vm = this;
        vm.housesCost = null;
        vm.levelUpHouses = _levelUpHouses;

        initialize();

        /////////////////////

        function initialize() {
          console.log($rootScope.game);
          if($rootScope.game.Buildings.length) {
            vm.housesCost = $gameConstants.HOUSES[$rootScope.game.Buildings.houses+1 + ''].COST;
          } else {
            vm.housesCost = $gameConstants.HOUSES['1'].COST;
          }
        }


        function _levelUpHouses() {
            var maxLevel = Object.keys($gameConstants.HOUSES).length;
            if ($rootScope.game.buildings.houses <= maxLevel) {
                $rootScope.game.totalGold -= vm.housesCost;
                $rootScope.game.buildings.houses++;
                $rootScope.game.goldRate = $gameConstants.HOUSES[$rootScope.game.buildings.houses + ''].GOLD_RATE;
                vm.housesCost = $gameConstants.HOUSES[$rootScope.game.buildings.houses+1 + ''].COST;
            }
        }

    }

module.exports = housesDirective;
