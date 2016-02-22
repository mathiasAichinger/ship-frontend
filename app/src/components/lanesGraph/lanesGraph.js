angular.module('directives.lanesGraph', ['d3'])
    .directive('lanesGraph', [function () {
        return {
            restrict: 'E',
            templateUrl: '../src/components/lanesGraph/views/lanesGraphView.html',
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
