angular.module('waletzkoPortfolio.educations', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('educations', {
        url: '/educations',
        templateUrl: 'educations/_educations.html',
        controller: 'EducationsCtrl as educationsCtrl'
      })
    ;
  })
  .controller('EducationsCtrl', function (Educations) {
    var educationsCtrl = this;
    educationsCtrl.title = 'My Education';
    educationsCtrl.body = 'This is what I\'ve learned';

    Educations.getEducations()
      .then(function(result){
        educationsCtrl.educations = result.data;
      });
  })
  .service('Educations', function($http) {
    var service = this;

    service.getEducations = function() {
      return $http.get('/educations.json');
    };
  });
