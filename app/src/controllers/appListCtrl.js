ship.controller('appsCtrl', appsCtrl);

function appsCtrl ($scope, $location, $state, shipApiUiWrapper) {

    shipApiUiWrapper.getApps(function (apps) {
        $scope.apps = apps;
    });

    $scope.addApp = function () {
        shipApiUiWrapper.addApp({ key: 'my_new_app', name: 'Cool App', description: 'Super Description', iconUrl: null });
    }
}
