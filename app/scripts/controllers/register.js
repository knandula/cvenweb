'use strict';

angular.module('cvenApp').controller('RegisterCtrl', function ($scope,$rootScope,$http,alert,authToken,APIURL,dataservice) {
  $scope.submit = function() {

    var url = APIURL + 'register';

    var user = {
      email: $scope.email,
      password: $scope.password,
      username: $scope.username
    };

    $http.post(url, user)
      .success(function (res) {
        alert("success",'Account Created !','Welcome , ' + res.user.email + '!');
        authToken.setToken(res.token);
        dataservice.setUser(res.user);
      })
      .error(function (res) {
        alert("warning",'oops !!','email already exists / could not register');
      });
  }
});

