'use strict';

describe('Controller: PubCtrl', function () {

  // load the controller's module
  beforeEach(module('tikrApp'));

  var PubCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PubCtrl = $controller('PubCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
