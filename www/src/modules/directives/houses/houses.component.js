'use strict';

    function housesDirective(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            restrict: 'E',
            bindToController: {
                gameData: '='
            },
            controller: HousesController,
            controllerAs: 'houses',
            templateUrl: 'directives/houses/houses.html'
        };
    }

    HousesController.$inject = ['$scope', '$interval', '$timeout'];
    function HousesController ($scope, $interval, $timeout) {
        var vm = this;
        var housesLevels = null;
        var _intervalGoldPromise = null;
        vm.levelUpHouses = _levelUpHouses;

        initialize();

        /////////////////////

        function initialize() {
            housesLevels = {
                1: {
                    COST: 10,
                    GOLD_RATE: 2
                },
                2: {
                    COST: 50,
                    GOLD_RATE: 4
                }
            };
        }

        function _startGoldInterval() {
            _intervalGoldPromise = $interval(function () {
                vm.data.totalGold += vm.data.goldRate;
            }, 1000);
        }

        function _levelUpHouses() {

        }

    }

module.exports = housesDirective;