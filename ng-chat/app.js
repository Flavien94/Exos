var app = angular.module('Chat', [])
    .run(function($rootScope) {
        $rootScope.listName1 = [];
        $rootScope.listName2 = [];
        $rootScope.listName3 = [];
        $rootScope.listMsg = [];
        $rootScope.listPrivate1 = [];
        $rootScope.listPrivate2 = [];
        $rootScope.listPrivate3 = [];
        $rootScope.listError1 = [];
        $rootScope.listError2 = [];
        $rootScope.listError3 = [];
    });

app.controller('Name1Controller', function($scope, $rootScope) {
    document.getElementById("chat1").style.visibility = "hidden";
    $scope.sendName = function() {
      var nul = /\S/.test($scope.newName);
      if ($scope.newName === undefined || nul === false) {
        var error = 'Veuillez entrer un nom valide';
        $scope.listError1.push(error);
      }
      else {
        $scope.listError1 = [];
        var t_name = document.createTextNode($scope.newName);
        name_t1.appendChild(t_name);
        $scope.listName1.push($scope.newName);
        document.getElementById("login1").style.visibility = "hidden";
        document.getElementById("chat1").style.visibility = "visible";
      }
    };
    $scope.sendMessage = function() {
        $scope.msg = '@' + $scope.newName + ' : ' + $scope.newMessage;
        var n = $scope.newMessage.search('@');
        if (n === 0) {
            var user2 = $scope.listName2;
            var user3 = $scope.listName3;
            var private_name2 = $scope.newMessage.indexOf(user2);
            var private_name3 = $scope.newMessage.indexOf(user3);
            if (private_name2 === 1) {
                var user2_length = $scope.listName2.toString().length;
                var user2_splice = $scope.newMessage.slice(user2_length+1);
                $scope.listPrivate2.push('@'+$scope.listName1 +' : '+ user2_splice);
                $scope.listPrivate1.push('@'+$scope.listName1 +' : '+ user2_splice);
                $scope.listError1 = [];
            }
            else {
              var error = 'Cet utilisateur existe pas ou est mal écris';
              $scope.listError1.push(error);
            }
            if (private_name3 === 1) {
              var user3_length = $scope.listName2.toString().length;
              var user3_splice = $scope.newMessage.slice(user3_length+1);
              $scope.listPrivate3.push('@'+$scope.listName1 +' : '+ user3_splice);
              $scope.listError1 = [];
            }
        }
        else {
            $scope.listMsg.push($scope.msg);
        }
        $scope.newMessage = '';
    };
});
app.controller('Name2Controller', function($scope, $rootScope) {
  document.getElementById("chat2").style.visibility = "hidden";
  $scope.sendName = function() {
  var nul = /\S/.test($scope.newName);
  if ($scope.newName === undefined || nul === false) {
    var error = 'Veuillez entrer un nom valide';
    $scope.listError2.push(error);
  }
  else {
    var t_name = document.createTextNode($scope.newName);
    name_t2.appendChild(t_name);
    $scope.listName2.push($scope.newName);
    document.getElementById("login2").style.visibility = "hidden";
    document.getElementById("chat2").style.visibility = "visible";
  }
};
  $scope.sendMessage = function() {
      $scope.msg = '@' + $scope.newName + ' : ' + $scope.newMessage;
      var n = $scope.newMessage.search('@');
      if (n === 0) {
          var user1 = $scope.listName1;
          var user3 = $scope.listName2;
          var private_name1 = $scope.newMessage.indexOf(user1);
          var private_name3 = $scope.newMessage.indexOf(user3);
          if (private_name1 === 1) {
              var user1_length = $scope.listName1.toString().length;
              var user1_splice = $scope.newMessage.slice(user1_length+1);
              $scope.listPrivate1.push('@'+$scope.listName2 +' : '+ user1_splice);
          }
          if (private_name3 === 1) {
            var user3_length = $scope.listName3.toString().length;
            var user3_splice = $scope.newMessage.slice(user3_length+1);
            $scope.listPrivate3.push('@'+$scope.listName1 +' : '+ user3_splice);
          }
      }
      else {
          $scope.listMsg.push($scope.msg);
      }
      $scope.newMessage = '';
  };
});
app.controller('Name3Controller', function($scope, $rootScope) {
  document.getElementById("chat3").style.visibility = "hidden";
  $scope.sendName = function() {
  var nul = /\S/.test($scope.newName);
  if ($scope.newName === undefined || nul === false) {
    var error = 'Veuillez entrer un nom valide';
    $scope.listError3.push(error);
  }
  else {
    var t_name = document.createTextNode($scope.newName);
    name_t3.appendChild(t_name);
    $scope.listName3.push($scope.newName);
    document.getElementById("login3").style.visibility = "hidden";
    document.getElementById("chat3").style.visibility = "visible";
  }
};
  $scope.sendMessage = function() {
      $scope.msg = '@' + $scope.newName + ' : ' + $scope.newMessage;
      var n = $scope.newMessage.search('@');
      if (n === 0) {
          var user2 = $scope.listName2;
          var user1 = $scope.listName1;
          var private_name2 = $scope.newMessage.indexOf(user2);
          var private_name1 = $scope.newMessage.indexOf(user1);
          if (private_name2 === 1) {
              var user2_length = $scope.listName2.toString().length;
              var user2_splice = $scope.newMessage.slice(user2_length+1);
              $scope.listPrivate2.push('@'+$scope.listName3 +' : '+ user2_splice);
          }
          if (private_name1 === 1) {
            var user1_length = $scope.listName1.toString().length;
            var user1_splice = $scope.newMessage.slice(user1_length+1);
            $scope.listPrivate1.push('@'+$scope.listName1 +' : '+ user1_splice);
          }
      }
      else {
          $scope.listMsg.push($scope.msg);
      }
      $scope.newMessage = '';
  };
});
