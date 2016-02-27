angular.module('ship').controller('appDetailCtrl', ['$scope', '$location', '$stateParams', '$state', 'shipApiUiWrapper', 'pathParser',
function ($scope, $location, $stateParams, $state, shipApiUiWrapper, pathParser) {
    $scope.appId = $stateParams.appId;
    $scope.appLoaded = false;
    $scope.isRemoving = false;

    if ($scope.appId) {
    shipApiUiWrapper.getApp($scope.appId, function (app) {
        if (app) {
            $scope.app = app;
            $scope.appLoaded = true;
        } else {
            $scope.app = {};
        }
    });
  }

    $scope.saveApp = function () {
        shipApiUiWrapper.updateApp($scope.app, function (success) {

        });
    };

    $scope.removeApp = function () {
        $scope.isRemoving = true;
        shipApiUiWrapper.removeApp($scope.app, function (success) {
            $scope.isRemoving = false;
            if (success) {
                $('#removeAppModal').modal('hide');
                $state.go('apps.show');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            }
        });
    }
}
]);
