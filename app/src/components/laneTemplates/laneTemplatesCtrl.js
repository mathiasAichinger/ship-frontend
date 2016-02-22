angular.module('ship').controller('laneTemplatesCtrl', laneTemplatesCtrl);

function laneTemplatesCtrl ($scope, $location, $stateParams, $state) {
    'use strict';

    /*------------------------------------------------------------------------------------------------------------------
     Variables
    ------------------------------------------------------------------------------------------------------------------*/
    $scope.graphConfig = {
        'appId': $stateParams.appId,
        'viewMode': 'config',
        'width': 1000,
        'height': 1000
    };
    
}
