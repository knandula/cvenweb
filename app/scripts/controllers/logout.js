'use strict';

angular.module('cvenApp').controller('LogoutCtrl', function (authToken, $state,dataservice) {
  authToken.removeToken();
  dataservice.remove();
  $state.go('main');
  });
