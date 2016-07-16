'use strict';

function familiesDirective(/* inject dependencies here, i.e. : $rootScope */) {
  return {
    restrict: 'E',
    bindToController: {},
    controller: FamiliesController,
    controllerAs: 'families',
    templateUrl: 'directives/families/families.html'
  };
}

FamiliesController.$inject = ['$rootScope', '$gameConstants', '$mdDialog'];
function FamiliesController ($rootScope, $gameConstants, $mdDialog) {
  var vm = this;
  vm.showBeforeFightDialog = _showBeforeFightDialog;

  initialize();

  /////////////////////

  function initialize() {
    vm.families = _getFamilies(); //it already refresh vm.families
  }

  function _getFamilies() {
    var _ = window._;
    var _families = $gameConstants.FAMILIES;
    _.each(_families, function (family) {
      //LOOK IF FAMILY IS ALREADY DEFEATED
      var familyAlreadyDefeated = false;
      family.alreadyDefeated = familyAlreadyDefeated;
    });
    return _families;
  }

  /* BEFORE FIGHT DIALOG MANAGEMENT */
  function _showBeforeFightDialog(ev, familyName) {
    $mdDialog.show({
      controller: _beforeFightDialogController,
      templateUrl: 'directives/families/families.beforeFighting.dialog.html',
      locals: {
        familyName: familyName
      },
      clickOutsideToClose:true
    });
  }

  function _beforeFightDialogController($scope, $mdDialog, familyName) {
    $scope.familyName = familyName;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.fight = function() {
      console.log($scope.beforeFight);
    };
  }

  /* AFTER FIGHT DIALOG MANAGEMENT */
}

module.exports = familiesDirective;
