ship.controller('appGeneralCtrl', appGeneralCtrl);

function appGeneralCtrl ($scope, $stateParams, notify, shipApiUiWrapper) {
    $scope.saveApp = function () {
        shipApiUiWrapper.updateApp($scope.app, function (success) {
            
        });
    };
}
