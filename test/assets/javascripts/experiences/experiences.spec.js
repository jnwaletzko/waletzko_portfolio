describe('Unit: Experiences', function() {
  var ctrl, experiences;

  beforeEach(module('templates'));
  beforeEach(module('waletzkoPortfolio.experiences'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller, _Experiences_, $q) {
    experiences = _Experiences_;

    spyOn(experiences, 'getExperiences').and.callFake(
      function () {
        var deferred = $q.defer();
        deferred.resolve({data: []});
        return deferred.promise;
      }
    );

    ctrl = $controller('ExperiencesCtrl', {Experiences: experiences});
  }));

  describe('Experience Route', function() {
    var $state,
        $rootScope,
        state = 'experiences';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('experiences/_experiences.html', '');
    }));

    it('should respond to URL', function () {
      expect($state.href(state)).toEqual('#/experiences');
    });

    it('should activate the state', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('ExperiencesCtrl', function () {
    it('should have title defined', function () {
        expect(ctrl.title).toBeDefined();
    });

    it('should have body defined', function () {
        expect(ctrl.body).toBeDefined();
    });
  });
});
