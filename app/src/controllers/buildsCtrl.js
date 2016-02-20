ship.controller('buildsCtrl', buildsCtrl);

function buildsCtrl ($scope, $stateParams, $state, shipApi) {
    shipApi.getApp($stateParams.appId, function (app) {
        if (app) {
            $scope.app = app;
        }
    });

    setInterval(function () {
        $scope.builds[0].progress++;
        $scope.$apply();
    }, 600);

    $scope.builds = [
        { id: 0, name: 'Production', status: 'in_progress', progress: 57.9, startDate: new Date(), endDate: new Date()  },
        { id: 1, name: 'Test', status: 'successful', progress: 100, startDate: new Date(), endDate: new Date()  },
        { id: 2, name: 'Release', status: 'unsuccessful', progress: 100, startDate: new Date(), endDate: new Date()  }
    ];

    $scope.getStatusDisplayText = function (status) {
        switch (status) {
            case "in_progress": {
                return "In Progress";
            }
            case "successful": {
                return "Successful";
            }
            case "unsuccessful": {
                return "Unsuccessful";
            }
            default: {
                return "Unknown";
            }
        }
    }
}
