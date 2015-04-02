var app = angular.module('myApp', []);
//An app has a 'controller' 
app.controller('orderItemsCtrl', function($scope, $http) {
	$scope.buyMeSwitch = true;   	//disabled
	$scope.quantity = 0;  			//from quantity input field
	$scope.totalPrice = 0;  		//total price
	$scope.totalQuantity = 0;  		//total quantity
	$scope.cart = {items:[]};       //empty cart
	$scope.addToCart = function(elem) {
		var quantity = (1 * elem.quantity);
		if(quantity > 0) {
			$scope.buyMeSwitch = false;   //enable buy button
			var id = elem.x.id;
			var price = (1 * elem.x.price);
			//alert("Adding elem.x.id="+id+" elem.x.price="+price+" quantity="+quantity);
			var item = {"id":id, "quantity":quantity, "price":price};
			//push(elem1,elem2..) appends element/s onto the end of the Array and returns its new length (see also unshift())
			//Note: if you want to append the elements in one array onto another array - see the concat() method
			//pop() removes the last element and returns it (see also shift()) 
			$scope.cart.items.push(item); 
			$scope.totalPrice += (price * quantity);
			$scope.totalQuantity += quantity; 
		}
	};
	$scope.buy = function() {
		//Buy Me clicked!
		alert("Spend $"+$scope.totalPrice+" for "+$scope.totalQuantity+" items?");  
	};
    $http.get("http://localhost:8080/rest/webapi/orderitems")
    .success(function(response) {$scope.orderItems = response.orderItems;});
});