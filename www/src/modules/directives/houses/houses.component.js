'use strict';

    function housesDirective(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            restrict: 'E',
            bindToController: {
                housesLevel: '='
            },
            controller: HousesController,
            controllerAs: 'houses',
            templateUrl: 'directives/houses/houses.html'
        };
    }

    HousesController.$inject = ['$scope', '$interval'];
    function HousesController ($scope, $interval) {
        var vm = this;
        var housesLevels = null;
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

        function _levelUpHouses() {

        }

    }

module.exports = housesDirective;