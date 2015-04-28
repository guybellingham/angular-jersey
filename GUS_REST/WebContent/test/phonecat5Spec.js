/**
 * Jasmine unit tests for PhoneCat List and Detail controllers!
 * Angular provides a service, $controller, which will retrieve your controller by name 
 * since it is not usually available in the global (window) scope.  
 * Because we loaded Jasmine and angular-mocks.js in our test environment, 
 * we got two helper methods 'module' and 'inject' that we'll use to inject instances of $rootScope, $controller and $httpBackend services.
 */
describe('PhoneCat controllers', function() {
	
	describe('PhoneListCtrl', function(){
		/**
		 * Angular provides a mock $http service that we can use in unit tests called '$httpBackend'
		 */
		var scope, ctrl, $httpBackend;  
		/**
		 * Before each test we tell Angular to load the phonecatApp module
		 */
		beforeEach(module('phonecatApp'));
	
		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service in order to avoid a name conflict.
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
		    $httpBackend = _$httpBackend_;
		    //Use the $httpBackend.expectGET method to train the $httpBackend service to expect an incoming HTTP request and tell it what to respond with. Note that the responses are not returned until we call the $httpBackend.flush method
		    $httpBackend.expectGET('phones/phones.json').
		        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
		    //create a new scope for our controller by calling $rootScope.$new()
		    scope = $rootScope.$new();
		    //call the injected $controller function passing the name of the PhoneListCtrl controller and the created scope as parameters
		    ctrl = $controller('PhoneListCtrl', {$scope: scope});
		}));
	 
		it('should create "phones" model with 2 phones fetched from xhr', function() {
			  expect(scope.phones).toBeUndefined();
			  $httpBackend.flush();

			  expect(scope.phones).toEqual([{name: 'Nexus S'},
			                               {name: 'Motorola DROID'}]);
		});
		it('should set the default value of orderProp model', function() {
			  expect(scope.orderProp).toBe('age');
		});
	});
});