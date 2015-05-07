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
      $templateCache.put('app/assets/javascripts/home/_home.html', '');
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
});