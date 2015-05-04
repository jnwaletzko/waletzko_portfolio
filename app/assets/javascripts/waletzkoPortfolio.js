/* global angular */
angular.module('waletzkoPortfolio', [])
.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello world!';
  }
]);