angular.module('waletzkoPortfolio.home', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/assets/javascripts/home/_home.html',
        controller: 'HomeCtrl as home'
      })
    ;
  })
  .controller('HomeCtrl', function () {
    var home = this;
    home.title = 'Home Page';
    home.body = 'This is the home body';   
  })
;