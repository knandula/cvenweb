'use strict';

angular.module('cvenApp').controller('PostsCtrl', function ($scope,$http,APIURL,dataservice,$rootScope) {

  $scope.reload = function() {
    var urlget = APIURL + 'posts';
    $http.get(urlget).success(function (data) {
      $scope.posts = data;
    });
  }


  $scope.submit = function() {
    var url = APIURL + 'posts';
    $scope.userid = dataservice.id;
    $scope.usrname = dataservice.username;

    console.log($scope.usrname());

    var content = {
      content: $scope.content,
      timestamp: new Date(),
      username: $scope.usrname()
    };
    var request = $http({method: "post", url: url, data: content});
    request.success(function (res) {
      $scope.posts = res;
    });

    $scope.reload();

  }

  $scope.reload();
  });
