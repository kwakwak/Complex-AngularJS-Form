'use strict';

angular.module('accountForm11App')
  .controller('MainCtrl',['$scope','getData','$location','titles','questions',
                            function ($scope,getData,$location,titles,questions) {
    // get form titles
    $scope.titles = titles;
    // get security questions
    questions('he-IL').then(function(res){$scope.questions = res.data.questions;});
    // get id from url
    var id = ($location.search()).id;
    // if id exist get account data
    if (typeof (id)!='undefined'){
        getData.then(function(res){
            console.log(res.data);
        });
    }
  }]);
