App.controller('MainCtrl', ['$scope', '$http', '$resource', 
  function($scope, $http, $resource){

  var Demo = $resource('/api/demo');

  $scope.name = 'MEAN';

  $scope.somes = [
    {name: 'some One'},
    {name: 'some Two'},
  ];

  $scope.addSome = function() {

    var demo = new Demo();
    demo.name = $scope.one;
    demo.$save(function(result) {
      $scope.somes,push(result);
    });
  }
}]);