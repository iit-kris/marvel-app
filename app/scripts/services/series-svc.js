marvelApp.service('SeriesService', function($http) {
    //TODO: refactor this to a CONFIG
    this.basePath = 'http://gateway.marvel.com:80',
    this.standardParams = {
        apikey: '01f17a8c218b6ddb271b3457769cb674',
        ts: '00',
        hash: '579ee81a9d0c7ce3e3fc5ec42dfec338'
    },
    this.fetchSeries = function() {
        return $http.get(this.basePath + '/v1/public/series', {params: this.standardParams});
    },
    this.fetchSeriesDetails = function(seriesId) {
        return $http.get(this.basePath + '/v1/public/series/' + seriesId, {params: this.standardParams});
    };
});