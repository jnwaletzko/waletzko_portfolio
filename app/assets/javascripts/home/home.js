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
    homeCtrl.body = 'Hi, my name is Jake. I\'m a software engineer. I enjoy working on the back-end service side of applications, but I work on some front-end work when I get the chance. ';
    homeCtrl.work = "I work for Sport Ngin.";
    homeCtrl.live = "Living in Minneapolis.";
    homeCtrl.school = "St. John's University Graduate";

  })
;
