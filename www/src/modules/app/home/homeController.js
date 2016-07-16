'use strict';

module.exports = /*@ngInject*/
    function homeController($rootScope) {
        var vm = this;
        vm.data = null;


        _initialize();

        /////////////////////

        function _initialize() {
            var data = _mockData();
            $rootScope.user = data.user;
            $rootScope.game = data.game;
            vm.totalGold = $rootScope.game.totalGold;
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
                        houses: 0
                    },
                    soldiers: 0,
                    goldRate: 1,
                    totalGold: 0
                }
            };
        }
    };
