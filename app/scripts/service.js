marvelApp.service('CharacterService', function($http) {
   this.fetchCharacters = function() {
     return $http.get('http://gateway.marvel.com:80/v1/public/characters?apikey=01f17a8c218b6ddb271b3457769cb674&ts=00&hash=579ee81a9d0c7ce3e3fc5ec42dfec338');
   };
});