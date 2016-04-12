angular.module('waletzkoPortfolio.experience', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('experience', {
        url: '/experience',
        templateUrl: 'experience/_experience.html',
        controller: 'ExperienceCtrl as experienceCtrl'
      });
  })
  .controller('ExperienceCtrl', function (Experiences) {
    var experiencesCtrl = this;
    experiencesCtrl.title = 'My Experience';
    experiencesCtrl.body = 'This is what I\'ve done';

    Experiences.getExperiences()
      .then(function(result){
        experiencesCtrl.experiences = result.data;
      });
  })
  .service('Experiences', function($http) {
    var service = this;

    service.getExperiences = function() {
        return $http.get('/experiences.json');
    };
  });
