marvelApp.controller('SeriesController', function($scope, SeriesService) {
    $scope.series = [];
    $scope.initSeries = function() {
        SeriesService.fetchSeries().then(function(data) {
            if(data.status === 200) {
                console.log(data.data.data.results);
                $scope.series = data.data.data.results;
            }
        }, function(error) {
           console.log(error);
        });
    };

    $scope.initSeries();
});