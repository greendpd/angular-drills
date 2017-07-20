angular.module("apiApp").controller("apiController",function($scope, apiService){

  // var listAll={};

  // apiService.getAllPokemon().then(function(response){
  //   listAll=response.data;
  //   console.log(listAll);
  // })
  //

  $scope.getPokemon=function(number){
    apiService.getPokemon(number).then(function(response){
      console.log(response);
      $scope.pokemon=response.data;

    })
  }

  

})
