marvelApp.directive('events', function() {
   return {
       restrict: 'AE',
       replace: 'false',
       scope: {
           detailedList: '='
       },
       templateUrl: 'templates/events.html'
   };
});