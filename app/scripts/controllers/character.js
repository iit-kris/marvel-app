marvelApp.controller('CharacterController', function($scope, CharacterService) {
    $scope.characters = [];
    $scope.initCharacters = function() {
        CharacterService.fetchCharacters().then(function(data) {
            console.log(data.status);
            if(data.status === 200) {
                console.log(data.data);
                $scope.characters = data.data.data.results;
            }
        }, function(error) {
            console.log(error);
        });
    };

    $scope.initCharacters();
});