'use strict';

ship.factory('shipApi', shipApi);

function shipApi () {

    function _addJob (job) {
        if (job) {
            // add job
        }
    }

    function _removeJob (job) {
        if (job) {
            // remove job
        }
    }

    function _updateJob (job) {
        if (job) {
            // update job
        }
    }

    function _getJobs () {
        return [
            { id: 0, name: 'Runtastic' },
            { id: 1, name: 'NETx Touch' }
        ];
    }

    return {
        addJob: _addJob,
        removeJob: _removeJob,
        updateJob: _updateJob,
        getJobs: _getJobs
    }
}
