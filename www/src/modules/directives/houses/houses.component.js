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
        var _intervalGoldPromise = null;
        vm.housesCost = null;
        vm.levelUpHouses = _levelUpHouses;

        initialize();

        /////////////////////

        function initialize() {
            vm.housesCost = $gameConstants.HOUSES[$rootScope.game.buildings.houses+1 + ''].COST;
            _startGoldInterval();
        }

        function _startGoldInterval() {
            _intervalGoldPromise = $interval(function () {
                $rootScope.game.totalGold += $rootScope.game.goldRate;
            }, 1000);
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
