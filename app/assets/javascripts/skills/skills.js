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

    skillsCtrl.skills = [
      {"name":"C#","level":"7"},
      {"name":"VB.Net","level":"6"},
      {"name":"Ruby","level":"4"},
      {"name":"Rails","level":"4"},
      {"name":"SQL","level":"6"},
      {"name":"Javascript","level":"5"},
      {"name":"WPF","level":"4"},
      {"name":"Java","level":"3"}
    ];

    skillsCtrl.title = 'My Skills';
    skillsCtrl.body = 'These are my skills.';
  })
;
