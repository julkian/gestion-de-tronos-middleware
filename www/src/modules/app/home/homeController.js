'use strict';

module.exports = /*@ngInject*/
    function homeController($scope, $interval) {
        var vm = this;
        vm.data = null;


        _initialize();

        /////////////////////

        function _initialize() {
            vm.data = _mockData();
        }

        function _mockData() {
            return {
                user: {
                    _id: "5783d2eb452031dc1fdd7fed",
                    name: 'killian',
                    password: 'some weird shit'
                },
                game: {
                    houseName: "Pereanster",
                    familiesDefeated: [],
                    buildings: {
                        houses: 1
                    },
                    soldiers: 0,
                    goldRate: 1,
                    totalGold: 0
                }
            };
        }
    };
