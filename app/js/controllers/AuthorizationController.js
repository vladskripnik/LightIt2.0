'use strict';
/*Authorization Controller*/
phonecatApp.controller('authorizationCtrl',[
  '$scope','$http','$location',
  function($scope, $http, $location, myService) {
   $scope.adduser =  function(login, password) {
     var data =({
      username:$scope.login,
      password:$scope.password
    });
     alert('Cпасибо за авторизацию!')
     $http.post('http://smktesting.herokuapp.com/api/login/', data)
     .success(function (result, token, tokenadd){
      console.log(result);
      $scope.token = result['token'];
      var tokenadd = $scope.token;
      localStorage.setItem('Token',tokenadd);
      console.log(tokenadd);
      $location.path("#/");
    })
     .error(function (data,status){
      console.log(data);
      console.log(status);
    });  
   }
 }
 ]);
