/**
 * Jasmine unit tests for Phone*Ctrl controllers!
 * Angular provides a service, $controller, which will retrieve your controller by name 
 * since it is not usually available in the global (window) scope.  
 */
describe('PhoneListCtrl', function(){
	/**
	 * Before each test we tell Angular to load the phonecatApp module
	 */
	beforeEach(module('phonecatApp'));

	/**
	 * We ask Angular to inject the $controller service into our test function.
	 * We use $controller to create an instance of the PhoneListCtrl controller.
	 */
	it('should create "phones" model with 3 phones', inject(function($controller) {
		var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

		expect(scope.phones.length).toBe(3);
	}));

});