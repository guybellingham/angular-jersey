"use strict"; 
/**
 * To improve the organization of the app, we are making use of Angular's ngRoute module 
 * and we've moved the controllers into their own module called 'phonecatControllers'.
 * We've added a new dependency upon the phonecatFilters module - containing the 'checkmark' filter 
 * By listing these modules as dependencies of phonecatApp, we can use the directives and services they provide.
 */
var phonecatApp = angular.module('phonecatApp', [
     'ngRoute',
     'phonecatControllers',
     'phonecatFilters'
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
              templateUrl: 'partials/phoneList8.html',
              controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
              templateUrl: 'partials/phoneDetail9.html',
              controller: 'PhoneDetailCtrl'
            }).
            otherwise({
              redirectTo: '/phones'
            });
        }]);