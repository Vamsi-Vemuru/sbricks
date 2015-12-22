'use strict';

var categoriesController = angular.module('categoriesController',[]);

var categories = [
	{
		'name':'PoplarServices',
	 	'services':['Laundry', 'Bathroom Cleaning','Washing Machine Repair']
	},
	{
		'name':'Cleaning',
		'services':['Laundry', 'Bathroom Cleaning','Washing Machine Repair']
	}, 
	{	
		'name':'Repairs',
		'services':['Laundry', 'Bathroom Cleaning','Washing Machine Repair']
	}
	];

categoriesController.controller('CategoriesCardController',['$scope', function($scope) {
	$scope.categories = categories;
}]);