var app = angular.module('myApp', []);
//An app has a 'controller' 
app.controller('myCtrl', function($scope) {
    $scope.order= {id:10252, quantity:1, unitPrice:2, shippingPrice:5, internationalPrice:0};
	$scope.shipping= [{id:1, method:"Standard USPS", price:5},
					{id:2, method:"3 Day USPS", price:10},
					{id:3, method:"UPS", price:15},
					{id:4, method:"Next Day USPS", price:20},
					{id:5, method:"Next Day UPS", price:25}];		
	$scope.countries= [{id:"US", name:"USA", price:0},
					{id:"HI", name:"Hawaii", price:30},
					{id:"PR", name:"Puerto Rico", price:15}, 
					{id:"VI", name:"Virgin Islands", price:20},
					{id:"CA", name:"Canada", price:10},
					{id:"MX", name:"Mexico", price:5}];	
	$scope.shippingFilter="";
	$scope.countriesOrder="price"; 
	//Controllers can have methods which you can 'call' from the html template in an expression like this {{getOrderPrice()}}
	$scope.getOrderPrice = function() {
        return ($scope.order.quantity * $scope.order.unitPrice);
    };
	$scope.getShippingPrice = function() {
		//1 * forces shippingPrice to be an int! or use parseInt(), parseFloat()...
        return (1 * $scope.order.shippingPrice) + (1 * $scope.order.internationalPrice);
    };
	$scope.getTotalPrice = function() {
		var price = $scope.getOrderPrice();
		var shipping = $scope.getShippingPrice();
        return price + shipping;   
    };	
});