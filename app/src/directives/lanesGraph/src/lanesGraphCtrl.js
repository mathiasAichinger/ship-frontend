angular
    .module('directives.lanesGraph')
    .controller('lanesGraphCtrl', ['$scope', '$rootScope', '$element', 'd3', 'shipApiUiWrapper', lanesGraphCtrl]);

function lanesGraphCtrl($scope, $rootScope, $element ,d3Service, shipApiUiWrapper) {

    'use strict';

    /*------------------------------------------------------------------------------------------------------------------
     Constants
    ------------------------------------------------------------------------------------------------------------------*/
    var MODE_CONFIG = 'config';
    var MODE_RUN = 'run';

    /*------------------------------------------------------------------------------------------------------------------
     Variables
    ------------------------------------------------------------------------------------------------------------------*/
    var svg;
    var d3;

    /*------------------------------------------------------------------------------------------------------------------
     Initialization
    ------------------------------------------------------------------------------------------------------------------*/
    init();
    function init() {

        // set default values
        if ($scope.viewMode == null) { $scope.viewMode = MODE_CONFIG; }
        if ($scope.width == null) { $scope.with = 500; }
        if ($scope.height == null) { $scope.height = 500; }

        // init control
        $scope.internalControl = $scope.control() || {};

        d3Service.d3().then(function(d) {

            d3 = d;

            d3.selection.prototype.moveToFront = function() {
                return this.each(function(){
                    this.parentNode.appendChild(this);
                });
            };

            svg = d3.select($element[0]).append('svg')
                .attr('width', $scope.width + 'px')
                .attr('height', $scope.height + 'px');

            draw();
        });
    }



    /*------------------------------------------------------------------------------------------------------------------
     Control Methods
    ------------------------------------------------------------------------------------------------------------------*/

    $scope.internalControl.foo = function() {

    };


    /*------------------------------------------------------------------------------------------------------------------
     Scope Methods
    ------------------------------------------------------------------------------------------------------------------*/


    /*------------------------------------------------------------------------------------------------------------------
     Private Methods
    ------------------------------------------------------------------------------------------------------------------*/

    function draw() {

        var lanes = [
            {
                'id': 0,
                'name': 'lane1'
            },
            {
                'id': 1,
                'name': 'lane2'
            },
            {
                'id': 2,
                'name': 'lane3'
            }
        ];


        var actions = [
            {
                'id': 0,
                'name': 'scan'
            },
            {
                'id': 1,
                'name': 'pilot'
            },
            {
                'id': 2,
                'name': 'slack'
            }
        ];


        var actionPositions = [];



        // draw app
        var appCircle = svg.append('circle')
            .attr('class', 'lanes-graph-app')
            .attr("cx", function() {
                return (parseInt(svg.attr('width')) / 2);
            })
            .attr("cy", 55)
            .attr("r", 50)

        // append app logo
        shipApiUiWrapper.getApp($scope.appId, function (app) {

            if (app != null) {
                svg.append('image')
                    .attr('x', function() {
                        return (parseInt(svg.attr('width')) / 2) - 35;
                    })
                    .attr('y', 20)
                    .attr('width', 70)
                    .attr('height', 70)
                    .attr("xlink:href", app.iconUrl);
            }

            // bring all actions to front
            appCircle.moveToFront();

        });





        var xLaneOffset = 200;

        // draw lines
        lanes.forEach(function(l) {


            // draw actions for lane
            actionPositions = [];
            var yActionOffset = 250;
            var posFirstAction = null;
            var i = 0;

            actions.forEach(function(a) {

                svg.append('circle')
                    .attr('class', 'lanes-graph-action')
                    .attr("cx", function() {
                        return (parseInt(xLaneOffset));
                    })
                    .attr("cy", yActionOffset)
                    .attr("r", 30);

                if (i == 0) {
                    posFirstAction = [parseInt(xLaneOffset), yActionOffset];
                }

                actionPositions.push ([parseInt(xLaneOffset), yActionOffset]);

                yActionOffset += 150;
                i ++;
            });



            // draw lane
            var line = d3.svg.line();

            var totalLength = 300;

            var path = svg.append('path')
                .datum(actionPositions)
                .attr('d', line)
                .attr('class', 'lanes-graph-connection')
                .attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
                .transition()
                .duration(2000)
                .ease("linear")
                .attr("stroke-dashoffset", 0);

            // connect app circle with first action
            if (posFirstAction != null) {

                var sourceX = parseInt(appCircle.attr('cx'));
                var sourceY = parseInt(appCircle.attr('cy')) + parseInt(appCircle.attr('r'));

                var targetX = posFirstAction[0];
                var targetY = posFirstAction[1];

                var middleX = ((targetX  - sourceX) / 2) + sourceX;
                var middleY = ((targetY - sourceY) / 2) + sourceY;

                var leftCurveX = ((middleX - targetX) * 0.25) + targetX;
                var leftCurveY = middleY;

                var rightCurveX = ((sourceX - middleX) * 0.75) + middleX;
                var rightCurveY = middleY;


                var rightCurve = svg.append('path')
                    .attr('d', 'M' + sourceX + ',' + sourceY + ' Q' + rightCurveX + ',' + rightCurveY + ' '+ middleX + ',' + middleY )
                    .attr('class', 'lanes-graph-connection');


                var leftCurve = svg.append('path')
                    .attr('d', 'M' + targetX + ',' + targetY + ' Q' + leftCurveX + ',' + leftCurveY + ' '+ middleX + ',' + middleY )
                    .attr('class', 'lanes-graph-connection');


            }


            xLaneOffset += 300;

        });


        // bring all actions to front
        d3.selectAll('.lanes-graph-action').moveToFront();



    }


}
