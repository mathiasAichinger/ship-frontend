'use strict';

ship.factory('shipApi', shipApi);

function shipApi () {

    function _addJob () {
        
    }

    function _getJobs () {
        return [
            { id: 0, name: 'Runtastic' },
            { id: 1, name: 'NETx Touch' }
        ];
    }

    return {
        addJob: _addJob,
        getJobs: _getJobs,

    }
}
