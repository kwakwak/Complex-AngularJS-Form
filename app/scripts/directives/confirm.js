'use strict';

angular.module('accountForm11App')
  .directive('confirm', function () {
        return {
            restrict: 'A',
            scope: true,
            require: 'ngModel',
            link: function(scope, elem, attrs, control) {

                var emailChecker = function() {
                    var e1 = scope.$eval(attrs.ngModel);
                    var e2 = scope.$eval(attrs.confirm);
                    return e1 == e2;
                };

                scope.$watch(emailChecker, function(n) {
                    control.$setValidity("match", n);
                });
            }
        }
  });
