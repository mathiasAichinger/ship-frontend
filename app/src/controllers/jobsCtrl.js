ship.controller('jobsCtrl', jobsCtrl);

function jobsCtrl ($scope, $location, $routeParams, shipApi) {
    $scope.foo = function () {
        console.log(shipApi.getJobs());
    };
}
