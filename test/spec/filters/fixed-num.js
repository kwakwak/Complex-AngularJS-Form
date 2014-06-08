'use strict';

describe('Filter: fixedNum', function () {

  // load the filter's module
  beforeEach(module('accountForm11App'));

  // initialize a new instance of the filter before each test
  var fixedNum;
  beforeEach(inject(function ($filter) {
    fixedNum = $filter('fixedNum');
  }));

  it('should return the input prefixed with "fixedNum filter:"', function () {
    var text = 'angularjs';
    expect(fixedNum(text)).toBe('fixedNum filter: ' + text);
  });

});
