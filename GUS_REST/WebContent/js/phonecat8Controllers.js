/**
 * We create a new module called phonecatControllers that contains 2 controllers 'PhoneListCtrl' and 'PhoneDetailCtrl'. 
 * For small AngularJS applications, it's common to create just one module for all of your controllers if there are just a few. 
 * As your application grows, it is quite common to refactor your code into additional modules.
 */
"use strict";  
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
     function ($scope, $http) {
       $http.get('phones/phones.json').success(function(data) {
         $scope.phones = data;
       });

       $scope.orderProp = 'age';
     }]);
/**
 * Use the $http service to get the phone details json using the phoneId: parameter extracted by the $route service.
 * Note: No need to parse the json data here, the Angular service does it for us.  
 */
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
     $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
       $scope.phone = data;
     });
   }]);