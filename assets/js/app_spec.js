describe('app', function() {
  beforeEach(module('app'));

  describe('GeneratorCtrl', function() {
    var injector, scope, $rootScope, $controller, $httpBackend;

    beforeEach(inject(function($injector) {
      injector     = $injector;
      scope        = injector.get('$rootScope');
      $controller  = injector.get('$controller');
      $httpBackend = injector.get('$httpBackend');

      $controller('GeneratorCtrl', { $scope : scope });
    }));

    it('can fetch and store proverbs', function() {
      $httpBackend.whenGET(/^\/proverbs*/).respond(['Mock proverb']);

      scope.loadProverbs();
      $httpBackend.flush();

      expect(scope.proverbs).toEqual(['Mock proverb']);
    });
  });
});
