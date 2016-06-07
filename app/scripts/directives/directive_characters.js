marvelApp.directive('characters', function() {
   return {
       restrict: 'AE',
       replace: 'false',
       scope: {
           detailedList: '='
       },
       templateUrl: 'templates/characters.html'
   };
});