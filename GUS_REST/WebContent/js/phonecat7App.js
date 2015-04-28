"use strict"; 
/**
 * To improve the organization of the app, we are making use of Angular's ngRoute module 
 * and we've moved the controllers into their own module phonecatControllers. 
 * By listing these two modules as dependencies of phonecatApp, we can use the directives and services they provide.
 */
var phonecatApp = angular.module('phonecatApp', [
     'ngRoute',
     'phonecatControllers'
]);
/**
 * 'Providers' can only be injected into config functions!
 * Using the phonecatApp.config() method, we request the $routeProvider to be injected into our config function 
 * and then we use the $routeProvider.when() method to define our routes.
 * All variables defined with the : notation are extracted into the $routeParams object.
 */
phonecatApp.config(['$routeProvider',
        function($routeProvider) {
          $routeProvider.
            when('/phones', {
              templateUrl: 'partials/phoneList7.html',
              controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
              templateUrl: 'partials/phoneDetail7.html',
              controller: 'PhoneDetailCtrl'
            }).
            otherwise({
              redirectTo: '/phones'
            });
        }]);