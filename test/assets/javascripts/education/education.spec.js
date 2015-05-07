describe('Unit: Education', function() {
  var ctrl;
  
  beforeEach(module('templates'));
  beforeEach(module('waletzkoPortfolio.education'));
  beforeEach(module('ui.router'));  
  
  beforeEach(inject(function ($controller) {
    ctrl = $controller('EducationCtrl', {});
  }));
  
  describe('Education Route', function() {
    var $state,
        $rootScope,
        state = 'education';
        
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('education/_education.html', '');
    }));
    
    it('should respond to URL', function () {
      expect($state.href(state)).toEqual('#/education');
    });
    
    it('should activate the state', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });
  
  describe('EducationCtrl', function () {
    it('should have title defined', function () {
        expect(ctrl.title).toBeDefined();
    });

    it('should have body defined', function () {
        expect(ctrl.body).toBeDefined();
    });
  });
});