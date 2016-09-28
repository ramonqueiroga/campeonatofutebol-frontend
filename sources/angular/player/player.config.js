'use strict';

angular
  .module('campeonatofutebol')
  .config(playerConfig);

function playerConfig($stateProvider) {
  $stateProvider.state('player', {
    url: '/player',
    templateUrl: 'templates/player.template.html',
    controller: 'PlayerController',
    controllerAs: 'playerController',
  });
};
