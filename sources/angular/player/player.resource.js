'use strict';

angular
  .module('campeonatofutebol')
  .factory('playerResource', playerResource);

function playerResource($resource) {
  return $resource('http://localhost:8080/cf/api/player/:playerId', null, {
    'update': {
      method: 'PUT',
    },
  });
}
