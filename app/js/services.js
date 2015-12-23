'use strict';

/* Services */

var sbricksServices = angular.module('sbricksServices', ['ngResource']);

sbricksServices.factory('Categories', ['$resource',
  function($resource){
    return $resource('content/categories.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
