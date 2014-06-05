'use strict';

describe('Service: titles', function () {

  // load the service's module
  beforeEach(module('accountForm11App'));

  // instantiate service
  var titles;
  beforeEach(inject(function (_titles_) {
    titles = _titles_;
  }));

  it('should do something', function () {
    expect(!!titles).toBe(true);
  });

});
