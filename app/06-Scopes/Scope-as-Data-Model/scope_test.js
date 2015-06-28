describe('scope test', function() {

    var scopeMock = {};

    beforeEach(module('scopeExample'));

    it('should say hello', inject(function($controller) {
        var ctrl = $controller('ScopeTestController', {
            $scope: scopeMock
        });

        // Assert that username is pre-filled
        expect(scopeMock.username).toEqual('World');

        // Assert that we read new username and greet
        scopeMock.username = 'angular';
        scopeMock.sayHello();
        expect(scopeMock.greeting).toEqual('Hello angular!');
    }));

});