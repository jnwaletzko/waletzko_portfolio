angular.module('waletzkoPortfolio.education', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('education', {
        url: '/education',
        templateUrl: 'education/_education.html',
        controller: 'EducationCtrl as educationCtrl'
      })
    ;
  })
  .controller('EducationCtrl', function () {
    var educationCtrl = this;
    educationCtrl.title = 'My Education';
    educationCtrl.body = 'This is what I\'ve learned';   
  })
;