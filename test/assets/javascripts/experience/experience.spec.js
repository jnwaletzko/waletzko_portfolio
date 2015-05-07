describe('Unit: Experience', function() {
  var ctrl;
  
  beforeEach(module('templates'));
  beforeEach(module('waletzkoPortfolio.experience'));
  beforeEach(module('ui.router'));  
  
  beforeEach(inject(function ($controller) {
    ctrl = $controller('ExperienceCtrl', {});
  }));
  
  describe('Experience Route', function() {
    var $state,
        $rootScope,
        state = 'experience';
        
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('experience/_experience.html', '');
    }));
    
    it('should respond to URL', function () {
      expect($state.href(state)).toEqual('#/experience');
    });
    
    it('should activate the state', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });
  
  describe('ExperienceCtrl', function () {
    it('should have title defined', function () {
        expect(ctrl.title).toBeDefined();
    });

    it('should have body defined', function () {
        expect(ctrl.body).toBeDefined();
    });
  });
});