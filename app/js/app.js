'use strict';

/* App Module */

var sbricksApp = angular.module('sbricksApp', ['ngMaterial', 'ngAria', 'ngRoute', 'categoriesController', 'sbricksServices']);

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