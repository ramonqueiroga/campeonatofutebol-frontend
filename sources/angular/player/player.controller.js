'use strict';

angular
  .module('campeonatofutebol')
  .controller('PlayerController', PlayerController);

function PlayerController(playerResource) {
  let vm = this;

  vm.pageTitle = 'Players';
  vm.pageDescription = 'Informations about players';

  playerResource.query(function(players) {
    vm.players = players;
  }, function(error) {
    console.log(error);
  });

}
