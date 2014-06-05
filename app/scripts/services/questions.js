'use strict';

angular.module('accountForm11App')
  .factory('questions',['$http','proxy', function ($http,proxy) {
        return function(lang) {
            return $http.get(proxy, {params: {'a': 'q', 'did': 1, 'l': lang, 'server': 'cloud', 'method': 'POST'}});
        };
    }]);