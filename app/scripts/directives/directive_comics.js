marvelApp.directive('comics', function() {
   return {
       restrict: 'AE',
       replace: 'false',
       scope: {
           detailedList: '='
       },
       templateUrl: 'templates/comics.html'
   };
});