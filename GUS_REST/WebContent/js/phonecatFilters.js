/**
 * create a phonecatFilters module - and register our custom filter() 
 * The name of our filter is "checkmark" and is used by the phoneDetail html template
 * The input evaluates to either true or false, and we return one of the two unicode characters 
 * we have chosen to represent true (\u2713 -> ✓) or false (\u2718 -> ✘)
 */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
