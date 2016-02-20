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
    // $routeProvider
    //     .when('/apps', {
    //         templateUrl: 'views/apps.html',
    //         controller: 'appsCtrl'
    //     })
    //     .when('/apps/:appId', {
    //         templateUrl: 'views/appDetail.html',
    //         controller: 'appDetailCtrl'
    //     })
    //     .when('/build:buildId', {
    //         templateUrl: 'views/build.html',
    //         controller: 'buildCtrl'
    //     })
    //     .otherwise({
    //         redirectTo: '/apps'
    //     });

    $stateProvider
        .state('apps', {
            url: '/apps',
            views: {
                'mainView': {
                    templateUrl: 'views/apps.html',
                    controller: 'appsCtrl'
                }
            }
        })
        .state('app', {
            url: '/apps/:appId',
            views: {
                'mainView': {
                    templateUrl: 'views/appDetail.html',
                    controller: 'appDetailCtrl'
                }
            }
        })
        .state('app.general', {
            url: '/general',
            views: {
                'mainView': {
                    templateUrl: 'views/appDetail.html',
                    controller: 'appDetailCtrl'
                },
                'detailView': {
                    template: 'GENERAL'
                }
            }
        })
        .state('app.lanes', {
            url: '/lanes',
            views: {
                'mainView': {
                    templateUrl: 'views/appDetail.html',
                    controller: 'appDetailCtrl'
                },
                'detailView': {
                    template: 'LANES'
                }
            }
        })
        .state('app.builds', {
            url: '/builds',
            views: {
                'mainView': {
                    templateUrl: 'views/appDetail.html',
                    controller: 'appDetailCtrl'
                },
                'detailView': {
                    template: 'BUILDS'
                }
            }
        })
        .state('app.logs', {
            url: '/logs',
            views: {
                'mainView': {
                    templateUrl: 'views/appDetail.html',
                    controller: 'appDetailCtrl'
                },
                'detailView': {
                    template: 'LOGS'
                }
            }
        });
});
