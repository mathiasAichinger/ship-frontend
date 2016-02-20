ship.controller('appsCtrl', appsCtrl);

function appsCtrl ($scope, $location, $routeParams, shipApi) {
    $scope.apps = shipApi.getApps();
}
