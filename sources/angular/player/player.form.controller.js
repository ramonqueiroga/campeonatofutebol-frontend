'use strict';

angular
  .module('campeonatofutebol')
  .controller('PlayerFormController', PlayerFormController);

function PlayerFormController(playerFormRegister) {
  let vm = this;
  vm.player = {};
  vm.sendForm = function sendForm() {
    console.log(vm.player);
    playerFormRegister
      .register(vm.player)
      .then(function(success) {
        vm.message = success.message
      }, function(error) {
        console.log('Nao funcionou ' + error);
      });
  };
};
