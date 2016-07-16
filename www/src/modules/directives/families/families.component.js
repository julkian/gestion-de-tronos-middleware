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
  vm.fightAgainst = _fightAgainst;

  initialize();

  /////////////////////

  function initialize() {
    vm.families = _getFamilies(); //it already refresh vm.families
  }

  function _fightAgainst(ev, familyName) {
    console.log(familyName);
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
}

module.exports = familiesDirective;
