ship.controller('appDetailCtrl', appDetailCtrl);

function appDetailCtrl ($scope, $location, $stateParams, $state, shipApi) {

    shipApi.getApp($stateParams.appId, function (app) {
        if (app) {
            $scope.app = app;
        }
    });
}
