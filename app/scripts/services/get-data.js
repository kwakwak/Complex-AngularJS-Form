'use strict';

angular.module('accountForm11App')
  .factory('getData',['$http', function ($http) {
    return $http.get('http://www.mocky.io/v2/538d8df07195c90501f1fb25');
  }]);
