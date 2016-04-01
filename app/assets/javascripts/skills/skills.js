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
      });
  })
  .controller('SkillsCtrl', function (Skills) {
    var skillsCtrl = this;
    skillsCtrl.title = 'My Skills';
    skillsCtrl.body = 'These are my skills.';

    Skills.getSkills()
      .then(function(result){
        skillsCtrl.skills = result.data;
      });
  })
  .service('Skills', function($http) {
    var service = this;

    service.getSkills = function() {
        return $http.get('/skills.json');
    };
  });
