var app = angular.module('mainApp', []);

app.directive('optIn', function() {
  return {
    restrict: 'E',
    transculde: true,
    templateUrl: 'login.html',
    replace: true
  };
});
