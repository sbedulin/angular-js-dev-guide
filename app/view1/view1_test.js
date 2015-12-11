'use strict';

describe('myApp.view1 module', function() {
  beforeEach(module('myApp.view1'));

  it('should test global variable', function () {
    expect(window.actionUrl).toBeDefined();
    expect(window.foo).toEqual({ bar: 'bar'});
  });

  describe('view1 controller', function(){
    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});