ship.controller('buildCtrl', buildCtrl);

function buildCtrl ($scope, $location, $routeParams) {

    /*------------------------------------------------------------------------------------------------------------------
     Variables
    ------------------------------------------------------------------------------------------------------------------*/

    /*------------------------------------------------------------------------------------------------------------------
     Initialization
    ------------------------------------------------------------------------------------------------------------------*/
    init();
    function init() {
        console.log("buildCtrl init id: ", $routeParams.buildId);
    }



    /*------------------------------------------------------------------------------------------------------------------
     Scope Methods
    ------------------------------------------------------------------------------------------------------------------*/

    /*------------------------------------------------------------------------------------------------------------------
     Private Methods
    ------------------------------------------------------------------------------------------------------------------*/

}
