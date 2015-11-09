'use strict';

/**
 * @ngdoc function
 * @name cvenApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the cvenApp
 */
angular.module('cvenApp').controller('ProfileCtrl', function ($scope,dataservice,APIURL,$http,alert) {
  $scope.email = dataservice.email();
  $scope.username = dataservice.username();
  $scope.id = dataservice.id();

  $scope.update = function(){

    var url = APIURL + 'updateprofile';

    var newUserData = {
      userid:$scope.id,
      username: $scope.username,
      email: $scope.email
    }

    if($scope.password && $scope.password.length > 0){
      newUserData.password = $scope.password;
    }

    $http.post(url, newUserData)
      .success(function (res) {
        alert("success",'account updated !');
        authToken.setToken(res.token);
        dataservice.setUser(res.user);
      })
      .error(function (res) {
        alert("warning",'oops !!','could not update');
      });
  };

  });
