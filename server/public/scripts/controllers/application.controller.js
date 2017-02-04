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
