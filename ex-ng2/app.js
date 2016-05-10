var app = angular.module('jsonApp', []);
app.controller('jsonController', function($scope, $http) {
  $scope.categories = ['id','firstname','surname','gender','birthday','height'];
  $http.get("person.json").success(function(data) {
      $scope.person = data;
      $scope.predicate = 'age';
  $scope.reverse = true;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };
   });
});
