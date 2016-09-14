/* globals angular */
'use strict';

angular
  .module('campeonatofutebol')
  .controller('HomeController', HomeController);

function HomeController () {
  this.viewName = 'Home';
}
