'use strict';

    function housesDirective(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            restrict: 'E',
            controller: HousesController,
            controllerAs: 'Houses',
            templateUrl: 'directives/houses/houses.html',
            bindToController: {
                goldRate: '='
            }
        };
    }

    HousesController.$inject = ['$scope', '$timeout'];
    function HousesController ($scope, $timeout) {
        var vm = this;
        var data;

        initialize();

        /////////////////////

        function initialize() {
            data = _mockData();
        }

        function _mockData() {
            return {
                user: {
                    "_id": "5783d2eb452031dc1fdd7fed",
                    "houseName": "Pereanster",
                    "familiesDefeated": [],
                    "Buildings": [],
                    "soldiers": 0,
                    "goldRate": 1,
                    "totalGold": 0
                },
                game: {
                    COST: 0,
                    GOLD_RATE: 2
                }
            };
        }
    }

module.exports = housesDirective;