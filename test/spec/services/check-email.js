'use strict';

describe('Service: checkEmail', function () {

  // load the service's module
  beforeEach(module('accountForm11App'));

  // instantiate service
  var checkEmail;
  beforeEach(inject(function (_checkEmail_) {
    checkEmail = _checkEmail_;
  }));

  it('should do something', function () {
    expect(!!checkEmail).toBe(true);
  });

});
