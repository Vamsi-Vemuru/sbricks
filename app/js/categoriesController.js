var categoriesController = angular.module('categoriesController',[]);

var categories = ['PoplarServices', 'Cleaning', 'Repairs'];

categoriesController.controller('CategoriesCardController', function($scope) {
	$scope.categories = categories;
});