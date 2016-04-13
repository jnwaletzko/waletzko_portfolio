/* global angular */
angular.module('waletzkoPortfolio', [
  'ui.router',
  'waletzkoPortfolio.home',
  'waletzkoPortfolio.experiences',
  'waletzkoPortfolio.skills',
  'waletzkoPortfolio.education'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          abstract: true
      });

    $urlRouterProvider.otherwise('/home');
  });
