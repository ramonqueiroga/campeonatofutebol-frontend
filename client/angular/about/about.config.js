/* globals angular */
'use strict';

angular
  .module('campeonatofutebol')
  .config(aboutConfig);

function aboutConfig($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.template.html',
      controller: 'AboutController',
      controllerAs: 'aboutController',
    });
}
