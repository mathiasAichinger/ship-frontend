var ship = angular.module('ship', [
    'ngRoute',
    'd3',
    'ui.router',
	'directives'
]);

ship.config(function ($stateProvider) {
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
                    templateUrl: 'views/appGeneral.html',
                    controller: 'appGeneralCtrl'
                },
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
                    templateUrl: 'views/builds.html',
                    controller: 'buildsCtrl'
                },
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
