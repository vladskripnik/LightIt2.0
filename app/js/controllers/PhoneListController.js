'use strict';

phonecatApp.controller('PhoneListCtrl',[
  '$scope','$http', '$location', 'Phone',
  function($scope, $http, $location, Phone) {

    Phone.query({phoneId: 'phones'}, function(data) {
      $scope.phones = data;
    });
  }
  ]);
