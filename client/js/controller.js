App.controller('MainCtrl', ['$scope', function($scope){
  $scope.name = 'MEAN';

  $scope.somes = [
    {name: 'some One'},
    {name: 'some Two'},
  ];

  $scope.addSome = function() {
    $scope.somes.push({name: $scope.one});
  }
}]);