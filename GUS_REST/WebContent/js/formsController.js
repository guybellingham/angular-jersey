 var app = angular.module('formsExample', []);
 
 app.controller('formsCtrl', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function(exampleForm) {
    	  if (exampleForm) {
    		  exampleForm.$setPristine();
    		  exampleForm.$setUntouched();
    	  }
    	  $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
}]);