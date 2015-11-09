'use strict';

describe('Directive: bothequal', function () {

  // load the directive's module
  beforeEach(module('cvenApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bothequal></bothequal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bothequal directive');
  }));
});
