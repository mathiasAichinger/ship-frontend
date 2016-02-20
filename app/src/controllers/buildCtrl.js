ship.controller('buildCtrl', buildCtrl);

function buildCtrl ($scope, $location, $routeParams, d3) {

    'use strict';

    /*------------------------------------------------------------------------------------------------------------------
     Variables
    ------------------------------------------------------------------------------------------------------------------*/
    $scope.graphConfig = {
        'appId': 200,
        'viewMode': 'config',
        'width': 1300,
        'height': 1000
    };

    /*------------------------------------------------------------------------------------------------------------------
     Initialization
    ------------------------------------------------------------------------------------------------------------------*/
    init();
    function init() {
        console.log("buildCtrl init id: ", $routeParams.buildId);
        console.log(d3);
    }

    

    /*------------------------------------------------------------------------------------------------------------------
     Scope Methods
    ------------------------------------------------------------------------------------------------------------------*/

    /*------------------------------------------------------------------------------------------------------------------
     Private Methods
    ------------------------------------------------------------------------------------------------------------------*/

}
