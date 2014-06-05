'use strict';

angular.module('accountForm11App')
  .controller('MainCtrl',['$scope','getData','$location','titles','questions','sendData',
                            function ($scope,getData,$location,titles,questions,sendData) {
    // get form titles & init form
    $scope.titles = titles;
    $scope.form = {};

    // get security questions
    questions('he-IL').then(function(res){$scope.questions = res.data.questions;});

    // get id from url
    var id = ($location.search()).id;

    // if id exist get account data
    if (typeof (id)!='undefined'){
        getData(id).then(function(res){
            $scope.account = res.data;
        });
    };

    // send data
    $scope.create = function(account) {
        if($scope.form.account.$valid){

        } else {
           console.log  ($scope.form.account);
        }
    }
  }]);
