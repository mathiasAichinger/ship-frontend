'use strict';

ship.factory('shipApi', shipApi);

function shipApi () {

    var _apps = [
        { id: 4711, name: 'Runtastic', image: 'http://upload.wikimedia.org/wikipedia/en/6/6b/Runtastic_Logo.png' },
        { id: 1, name: 'NETx Touch', image: 'http://lh4.ggpht.com/jFT8tFre_FEZPcgWZkkuSA6RW7Dva-BKMAaQMh_zIr8LQu2Dm9UcmLXP86Opv5FqFs-Q=w300-rw' }
    ];

    function _addApp (app) {
        if (app) {
            // add app
        }
    }

    function _removeApp (app) {
        if (app) {
            // remove app
        }
    }

    function _updateApp (app) {
        if (app) {
            // update app
        }
    }

    function _getApp (id, appCallback) {
        var callback = appCallback || angular.noop;

        _apps.forEach(function (app) {
            if (app.id == id) {
                callback(app);
            }
        });
    }

    function _getApps () {
        return _apps;
    }

    return {
        addApp: _addApp,
        removeApp: _removeApp,
        updateApp: _updateApp,
        getApp: _getApp,
        getApps: _getApps
    }
}
