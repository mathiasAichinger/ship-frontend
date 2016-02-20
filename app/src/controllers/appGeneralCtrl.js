ship.controller('appGeneralCtrl', appGeneralCtrl);

function appGeneralCtrl ($scope, $state, $stateParams, notify, shipApi) {
    shipApi.getApp($stateParams.appId, function (app) {
        if (app) {
            $scope.app = app;
        }
    });

    $scope.saveApp = function () {
        notify.notifySuccess('App has been saved.', 'Yay');
        notify.notifyWarn('App has been saved.', 'Yay');
        notify.notifyError('App has been saved.', 'Yay');
    };
}
