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
            { id: 0, name: 'Runtastic', image: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Runtastic_Logo.png' },
            { id: 1, name: 'NETx Touch', image: 'https://lh4.ggpht.com/jFT8tFre_FEZPcgWZkkuSA6RW7Dva-BKMAaQMh_zIr8LQu2Dm9UcmLXP86Opv5FqFs-Q=w300-rw' }
        ];
    }

    return {
        addJob: _addJob,
        removeJob: _removeJob,
        updateJob: _updateJob,
        getJobs: _getJobs
    }
}
