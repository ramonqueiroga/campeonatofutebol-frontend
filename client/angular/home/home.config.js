/* globals angular */
'use strict';

angular
  .module('campeonatofutebol')
  .config(homeConfig);

function homeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html',
      controller: 'HomeController',
      controllerAs: 'homeController',
    });
}
