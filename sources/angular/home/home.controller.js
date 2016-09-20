'use strict';

angular
  .module('campeonatofutebol')
  .controller('HomeController', HomeController);

function HomeController () {
  let vm = this;
  vm.user = {
    title: '',
    email: '',
  };
  vm.viewName = 'Home';
  vm.enviar = function() {
    console.log(vm.user.title + ' ' + vm.user.email);
  };
}
