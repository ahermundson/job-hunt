myApp.controller('ApplicationController', ['$http', '$location', function($http, $location) {
  console.log("Application Controller running");

  const self = this;
  self.newApp = {};

  self.submitNewApp = function() {
    console.log("SubmitNewApp clicked");
    console.log(self.newApp);
    $http({
      method: 'POST',
      url: '/application',
      data: self.newApp
    })
    .then(function(response) {
      console.log("Response form post: ", response);
      self.newApp = {};
    })
  }
}]);

myApp.controller('AppViewController', ['$http', '$location', function($http, $location) {
  console.log("AppView Controller Loaded");
  var self = this;
  getApps();


  function getApps() {
    $http({
      method: 'GET',
      url: '/application'
    })
    .then(function(response) {
      console.log("response from get: ", response);
      self.applications = response.data;
    })
  }

}]);

myApp.controller('HomeController', ['$http', '$location', function($http, $location) {
  console.log("Home Controller running");

  const self = this;

  self.newApplication = function() {
    $location.path('/application')
  }


}]);
