'use strict';

angular.module('tikrApp')
  .controller('PubCtrl', function ($scope, $http, $stateParams) {
    // $scope.data = 'Hello';

    $scope.getUserProfile = function() {
      var githubUsername = $stateParams.username;
      var url = 'api/pub/'+githubUsername;

      return $http({
        method: 'GET',
        url: url
      }).
      success(function(profile) {
        $scope.userProfile = profile;
        console.log("profile: ", $scope.userProfile);
      }).
      error(function(data, status) {
        console.log("error:", data);
      });
    };
    $scope.getUserProfile();
  });
