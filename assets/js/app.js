window.app = angular.module('LemanIpsum', []);

app.controller('Generator', function($scope, $http) {
  $scope.outputSize = 3;
  $scope.outputFormat = 'text';

  $scope.updateSelection = function() {
    var selection = $scope.paragraphs.slice(0, $scope.outputSize);

    if($scope.outputFormat === 'html')
      selection = selection.map(function(p) { return '<p>'+p+'</p>'; });

    $scope.selection = selection.join('\n\n');
  };

  $http.get('/proverbs').success(function(response) {
    $scope.paragraphs = response;
    $scope.updateSelection();
  });
});
