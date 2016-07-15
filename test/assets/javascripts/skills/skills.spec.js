describe('Unit: Skills', function() {
  var ctrl, skills;

  beforeEach(module('templates'));
  beforeEach(module('waletzkoPortfolio.skills'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller, _Skills_, $q) {
    skills = _Skills_;

    spyOn(skills, 'getSkills').and.callFake(
      function () {
        var deferred = $q.defer();
        deferred.resolve({data: []});
        return deferred.promise;
      }
    );

    ctrl = $controller('SkillsCtrl', {Skills: skills});
  }));

  describe('Skills Route', function() {
    var $state,
        $rootScope,
        state = 'skills';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('skills/_skills.html', '');
    }));

    it('should respond to URL', function () {
      expect($state.href(state)).toEqual('#/skills');
    });

    it('should activate the state', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('SkillsCtrl', function () {
    it('should have title defined', function () {
        expect(ctrl.title).toBeDefined();
    });

    it('should have body defined', function () {
        expect(ctrl.body).toBeDefined();
    });
  });
});
