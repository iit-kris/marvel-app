marvelApp.directive('stories', function() {
   return {
       restrict: 'AE',
       replace: 'false',
       scope: {
           detailedList: '='
       },
       templateUrl: 'templates/stories.html'
   };
});