"use strict"; 

var phonecatApp = angular.module('phonecatApp', []);

/**
 * $http is just one of several built-in Angular services that can be 'injected' into the controller's constructor function.
 * Angular infers the controller's dependencies from the special '$xxx' names of arguments to the controller's constructor function. 
 * If you were to minify the JavaScript code for PhoneListCtrl controller, all of its function arguments would be minified as well, 
 * and the dependency injector would not be able to identify services correctly.  
 * So to overcome this we also have to supply the '$names' (as strings) to the controller, in an array that contains 
 * a list of the service names, followed by the constructor function itself: 
 * 
 * $http makes an HTTP GET request to our web server, asking for phones/phones.json (the url is relative to our phonecat.html file).
 */
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
    //$scope.phones = data.splice(0,5);  //just the first 5
  });

  $scope.orderProp = 'age';
}]);