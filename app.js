var app = angular.module('mainApp', []);

app.directive('optIn', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'login.html',
    replace: true
  };
});
