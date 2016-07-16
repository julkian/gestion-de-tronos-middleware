'use strict';

module.exports = /*@ngInject*/
  function homeController($interval, $rootScope) {
    var vm = this;

    $rootScope._intervalGoldPromise = $interval(function () {
      $rootScope.game.totalGold += $rootScope.game.goldRate;
    }, 1000);
   /*
        user: {
          _id: "5783d2eb452031dc1fdd7fed",
          name: 'killian',
          password: 'some weird shit'
        },
        game: {
          houseName: "Pereanster",
          familiesDefeated: {
            Tully: false,
            Tyrell: false,
            Martell: false,
            Greyjoy: false,
            Baratheon: false,
            Stark: false,
            Lannister: false,
            Targaryen: false
          },
          buildings: {
            houses: 0
          },
          soldiers: 0,
          goldRate: 1,
          totalGold: 0,
          septonMultiplier: 1
        }
*/
  };
