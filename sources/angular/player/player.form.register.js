'use strict';

angular
  .module('campeonatofutebol')
  .factory('playerFormRegister', playerFormRegister);

function playerFormRegister(playerResource, $q) {
  let service = {};
  service.register = function register(player) {
    return $q(function registerPromise(resolve, reject) {
      if (player.id) {
        //aqui deverá ter a ação de atualizar o player
      } else {
        playerResource.save(player, function() {
          resolve({
            message: 'Player ' + player.name + ' registered',
          });
          console.log('salvou');
        }, function(error) {
          reject({
            message: 'Player not registered',
          });
          console.log(error);
        });
      }
    });
  };
  return service;
};
