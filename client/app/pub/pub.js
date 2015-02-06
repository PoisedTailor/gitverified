'use strict';

angular.module('tikrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pub', {
        url: '/pub/:username',
        templateUrl: 'app/pub/pub.html',
        controller: 'PubCtrl'
      });
  });
  