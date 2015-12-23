'use strict';

var categoriesController = angular.module('categoriesController',[]);

categoriesController.controller('CategoriesCardController',['$scope','Categories', function($scope, Categories) {
	$scope.categories = Categories.query();
}]);