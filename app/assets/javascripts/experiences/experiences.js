angular.module('waletzkoPortfolio.experiences', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('experiences', {
        url: '/experiences',
        templateUrl: 'experiences/_experiences.html',
        controller: 'ExperiencesCtrl as experiencesCtrl'
      });
  })
  .controller('ExperiencesCtrl', function (Experiences) {
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
