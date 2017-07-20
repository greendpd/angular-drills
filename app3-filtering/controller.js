angular.module("theApp").controller("missionControl", function($scope,theService){
  $scope.toDisplay=theService.getData();


})
