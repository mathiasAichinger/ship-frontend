'use strict';

ship.factory('shipApiUiWrapper', shipApiUiWrapper);

function shipApiUiWrapper (shipApi) {

    function _getApp(id, callback) {
        var cb = callback || angular.noop;

        shipApi.getApp(id, function (response) {
            if (response && response.data && response.data.data) {
                var app = response.data.data;
                cb(new App(app.id, app.attributes['key'], app.attributes['name'], app.attributes['description'], app.attributes['icon_url']));
            } else {
                notify.warn('App with ID ' + $stateParams.appId + ' could not be found.');
                cb(null);
            }
        }, function (response) {
            notify.error('Could not get app with ID ' + $stateParams.appId + '. Please try again later.');
            cb(null);
        });
    }

    function _getApps(callback) {
        var cb = callback || angular.noop;

        shipApi.getApps(function (response) {
            if (response && response.data && response.data.data) {
                var apps = [];
                // add apps
                response.data.data.forEach(function (app) {
                    apps.push(new App(app.id, app.attributes['key'], app.attributes['name'], app.attributes['description'], app.attributes['icon_url']));
                });

                cb(apps);
            } else {
                notify.warn('No apps available yet.');
                cb(null);
            }
        }, function (response) {
            notify.error('Could not get apps. Please try again later.');
            cb(null);
        });
    }

    return {
        getApp: _getApp,
        getApps: _getApps
    }
}
