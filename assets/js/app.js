angular.module('app', []);

angular.module('app')
  .controller('GeneratorCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.options = {
      outputSize:   3,
      outputFormat: 'text'
    };
    $scope.proverbs = [];

    $scope.randomizeSelection = function() {
      $scope.proverbs = _.shuffle($scope.proverbs);
    };

    $http.get('/proverbs').success(function(response) {
      $scope.proverbs = response;
    });
  }]);

angular.module('app')
  .filter('groupParagraphs', function() {
    return function(items) {
      var paragraphs = [];

      for(var i=0, l=items.length; i<l; i++) {
        if(i % 8 === 0) paragraphs.push(items.slice(i, i+7).join(' '));
      }

      return paragraphs;
    };
  })
  .filter('formatParagraphs', function() {
    return function(items, options) {
      var paragraphs = items;

      if(options.format === 'html')
        paragraphs = paragraphs.map(function(p) { return '<p>'+p+'</p>'; });

      return paragraphs.join('\n\n');
    }
  });

angular.module('app')
  .directive('skinnedSelect', function() {
    return {
      replace: true,
      transclude: true,
      template: '<span class="skinned-select" data-selection="{{selection}}" ng-transclude></span>',
      link: function(scope, element, attributes) {
        function getSelection() {
          return element.find('option:selected').text();
        }

        scope.selection = getSelection();

        element.find('select').on('change', function() {
          scope.selection = getSelection();
        });
      }
    };
  });
