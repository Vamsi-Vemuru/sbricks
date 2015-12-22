'use strict';

/* App Module */

var sbricksApp = angular.module('sbricksApp', ['ngMaterial','ngRoute','categoriesController']);

sbricksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/categories/index.html',
        controller: 'CategoriesCardController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);