var ship = angular.module('ship', ['ngRoute']);

ship.config(function ($routeProvider) {
   /*$routeProvider.when('/books/:isbn', {
       templateUrl: 'templates/book_details.html',
       controller: 'BookDetailsCtrl'
   })*/
   $routeProvider.when('/jobs', {
       templateUrl: 'views/jobs.html',
       controller: 'jobsCtrl'
    })
   .otherwise( {
       redirectTo: '/jobs'
   });
});
