marvelApp.controller('SeriesDetailsController', function($scope, $routeParams, SeriesService) {
    $scope.seriesDetails = $scope.seriesDetails || {};
    $scope.seriesId = $routeParams.seriesId;
    $scope.loadSeriesDetails = function() {
        SeriesService.fetchSeriesDetails($scope.seriesId).then(function(data) {
            if(data.status === 200) {
                console.log(data.data.data.results[0]);
                $scope.series = data.data.data.results[0];
            }
        }, function(error) {
           console.log(error);
        });
    };

    $scope.loadSeriesDetails();
});