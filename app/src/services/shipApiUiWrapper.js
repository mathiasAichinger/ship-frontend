'use strict';

ship.factory('shipApiUiWrapper', shipApiUiWrapper);

function shipApiUiWrapper (shipApi, notify, restConverter) {

    function _addApp(app, callback) {
        var cb = callback || angular.noop;

        shipApi.addApp(restConverter.appToRest(app), function (response) {
            if (response && response.data && response.data.data) {
                notify.success('App "' + app.name + '" has been added.');
                cb(true);
            }
        }, function (response) {
            switch (response.status) {
                case 422: {
                    notify.error('App with key "' + app.key + '" already exists. Please choose another one.', response.status);
                    break;
                }
                default: {
                    notify.error('App "' + app.name + '" could not be added.', response.status);
                    break;
                }
            }
            cb(false);
        });
    }

    function _getApp(id, callback) {
        var cb = callback || angular.noop;

        shipApi.getApp(id, function (response) {
            if (response && response.data && response.data.data) {
                var app = response.data.data;
                cb(new App(app.id, app.attributes['key'], app.attributes['name'], app.attributes['description'], app.attributes['icon_url']));
            } else {
                notify.warn('App with ID ' + id + ' could not be found.');
                cb(null);
            }
        }, function (response) {
            notify.error('Could not get app with ID ' + id + '. Please try again later.', response.status);
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
            notify.error('Could not get apps. Please try again later.', response.status);
            cb(null);
        });
    }

    return {
        addApp: _addApp,
        getApp: _getApp,
        getApps: _getApps
    }
}
