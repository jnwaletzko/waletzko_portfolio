angular.module('waletzkoPortfolio.education', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('education', {
        url: '/education',
        templateUrl: 'education/_education.html',
        controller: 'EducationCtrl as education'
      })
    ;
  })
  .controller('EducationCtrl', function () {
    var education = this;
    education.title = 'My Education';
    education.body = 'This is what I\'ve learned';   
  })
;