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
