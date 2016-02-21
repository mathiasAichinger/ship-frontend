angular.module('ship').controller('appsCtrl', appsCtrl);

function appsCtrl ($scope, $location, $state, shipApiUiWrapper) {
    $scope.appsLoading = true;

    shipApiUiWrapper.getApps(function (apps) {
        $scope.apps = apps;
        $scope.appsLoading = false;
    });

    $scope.addApp = function () {
        shipApiUiWrapper.addApp({ key: 'my_new_app', name: 'Cool App', description: 'Super Description', iconUrl: null });
    }
}
