var app = angular.module('jsonApp', []);
app.controller('jsonController', function($scope,$http) {
  $http.get("person.json").success(function(data) {
      $scope.person = data;
   });
});
