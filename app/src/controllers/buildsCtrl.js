ship.controller('buildsCtrl', buildsCtrl);

function buildsCtrl ($scope, $stateParams, $state, shipApi) {

    setInterval(function () {
        $scope.builds[0].progress++;
        $scope.$apply();
    }, 600);

    $scope.builds = [
        { id: 0, name: 'Production', status: 'in_progress', progress: 57.9, startDate: new Date(), endDate: new Date()  },
        { id: 1, name: 'Test', status: 'successful', progress: 100, startDate: new Date(), endDate: new Date()  },
        { id: 2, name: 'Release', status: 'unsuccessful', progress: 100, startDate: new Date(), endDate: new Date()  }
    ];

    $scope.isSelected = function (build) {
        return $scope.selectedBuild == build;
    };

    $scope.select = function (build) {
        if ($scope.selectedBuild && $scope.selectedBuild == build) {
            $scope.selectedBuild = null;
        } else {
            $scope.selectedBuild = build;
        }
    };

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
