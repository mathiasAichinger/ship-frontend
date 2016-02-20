'use strict';

ship.factory('shipApi', shipApi);

function shipApi ($http) {

    var _serverUrl = 'http://192.168.1.82:3001/api/';

    function _addApp (app, successCallback, errorCallback) {
        if (app) {
            var successCb = successCallback || angular.noop;
            var errorCb = errorCallback || angular.noop;

            $http.post(_serverUrl + 'apps', app).then(function success(response) {
                successCb(response);
            }, function error (response) {
                errorCb(response);
            });
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

    function _getApp (id, successCallback, errorCallback) {
        var successCb = successCallback || angular.noop;
        var errorCb = errorCallback || angular.noop;

        $http.get(_serverUrl + 'apps/' + id).then(function success(response) {
            successCb(response);
        }, function error (response) {
            errorCb(response);
        });
    }

    function _getApps (successCallback, errorCallback) {
        var successCb = successCallback || angular.noop;
        var errorCb = errorCallback || angular.noop;

        $http.get(_serverUrl + 'apps').then(function success(response) {
            successCb(response);
        }, function error (response) {
            errorCb(response);
        });
    }

    return {
        addApp: _addApp,
        removeApp: _removeApp,
        updateApp: _updateApp,
        getApp: _getApp,
        getApps: _getApps
    }
}
