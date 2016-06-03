marvelApp.service('CharacterService', function($http) {
   this.basePath = 'http://gateway.marvel.com:80',
   this.standardParams = {
       apikey: '01f17a8c218b6ddb271b3457769cb674',
       ts: '00',
       hash: '579ee81a9d0c7ce3e3fc5ec42dfec338'
   },
   this.fetchCharacters = function() {
     return $http.get(this.basePath + '/v1/public/characters', {params: this.standardParams});
   };

    this.fetchCharacterDetails = function (caracterId) {
        return $http.get(this.basePath + '/v1/public/characters/'+caracterId, {params: this.standardParams});
    };
});