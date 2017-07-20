angular.module("apiApp").service("apiService",function($http){





  this.getPokemon=function(number){
    return $http({
      method: "GET",
      url: 'http://pokeapi.co/api/v2/pokemon/'+number
    })
  }

  this.getAllPokemon=function(){
    return $http({
      method: "GET",
      url: 'http://pokeapi.co/api/v2/pokemon/'
    })
  }





})
