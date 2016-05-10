var app = angular.module('Chat', []);

app.controller('MessageController', function($scope,$controller) {
  $scope.listMessage = JSON.parse(localStorage.getItem("listMessage")) || [];
  $scope.sendMessage = function() {
      $scope.listMessage.push($scope.newMessage);
      $scope.newMessage = '';
      console.log($scope.listMessage);
      save();
  };
  var save = function() {
      localStorage.setItem("listMessage", JSON.stringify($scope.listMessage));
  };
});
