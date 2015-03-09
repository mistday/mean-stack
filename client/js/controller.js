App.controller('MainCtrl', ['$scope', '$http', '$resource', 
  function($scope, $http, $resource){

  $scope.name = 'MEAN';

  $scope.somes = [
    {name: 'some One'},
    {name: 'some Two'},
  ];

  $scope.addSome = function() {

    $http.post('/api', {'name': $scope.one})
      .success(function(data, status) {
        $scope.somes.push(data);
      })
      .error(function(data, status) {
        console.log('Error!', data, status);
      });
  }
}]);