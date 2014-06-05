'use strict';

angular.module('accountForm11App')
  .factory('checkEmail',['$http','proxy', function ($http,proxy) {

        var checkEmail = function(email) {
            return $http.get(proxy,{params: {'a':'ve','did':1,'e':email,'server':'cloud','method':'POST'}});
        };

        return checkEmail;

    }]);