angular.module('waletzkoPortfolio.skills', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('skills', {
        url: '/skills',
        templateUrl: 'skills/_skills.html',
        controller: 'SkillsCtrl as skillsCtrl'
      })
    ;
  })
  .controller('SkillsCtrl', function () {
    var skillsCtrl = this;
    skillsCtrl.title = 'My Skills';
    skillsCtrl.body = 'These are my skills.';   
  })
;