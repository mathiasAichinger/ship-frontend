angular.module('ship', [
    'ngRoute',
    'd3',
    'ui.router',
	'directives'
]).config(function ($stateProvider) {
    $stateProvider
        .state('apps', {
            url: '/apps',
            views: {
                'mainView': {
                    templateUrl: '../src/components/app/appsView.html'
                }
            }
        })
        .state('apps.show', {
            url: '/show',
            views: {
                'detailView': {
                    templateUrl: '../src/components/app/list/appListView.html',
                    controller: 'appsCtrl'
                }
            }
        })
        .state('apps.add', {
            url: '/add',
            views: {
                'detailView': {
                    templateUrl: '../src/components/app/add/appAddView.html',
                    controller: 'appAddCtrl'
                }
            }
        })
        .state('app', {
            url: '/apps/:appId',
            views: {
                'mainView': {
                    templateUrl: '../src/components/app/detail/appDetailView.html',
                    controller: 'appDetailCtrl'
                }
            }
        })
        .state('app.general', {
            url: '/general',
            views: {
                'detailView': {
                    templateUrl: '../src/components/app/general/appGeneralView.html',
                    controller: 'appGeneralCtrl'
                }
            }
        })
        .state('app.lanes', {
            url: '/lanes',
            views: {
                'detailView': {
                    templateUrl: '../src/components/laneTemplates/laneTemplatesView.html',
                    controller: 'laneTemplatesCtrl'
                }
            }
        })
        .state('app.builds', {
            url: '/builds',
            views: {
                'detailView': {
                    templateUrl: '../src/components/builds/buildsView.html',
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
