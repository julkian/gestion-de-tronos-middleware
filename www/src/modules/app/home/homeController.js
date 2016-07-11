'use strict';

module.exports = /*@ngInject*/
    function homeController($scope, $interval) {
        $scope.goldRate = 1;

        $scope.$watch('goldRate', function(newValue, oldValue) {
            //watch for the goldRate to change
        });

        var vm = this;
        vm.welcome = 'Bienvenido a gestión de tronos!';
        vm.title = 'Texto ejemplo';
    };
