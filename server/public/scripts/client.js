var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/application', {
      templateUrl: '/views/templates/application.html',
      controller: 'ApplicationController',
      controllerAs: 'app'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
