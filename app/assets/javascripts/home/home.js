angular.module('waletzkoPortfolio.home', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeCtrl as home'
      })
    ;
  })
  .controller('HomeCtrl', function () {
    var home = this;
    home.title = 'Jake Waletzko';
    home.body = 'Hi my name is jake, I\'m a software engineer/web designer';   
  })
;