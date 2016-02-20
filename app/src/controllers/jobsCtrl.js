ship.controller('jobsCtrl', jobsCtrl);

function jobsCtrl ($scope, $location, $routeParams, shipApi) {
    $scope.jobs = shipApi.getJobs();
}
