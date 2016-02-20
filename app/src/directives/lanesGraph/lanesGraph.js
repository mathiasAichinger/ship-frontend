angular.module('directives.lanesGraph', ['d3'])
    .directive('lanesGraph', [function () {
        return {
            restrict: 'E',
            templateUrl: 'src/directives/lanesGraph/views/lanesGraphView.html',
            controller: 'lanesGraphCtrl',
            scope: {
                appId: '=',
                viewMode: '=',
                mode: '=',
                width: '=',
                height: '=',
                control: '&'
            }
        };
    }]);
