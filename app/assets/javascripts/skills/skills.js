angular.module('waletzkoPortfolio.skills', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('skills', {
        url: '/skills',
        templateUrl: 'skills/_skills.html',
        controller: 'SkillsCtrl as skills'
      })
    ;
  })
  .controller('SkillsCtrl', function () {
    var skills = this;
    skills.title = 'My Skills';
    skills.body = 'These are my skills.';   
  })
;