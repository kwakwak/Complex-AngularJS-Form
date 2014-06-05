'use strict';

angular.module('accountForm11App')
  .factory('sendData',['$http','proxy', function ($http,proxy) {
        return function(data) {
            return $http.get(proxy, {params: data});
        };
    }]);