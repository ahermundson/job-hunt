myApp.controller('ApplicationController', ['$http', '$location', function($http, $location) {
  console.log("Application Controller running");

  const self = this;

  self.submitNewApp = function() {
    console.log("SubmitNewApp clicked");
  }



}]);
