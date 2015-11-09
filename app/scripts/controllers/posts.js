'use strict';

angular.module('cvenApp').controller('PostsCtrl', function ($scope,$http,APIURL,dataservice,$rootScope) {

  $scope.usrname = dataservice.username;
  $scope.editmode = false;
  $scope.cancel = false;

  $scope.validuser = function(author)
  {
    if($scope.usrname() == author)
    return true;
    else
    return false;
  }

  $scope.cancelEdit = function(){
    $scope.editmode = false;
  }

  $scope.deletepost = function(item){
    var url = APIURL + 'posts/delete/' + item._id;
    var request = $http({method: "delete", url: url});
    request.success(function (res) {
      $scope.reload();
    });
    $scope.reload();
  }

  $scope.deletecomment = function(item){
    var url = APIURL + 'comments/delete/' + item._id;

    var request = $http({method: "delete", url: url});
    request.success(function (res) {
      $scope.reload();
    });
    $scope.reload();
  }

  $scope.editpost = function(item,text){
    $scope.editmode = true;
    item.content = text;
    console.log(item);
    var url = APIURL + 'updatepost';
    var request = $http({method: "post", url: url, data: item});
    request.success(function (res) {
      $scope.editmode = false;
      $scope.reload();
    });
    $scope.reload();
  }

  $scope.editcomment = function(item,text){
    $scope.editmode = true;
    item.commentcontent = text;
    console.log(item);
    var url = APIURL + 'updatecomment';
    var request = $http({method: "post", url: url, data: item});
    request.success(function (res) {
      $scope.editmode = false;
      $scope.reload();
    });
    $scope.reload();

  }


  $scope.getcomments = function(id) {
    var comments = [];
    var rc = $scope.comments;
    if(rc != undefined) {
      for (var i = 0; i < rc.length; i++) {
        var obj = rc[i];
        if (obj.postid == id) {
          comments.push(obj);
        }
      }
    }
    return comments;
  }

  $scope.reload = function() {
    var urlget = APIURL + 'posts';
    var urlcomments = APIURL + 'comments';

    $scope.posts ;
    $scope.comments

    $http.get(urlget).success(function (data) {
      $scope.posts = data;
    });

    $http.get(urlcomments).success(function (data) {
      $scope.comments = data;
    });

  }


  $scope.comment = function(postid,text){
    var url = APIURL + 'postcomment';
    var urlcomments = APIURL + 'comments';
    $scope.userid = dataservice.id;
    $scope.usrname = dataservice.username;

    var content = {
      postid: postid,
      content:  text,
      postedon: new Date(),
      author: $scope.usrname()
    }
    var request = $http({method: "post", url: url, data: content});
    request.success(function (res) {
       $scope.comments = res;
    });
    $scope.reload();
  }

  $scope.submit = function() {
    var url = APIURL + 'posts';
    $scope.userid = dataservice.id;
    $scope.usrname = dataservice.username;

    var content = {
      content: $scope.content,
      timestamp: new Date(),
      username: $scope.usrname()
    };
    var request = $http({method: "post", url: url, data: content});
    request.success(function (res) {

    });
    $scope.reload();
  }

  $scope.reload();
  });
