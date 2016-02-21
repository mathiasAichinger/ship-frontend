'use strict';

angular.module('ship').factory('pathParser', pathParser);

function pathParser ($location) {

    function _endsWith (key) {
        if (key) {
            return $location.path().endsWith(key);
        } else {
            return false;
        }
    }

    function _contains (key) {
        if (key) {
            return $location.path().indexOf(key) > -1;
        } else {
            return false;
        }
    }

    return {
        contains: _contains,
        endsWith: _endsWith
    }
}
