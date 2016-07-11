'use strict';

    function housesDirective(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            restrict: 'E',
            controller: HousesController,
            controllerAs: 'Houses',
            templateUrl: './houses.html',
            bindToController: {}
        };
    }

    HousesController.$inject = ['$scope', '$timeout'];
    function HousesController ($scope, $timeout) {
        var vm = this;

        initialize();

        /////////////////////

        function initialize() {
            console.log('wtf');
        }
    }

module.exports = housesDirective;