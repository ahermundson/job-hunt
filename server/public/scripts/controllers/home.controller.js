myApp.controller('HomeController', ['$http', '$location', function($http, $location) {
  console.log("Home Controller running");

  const self = this;

  self.newApplication = function() {
    $location.path('/application')
  }


}]);
