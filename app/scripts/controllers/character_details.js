marvelApp.controller('CharacterDetailsController', function($scope, $routeParams, CharacterService) {
    $scope.character = {};
    characterId = $routeParams.characterId;

    $scope.loadCharacterDetails = function() {

        CharacterService.fetchCharacterDetails(characterId).then(function(data) {
            console.log(data.status);
            if(data.status === 200) {
                console.log(data.data);
                angular.extend($scope.character, data.data.data.results[0]);
            }
        }, function(error) {
            console.log(error);
        });

        CharacterService.fetchCharacterComics(characterId).then(function(data) {
            if(data.status === 200) {
                $scope.character.comicsDetailed = data.data.data.results;
            }
        });

        CharacterService.fetchCharacterStories(characterId).then(function(data) {
            if(data.status === 200) {
                $scope.character.storiesDetailed = data.data.data.results;
            }
        });

        CharacterService.fetchCharacterEvents(characterId).then(function(data) {
            if(data.status === 200) {
                $scope.character.eventsDetailed = data.data.data.results;
            }
        });

        CharacterService.fetchCharacterSeries(characterId).then(function(data) {
            if(data.status === 200) {
                console.log(data.data.data.results);
                $scope.character.seriesDetailed = data.data.data.results;
            }
        });

    };


    $scope.loadCharacterDetails();
});