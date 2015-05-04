/* global angular */
angular.module('waletzkoPortfolio', [
  'ui.router', 
  'templates',
  'waletzkoPortfolio.home'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          abstract: true
      });
    
    $urlRouterProvider.otherwise('/home');
  });