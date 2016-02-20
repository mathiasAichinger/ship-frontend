ship.controller('appGeneralCtrl', appGeneralCtrl);

function appGeneralCtrl ($scope, $stateParams, notify, shipApiUiWrapper) {
    $scope.saveApp = function () {
        notify.success('App has been saved.', 'Yay');
    };
}
