'use strict';

angular.module('accountForm11App')
  .controller('MainCtrl',['$scope','getData','$location','titles','questions','sendData','checkEmail','$filter','show',
                            function ($scope,getData,$location,titles,questions,sendData,checkEmail,$filter,show) {
    // get form titles & init form
    $scope.titles = titles;
    $scope.show = show;
    $scope.form = {};
    $scope.status={
        sending: false,
        success: false,
        error  : false,
        msg    : ''
    };

    // get security questions
    questions('he-IL').then(function(res){$scope.questions = res.data.questions;});

    // get id from url
    var id = ($location.search()).id;

    // if id exist get account data
    if (typeof (id)!='undefined'){
        getData(id).then(function(res){
            $scope.account = res.data; // save data to 'account' obj
            if (res.data.email!='null'){ // if email not null
                checkEmail(res.data.email).then(function(res) { // check if exist
                    console.log('email exists? ' + res.data.exists);
                    if (res.data.exists === true) {
                        $scope.account.email = ''; // if exist clear email
                    } else {
                        $scope.account.email_conf = res.data.email; // if not exist duplicate conf
                    }
                });
            } else {
                $scope.account.email = ''; // if null clear email
            }
        });
    };

    // send data function
    $scope.create = function(account) {
        if($scope.form.account.$valid){
            // build fixed order number
            $scope.account.orderNumber= $filter('fixedNum')(account.order_id + account.order_year,10);
            // build output object
            var outputObj =
            {
                'server' : 'cloud'                    , //server
                'method' : 'POST'                     , //method
                'action' : 'addusersf'                , //action -sf
                'a'      : 'r'                        , //action - cloud
                'did'    : '5'                        , //distrebutor id (usa=1 , israel =5 ,germany =7)
                'ln'     : $scope.account.lname       , //last name
                'fn'     : $scope.account.fname       , //first name
                'pref'   : $scope.account.pref        , //title
                'bd'     : '01/01/1960'               , //birthday
                'e'      : $scope.account.email       , //email
                'pace'   : '0'                        , //pacemaker
                'g'      : $scope.account.g           , //gender
                'sq'     : $scope.account.question.id , //security question
                'sa'     : $scope.account.answer      , //security Answer
                'p'      : $scope.account.password    , //password
                'pro'    : '1'                        , //is smartheart pro
                'cc'     : '972'                      , //country code
                'c'      : $scope.account.city        , //city
                'str'    : $scope.account.street      , //street
                'sta'    : 'israel'                   , //state
                'z'      : $scope.account.zip         , //zip code
                'pn'     : $scope.account.orderNumber , //deal num
                'sc'     : $scope.account.sc          , //1  = noffedback 2  = feedback
                'rid'    : '1'                        , //role id
                'pns'    : '5'                        , //distrebutor id
                'lic'    : ''                         , //license number
                'bn'     : ''                           //business name
            };


            console.log ('req:');
            console.log (outputObj);

            $scope.status.sending=true;

            sendData(outputObj).then(function(res){
                console.log ('res:');
                console.log(res.data);

                $scope.status.sending=false;
                $scope.status.success=res.data.Success;
                $scope.status.msg=res.data.Msg;
                if ($scope.status.msg!='') {
                    $scope.status.error=true;
                }


            });

        }
    }
  }]);
