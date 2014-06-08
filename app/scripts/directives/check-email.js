'use strict';

angular.module('accountForm11App')
  .directive('checkEmail', ['checkEmail', function (checkEmail) {
        return {
            require:'ngModel',
            restrict:'A',
            link:function (scope, el, attrs, ctrl) {
                if (ctrl.$viewValue=""){
                    ctrl.$setValidity('exist', false); // default is invalid
                } else {
                    ctrl.$setValidity('exist', true); // default is invalid
                }

                el.bind('blur',function(){
                    if (!ctrl.$error.pattern){  // check email exists if no pattren err
                        var email=ctrl.$viewValue;
                        checkEmail(email).then(function(res) {
                            console.log (email+' exists? ' +res.data.exists);
                            if (res.data.exists === true) {
                                ctrl.$setValidity('exist', false);
                            } else {
                                ctrl.$setValidity('exist', true);
                            }
                        });
                    }
                });
            }
        };
  }]);
