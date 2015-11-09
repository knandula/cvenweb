'use strict';

describe('Controller: HearderCtrl', function () {

  // load the controller's module
  beforeEach(module('cvenApp'));

  var HearderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HearderCtrl = $controller('HearderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HearderCtrl.awesomeThings.length).toBe(3);
  });
});
