describe('Unit: Home', function() {
  var ctrl;
  
  beforeEach(module('templates'));
  beforeEach(module('waletzkoPortfolio.home'));
  beforeEach(module('ui.router'));  
  
  beforeEach(inject(function ($controller) {
    ctrl = $controller('HomeCtrl', {});
  }));
  
  describe('Home Route', function() {
    var $state,
        $rootScope,
        state = 'home';
        
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('home/_home.html', '');
    }));
    
    it('should respond to URL', function () {
      expect($state.href(state)).toEqual('#/home');
    });
    
    it('should activate the state', function () {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });
  
  describe('HomeCtrl', function () {
    it('should have title defined', function () {
        expect(ctrl.title).toBeDefined();
    });

    it('should have body defined', function () {
        expect(ctrl.body).toBeDefined();
    });
  });
});