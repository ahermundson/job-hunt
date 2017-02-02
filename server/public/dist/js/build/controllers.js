myApp.controller('ApplicationController', ['$http', '$location', function($http, $location) {
  console.log("Application Controller running");

  const self = this;

  self.submitNewApp = function() {
    console.log("SubmitNewApp clicked");
  }



}]);

myApp.controller('HomeController', ['$http', '$location', function($http, $location) {
  console.log("Home Controller running");

  const self = this;

  self.newApplication = function() {
    $location.path('/application')
  }


}]);