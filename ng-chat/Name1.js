app.controller('Name2Controller', function($scope) {
  // localStorage.clear();
  $scope.listName = JSON.parse(localStorage.getItem("listName")) || [];
  $scope.sendName = function() {
      $scope.listName.push($scope.newName);
      $scope.newName = '';
      console.log($scope.listName);
      saveName();
      document.getElementById("login2").style.visibility = "hidden";
  };
  var saveName = function() {
      localStorage.setItem("listName", JSON.stringify($scope.listName));
  };
});
app.controller('Name3Controller', function($scope) {
  // localStorage.clear();
  $scope.listName = JSON.parse(localStorage.getItem("listName")) || [];
  $scope.sendName = function() {
      $scope.listName.push($scope.newName);
      $scope.newName = '';
      console.log($scope.listName);
      saveName();
      document.getElementById("login3").style.visibility = "hidden";
  };
  var saveName = function() {
      localStorage.setItem("listName", JSON.stringify($scope.listName));
  };
});
