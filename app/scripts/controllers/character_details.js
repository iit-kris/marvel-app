marvelApp.controller('CharacterDetailsController', function($scope, $routeParams, CharacterService) {
    $scope.character = [];
    caracterId = $routeParams.characterId;

    $scope.initCharacter = function() {

        CharacterService.fetchCharacterDetails(caracterId).then(function(data) {
            console.log(data.status);
            if(data.status === 200) {
                console.log(data.data);
                $scope.characterDetails = data.data.data.results;
            }
        }, function(error) {
            console.log(error);
        });
    };

    $scope.initCharacter();
});