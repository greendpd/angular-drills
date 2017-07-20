angular.module("arrayApp").controller("arrayController", function($scope,aService){

  $scope.data=aService.getData();

})
