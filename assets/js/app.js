angular.module('app', []);

angular.module('app')
  .controller('GeneratorCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.outputSize = 3;
    $scope.outputFormat = 'text';
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

$('.skinned-select select').on('change', function() {
  var text = $(this).find('option:selected').text();
  $(this).siblings('.skinned-select-value').text(text);
});

