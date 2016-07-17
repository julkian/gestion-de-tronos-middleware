'use strict';

module.exports = /*@ngInject*/
  function homeController($mdDialog) {
    var vm = this;
    vm.restart = function() {

      //do stuff
      $mdDialog.cancel();
    };

  };
