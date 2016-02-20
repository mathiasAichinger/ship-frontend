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

    function _getLaneTemplate(id, callback) {
        var cb = callback || angular.noop;

        shipApi.getLaneTemplate(id, function (response) {
            if (response && response.data && response.data.data) {

                var laneTemplates = [];

                var actionTemplates = [];
                response.data.included.forEach(function(a) {
                    actionTemplates.push(
                        new Action_Template(
                            a.id,
                            a.type,
                            a.attributes['name'],
                            a.attributes['description'],
                            a.attributes['icon_url'],
                            a.relationships.parent.data,
                            a.relationships.child.data
                        )
                    );
                });

                var laneTemplate = new Lane_Template(
                    response.data.data.id,
                    response.data.data.attributes['name'],
                    response.data.data.attributes['description'],
                    actionTemplates
                );

                cb(laneTemplate);
            } else {
                notify.warn('Lane template with ID ' + id + ' could not be found.');
                cb(null);
            }
        }, function (response) {
            notify.error('Could not get lane template with ID ' + id + '. Please try again later.');
            cb(null);
        });
    }


    return {
        addApp: _addApp,
        getApp: _getApp,
        getApps: _getApps,
        getLaneTemplate: _getLaneTemplate
    }
}
