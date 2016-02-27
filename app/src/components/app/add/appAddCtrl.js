angular.module('ship').controller('appAddCtrl', ['$scope', '$state', 'shipApiUiWrapper', function ($scope, $state, shipApiUiWrapper) {
    $scope.app = { iconUrl: 'http://eventifier-store.s3.amazonaws.com/7785-9Fth1t4i.jpeg' };

    $scope.saveApp = function () {
        shipApiUiWrapper.addApp($scope.app, function (success) {
            if (success) {
                $state.go('apps.show');
            }
        });
    }
}]);
