marvelApp.controller('SeriesDetailsController', function($scope, $routeParams, SeriesService) {
    $scope.series = $scope.series || {};
    $scope.seriesId = $routeParams.seriesId;
    $scope.loadSeriesDetails = function() {
        SeriesService.fetchSeriesDetails($scope.seriesId).then(function(data) {
            if(data.status === 200) {
                angular.extend($scope.series, data.data.data.results[0]);
            }
        }, function(error) {
           console.log(error);
        });

        SeriesService.fetchSeriesComics($scope.seriesId).then(function(data) {
            if(data.status === 200) {
                $scope.series.comicsDetailed = data.data.data.results;
            }
        });

        SeriesService.fetchSeriesStories($scope.seriesId).then(function(data) {
           if(data.status === 200) {
               $scope.series.storiesDetailed = data.data.data.results;
           }
        });

        SeriesService.fetchSeriesCharacters($scope.seriesId).then(function(data) {
           if(data.status === 200) {
               $scope.series.charactersDetailed = data.data.data.results;
           }
        });

        SeriesService.fetchSeriesEvents($scope.seriesId).then(function(data) {
            if(data.status === 200) {
                $scope.series.eventsDetailed = data.data.data.results;
            }
        });
    };

    $scope.loadSeriesDetails();
});