angular.module('waletzkoPortfolio.experience', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('experience', {
        url: '/experience',
        templateUrl: 'experience/_experience.html',
        controller: 'ExperienceCtrl as experience'
      })
    ;
  })
  .controller('ExperienceCtrl', function () {
    var experience = this;
    experience.title = 'My Experience';
    experience.body = 'This is what I\'ve done';   
  })
;