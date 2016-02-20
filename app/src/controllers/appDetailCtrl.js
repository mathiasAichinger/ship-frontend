ship.controller('appDetailCtrl', appDetailCtrl);

function appDetailCtrl ($scope, $location, $stateParams, $state, shipApiUiWrapper) {
    shipApiUiWrapper.getApp($stateParams.appId, function (app) {
        if (app) {
            $scope.app = app;
        } else {
            $scope.app = {};
        }
    });
}
