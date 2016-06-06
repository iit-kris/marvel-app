marvelApp.controller('SeriesController', function($scope, SeriesService) {
    $scope.series = [];
    $scope.seriesParams = { offset: 0, limit: 50};
    $scope.hasMore = true;
    $scope.loadSeries = function() {
        SeriesService.fetchSeries($scope.seriesParams).then(function(data) {
            if(data.status === 200) {
                $scope.series = $scope.series.concat(data.data.data.results);
                $scope.hasMore = $scope.seriesParams.offset + $scope.seriesParams.limit < data.data.data.total;
            }
        }, function(error) {
           console.log(error);
        });
    };

    $scope.loadMore = function() {
        $scope.seriesParams.offset += $scope.seriesParams.limit;
        $scope.loadSeries();
    };

    $scope.loadSeries();
});