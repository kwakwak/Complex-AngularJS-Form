'use strict';

angular.module('accountForm11App')
  .factory('getData',['$http','proxy', function ($http,proxy) {
        return function(id) {
            return $http.get(proxy,{params: {'cp':id,'server':'sh-il','method':'POST'}});
        };
    }]);