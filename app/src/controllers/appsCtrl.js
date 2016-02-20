ship.controller('appsCtrl', appsCtrl);

function appsCtrl ($scope, $location, $state, shipApiUiWrapper) {

    shipApiUiWrapper.getApps(function (apps) {
        $scope.apps = apps;
    });
}
