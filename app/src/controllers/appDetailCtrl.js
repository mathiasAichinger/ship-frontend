ship.controller('appDetailCtrl', appDetailCtrl);

function appDetailCtrl ($scope, $location, $stateParams, $state, shipApi) {

    shipApi.getApp($stateParams.appId, function (app) {
        if (app) {
            $scope.app = app;
            console.log($location.path());
            // $state.go('general', {appId: app.id});
        }
    });

    $scope.isTabActive = function (tab) {
        if (tab) {
            return $location.path().endsWith(tab);
        }
    }
}
