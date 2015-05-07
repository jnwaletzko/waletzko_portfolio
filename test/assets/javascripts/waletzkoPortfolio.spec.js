describe('Unit: App', function () {
    beforeEach(module('waletzkoPortfolio'));
    beforeEach(module('waletzkoPortfolio.home'));
    beforeEach(module('ui.router'));
    beforeEach(module('templates'));

    describe('App Abstract Route', function () {
        var $state,
            $rootScope,
            state = 'app';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('app/assets/javascripts/home/_home.html', '');
        }));

        it('verifies state configuration', function () {
            var config = $state.get(state);
            expect(config.abstract).toBeTruthy();
            expect(config.url).toBeUndefined();
        });
    });
});
