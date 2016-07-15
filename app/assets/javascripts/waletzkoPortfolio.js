/* global angular */
angular.module('waletzkoPortfolio', [
  'ui.router',
  'waletzkoPortfolio.home',
  'waletzkoPortfolio.experiences',
  'waletzkoPortfolio.skills',
  'waletzkoPortfolio.educations'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          abstract: true
      });

    $urlRouterProvider.otherwise('/home');
  });
