var ship = angular.module('ship', [
    'ngRoute',
    'd3',
    'ui.router',
	'directives'
]);

ship.config(function ($routeProvider, $stateProvider) {
    /*$routeProvider.when('/books/:isbn', {
     templateUrl: 'templates/book_details.html',
     controller: 'BookDetailsCtrl'
     })*/
    $routeProvider
        .when('/apps', {
            templateUrl: 'views/apps.html',
            controller: 'appsCtrl'
        })
        .when('/build:buildId', {
            templateUrl: 'views/build.html',
            controller: 'buildCtrl'
        })
        .otherwise({
            redirectTo: '/apps'
        });

    $stateProvider
        .state('appdetail', {
            url: '/fuuark',
            views: {
                "viewA": {
                    template: "index.viewA"
                },
                "viewB": {
                    template: "index.viewB"
                }
            }
        });
});
