window.app = angular.module('LemanIpsum', []);

app.controller('Generator', function($scope) {
  $scope.paragraphs = ['whoooooaaaa', 'fefefe', 'wwwww', 'bbrrrr', 'fafafjiejfoifoer', 'efojeifer'];
  $scope.outputSize = 3;
  $scope.outputFormat = 'plain-text';

  $scope.updateSelection = function() {
    var selection = $scope.paragraphs.slice(0, $scope.outputSize);

    if($scope.outputFormat === 'html')
      selection = selection.map(function(p) { return '<p>'+p+'</p>'; });

    $scope.selection = selection.join('\n\n');
  };

  $scope.updateSelection();
});
