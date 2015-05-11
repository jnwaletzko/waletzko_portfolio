angular.module('waletzkoPortfolio.home', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeCtrl as homeCtrl'
      })
    ;
  })
  .controller('HomeCtrl', function () {
    var homeCtrl = this;
    homeCtrl.title = 'Jake Waletzko';
    homeCtrl.body = 'Hi my name is jake, I\'m a software engineer/web designer';   
  })
;