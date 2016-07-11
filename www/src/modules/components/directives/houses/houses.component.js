'use strict';

module.exports = /*@ngInject*/
    function houses(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            restrict: 'E',
            templateUrl: 'houses.html',
            controllerAs: 'Houses',
            controller: HousesController,
            bindToController: {

            }
        };
    };

    HousesController.$inject = ['$scope'];
    function HousesController ($scope) {
        var vm = this;
    }
