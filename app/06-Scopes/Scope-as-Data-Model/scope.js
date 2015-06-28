angular.module('scopeExample', [])
    .controller('ScopeTestController', ['$scope', function($scope) {
        $scope.username = 'World';

        $scope.sayHello = function() {
            $scope.greeting = 'Hello ' + $scope.username + '!';
        };
    }]);