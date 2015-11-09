'use strict';

angular.module('cvenApp').controller('headerCtrl', function ($scope,authToken,dataservice) {

  $scope.isAuthenticated = authToken.isAuthenticated;
  $scope.username = dataservice.username;

});
