'use strict';

angular.module('cvenApp').service('dataservice', function () {

  var userdata;
  var dataservice = {
    setUser: function (user) {
      userdata=user;
      console.log(userdata);
    },
    getToken: function() {
      if(!userdata)
        userdata = "";
      return userdata;
    },
    remove:function(){
       userdata="";
    },
    email: function() {
      return dataservice.getToken().email;
    },
    id: function() {
      return dataservice.getToken()._id;
    },
    username: function() {
      return dataservice.getToken().username;
    }
  };
  return dataservice;
  });
