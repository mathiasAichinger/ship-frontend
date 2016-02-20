ship.controller('buildsCtrl', buildsCtrl);

function buildsCtrl ($scope, $stateParams, $state, shipApi) {

    // setInterval(function () {
    //     $scope.builds[0].progress++;
    //     $scope.$apply();
    // }, 600);

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
