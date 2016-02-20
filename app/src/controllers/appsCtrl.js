ship.controller('appsCtrl', appsCtrl);

function appsCtrl ($scope, $location, $routeParams, $state, shipApi) {
    $scope.apps = shipApi.getApps();

    // $scope.openAppDetail = function (id) {
    //     $location.path('/apps/' + id + '/general');
    // }
}
