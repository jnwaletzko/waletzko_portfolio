describe('Unit: Educations', function() {
  var ctrl;

  beforeEach(module('templates'));
  beforeEach(module('waletzkoPortfolio.educations'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('EducationsCtrl', {});
  }));

  describe('Educations Route', function() {
    var $state,
        $rootScope,
        state = 'educations';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('educations/_educations.html', '');
    }));

    it('should respond to URL', function () {
      expect($state.href(state)).toEqual('#/educations');
    });

    it('should activate the state', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('EducationsCtrl', function () {
    it('should have title defined', function () {
        expect(ctrl.title).toBeDefined();
    });

    it('should have body defined', function () {
        expect(ctrl.body).toBeDefined();
    });
  });
});
