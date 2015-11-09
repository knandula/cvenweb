'use strict';

angular.module('cvenApp').controller('LoginCtrl', function ($scope,$state,$http,alert,authToken,APIURL,dataservice) {

  $scope.submit = function() {
    var url = APIURL + 'login';

    var user = {
      email: $scope.email,
      password: $scope.password
    };

    $http.post(url, user)
      .success(function (res) {
        alert('success','welcome  ',res.user.email);
        authToken.setToken(res.token);
        dataservice.setUser(res.user);
        console.log(res.user);
        $state.go('posts');
      })
      .error(function (err) {
        alert('warning','something went wrong',err.message);
      });
  };
  });

