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
                    templateUrl: 'views/apps.html'
                }
            }
        })
        .state('apps.show', {
            url: '/show',
            views: {
                'detailView': {
                    templateUrl: 'views/appList.html',
                    controller: 'appsCtrl'
                }
            }
        })
        .state('apps.add', {
            url: '/add',
            views: {
                'detailView': {
                    templateUrl: 'views/appAdd.html',
                    controller: 'appAddCtrl'
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
                'detailView': {
                    templateUrl: 'views/appGeneral.html',
                    controller: 'appGeneralCtrl'
                }
            }
        })
        .state('app.lanes', {
            url: '/lanes',
            views: {
                'detailView': {
                    templateUrl: 'views/laneTemplates.html',
                    controller: 'laneTemplatesCtrl'
                }
            }
        })
        .state('app.builds', {
            url: '/builds',
            views: {
                'detailView': {
                    templateUrl: 'views/builds.html',
                    controller: 'buildsCtrl'
                },
            }
        })
        .state('app.logs', {
            url: '/logs',
            views: {
                'detailView': {
                    template: 'LOGS'
                }
            }
        });
});
