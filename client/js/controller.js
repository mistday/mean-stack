App.controller('MainCtrl', ['$scope', '$http', '$resource', 
  function($scope, $http, $resource){

  var Demo = $resource('/api/demo');


  Demo.query(function(results) {
    $scope.somes = results
  });


  $scope.addSome = function() {
    var demo = new Demo();
    demo.name = $scope.one;
    demo.$save(function(result) {
      $scope.somes.push(result);
    });
  }
}]);