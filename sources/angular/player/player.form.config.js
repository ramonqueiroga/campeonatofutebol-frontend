'use strict';

angular
  .module('campeonatofutebol')
  .config(playerFormConfig);

function playerFormConfig($stateProvider) {
  $stateProvider.state('playerForm', {
    url: '/player/new',
    templateUrl: 'templates/player.form.template.html',
    controller: 'PlayerFormController',
    controllerAs: 'playerFormController',
  });
};
