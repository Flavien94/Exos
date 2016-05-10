var app = angular.module('Devis', []);

app.controller('DevisController', function($scope) {
$scope.cart = [
    {
    name : "Valeur 1",
     q:1,
     price:2.0,
  },
  {
  name : "Valeur 2",
   q:2,
   price:3.0,
},
{
name : "Valeur 3",
 q:3,
 price:4.0,
},];
  $scope.title='Calculez votre devis';
  $scope.delete1 = function() {
    console.log('ok');
      $scope.qte1 = '';
      $scope.pu1 = '';
      save();
  };
  $scope.delete2 = function() {
      $scope.qte2 = '';
      $scope.pu2 = '';
      save();
  };
  $scope.delete3 = function() {
      $scope.qte3 = '';
      $scope.pu3 = '';
      save();
  };
});
