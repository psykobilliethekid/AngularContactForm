var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', function($scope){
     
    $scope.register = function(){
          $scope.message = 'Thank you' + " " + $scope.user.firstname + "! Someone will contact you shortly.";
    };
}]);