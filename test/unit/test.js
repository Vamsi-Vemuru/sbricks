'use strict';

/* jasmine specs for controllers go here */
describe('Categories Controller', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('sbricksApp'));
  beforeEach(module('sbricksServices'));

  describe('categoriesController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('content/categories.json').
          respond([{name: 'Popular Services'}, {name: 'Cleaning'}]);

      scope = $rootScope.$new();
      ctrl = $controller('CategoriesCardController', {$scope: scope});
    }));


    it('should create "categories" model with 2 categories fetched from xhr', function() {
      expect(scope.categories).toEqualData([]);
      $httpBackend.flush();

      expect(scope.categories).toEqualData(
          [{name: 'Popular Services'}, {name: 'Cleaning'}]);
    });
  });
});
