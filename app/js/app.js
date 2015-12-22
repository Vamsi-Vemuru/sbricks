'use strict';

/* App Module */

var sbricksApp = angular.module('sbricksApp', ['ngMaterial','ngRoute']);

sbricksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/categories/index.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);