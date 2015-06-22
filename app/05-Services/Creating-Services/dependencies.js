var batchModule = angular.module('batchModule', []);

/**
 * Registering a Service with $provide
 * You can also register services via the $provide service inside of a module's config function:
 * This technique is often used in unit tests to mock out a service's dependencies.
*/
batchModule.config(['$provide', function($provide) {
    $provide.factory('serviceId', function() {
        var shinyNewServiceInstance;

        // factory function body that constructs shinyNewServiceInstance
        return shinyNewServiceInstance;
    });
}]);

/**
 * The `batchLog` service allows for messages to be queued in memory and flushed
 * to the console.log every 50 seconds.
 *
 * @param {*} message Message to be logged.
 */
batchModule.factory('batchLog', ['$interval', '$log', function($interval, $log) {
    var messageQueue = [];

    function log() {
        if (messageQueue.length) {
            $log.log('batchLog messages: ', messageQueue);
            messageQueue = [];
        }
    }

    // start periodic checking
    $interval(log, 50000);

    return function(message) {
        messageQueue.push(message);
    }
}]);

/**
 * `routeTemplateMonitor` monitors each `$route` change and logs the current
 * template via the `batchLog` service.
 */
batchModule.factory('routeTemplateMonitor', ['$route', 'batchLog', '$rootScope',
    function($route, batchLog, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function() {
            batchLog($route.current ? $route.current.template : null);
        });
    }]);