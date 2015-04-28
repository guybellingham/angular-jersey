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

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
     function($scope, $routeParams) {
       $scope.phoneId = $routeParams.phoneId;
     }]);
