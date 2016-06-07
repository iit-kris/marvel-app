marvelApp.directive('series', function() {
   return {
       restrict: 'AE',
       replace: 'false',
       scope: {
           detailedList: '='
       },
       templateUrl: 'templates/series.html'
   };
});