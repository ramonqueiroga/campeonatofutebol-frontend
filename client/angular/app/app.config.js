/* globals angular */
'use strict';

angular
  .module('campeonatofutebol')
  .config(appConfig);

function appConfig($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
