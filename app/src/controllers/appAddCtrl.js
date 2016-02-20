ship.controller('appAddCtrl', appAddCtrl);

function appAddCtrl ($scope, $state, shipApiUiWrapper) {
    $scope.app = {};

    $scope.saveApp = function () {
        shipApiUiWrapper.addApp($scope.app, function (success) {
            if (success) {
                $state.go('apps.show');
            }
        });
    }
}
