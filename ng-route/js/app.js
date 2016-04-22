var app = angular.module('Router', ['ngRoute']);
// Routes
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/enter.html',
      controller: 'EnterController'
    }).
    when('/wall', {
      templateUrl: '/partials/wall.html',
      controller: 'WallController'
    }).
    otherwise({
      redirectTo: '/'
    });
});
