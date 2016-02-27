angular.module('ship').controller('appListCtrl', ['$scope', '$location', '$state', 'shipApiUiWrapper', function ($scope, $location, $state, shipApiUiWrapper) {
  $scope.appsLoading = true;

  shipApiUiWrapper.getApps(function (apps) {
      $scope.apps = apps;
      $scope.appsLoading = false;
  });
}]);
