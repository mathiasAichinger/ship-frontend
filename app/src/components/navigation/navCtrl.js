angular.module('ship').controller('navCtrl', ['$scope', '$state', 'pathParser', function ($scope, $state, pathParser) {
    $state.go('apps.show');

    $scope.contains = function (link) {
        return pathParser.contains(link);
    };

    $scope.endsWith = function (link) {
        return pathParser.endsWith(link);
    };
}]);
