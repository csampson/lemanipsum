window.app = angular.module('LemanIpsum', []);

app.controller('Generator', function($scope, $http) {
  $scope.paragraphs = [];
  $scope.outputSize = 3;
  $scope.outputFormat = 'text';

  function createParagraphs(proverbs) {
    var paragraphs = [];

    for(var i=0, l=proverbs.length; i<l; i++) {
      if(i % 8 === 0) paragraphs.push(proverbs.slice(i, i+7).join(' '));
    }

    return paragraphs;
  }

  $scope.getSelection = function() {
    var selection = $scope.paragraphs.slice(0, $scope.outputSize || 1);

    if($scope.outputFormat === 'html')
      selection = selection.map(function(p) { return '<p>'+p+'</p>'; });

    return selection.join('\n\n');
  };

  $scope.randomizeSelection = function() {
    var proverbs = _.shuffle($scope.proverbs);
    $scope.paragraphs = createParagraphs(proverbs);
  };

  $http.get('/proverbs').success(function(response) {
    $scope.proverbs = response;
    $scope.paragraphs = createParagraphs(response);
  });
});

$('.skinned-select select').on('change', function() {
  var text = $(this).find('option:selected').text();
  $(this).siblings('.skinned-select-value').text(text);
});

