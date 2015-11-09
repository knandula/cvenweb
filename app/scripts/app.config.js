/**
 * Created by knandula on 11/6/2015.
 */
angular.module('cvenApp').config(function($httpProvider,$urlRouterProvider,$stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main',{
    url: '/',
    templateUrl: '/views/main.html'
  }),
 $stateProvider.state('register',{
    url: '/register',
    templateUrl: '/views/register.html',
   controller: 'RegisterCtrl'
  }),
    $stateProvider.state('login',{
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    }),
    $stateProvider.state('posts',{
    url: '/posts',
    templateUrl: '/views/posts.html',
    controller: 'PostsCtrl'
  }),
    $stateProvider.state('profile',{
      url: '/profile',
      templateUrl: '/views/profile.html',
      controller: 'ProfileCtrl'
    }),
    $stateProvider.state('logout',{
      url: '/logout',
      controller: 'LogoutCtrl'
    });

  $httpProvider.interceptors.push('authinterceptor');
})
.constant('APIURL','http://localhost:7203/');
