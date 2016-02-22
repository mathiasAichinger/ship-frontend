'use strict';

angular.module('ship').factory('shipApi', shipApi);

function shipApi ($http) {

    var _serverUrl = 'http://localhost:3000/api/';

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

    function _updateApp (app, successCallback, errorCallback) {
        if (app) {
            var successCb = successCallback || angular.noop;
            var errorCb = errorCallback || angular.noop;

            $http.patch(_serverUrl + 'apps/' + app.data.id, app).then(function success(response) {
                successCb(response);
            }, function error (response) {
                errorCb(response);
            });
        }
    }

    function _removeApp (id, successCallback, errorCallback) {
        var successCb = successCallback || angular.noop;
        var errorCb = errorCallback || angular.noop;

        $http.delete(_serverUrl + 'apps/' + id).then(function success(response) {
            successCb(response);
        }, function error (response) {
            errorCb(response);
        });
    }

    function _getApp (id, successCallback, errorCallback) {
        var successCb = successCallback || angular.noop;
        var errorCb = errorCallback || angular.noop;

        $http.get(_serverUrl + 'apps/' + id + '?include=builds').then(function success(response) {
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

    function _getLaneTemplate(id, successCallback, errorCallback) {
        var successCb = successCallback || angular.noop;
        var errorCb = errorCallback || angular.noop;

        $http.get(_serverUrl + 'lane_templates/' + id + '?include=action_templates').then(function success(response) {
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
        getApps: _getApps,
        getLaneTemplate: _getLaneTemplate
    }
}
