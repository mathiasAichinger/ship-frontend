var ship = angular.module('ship', [
    'ngRoute',
     'd3',
     'directives'
 ]);

ship.config(function ($routeProvider) {
   /*$routeProvider.when('/books/:isbn', {
       templateUrl: 'templates/book_details.html',
       controller: 'BookDetailsCtrl'
   })*/
   $routeProvider
       .when('/jobs', {
           templateUrl: 'views/jobs.html',
           controller: 'jobsCtrl'
        })
        .when('/build:buildId', {
            templateUrl: 'views/build.html',
            controller: 'buildCtrl'
        })
        .otherwise( {
           redirectTo: '/jobs'
       });
});
