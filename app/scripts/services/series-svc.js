marvelApp.service('SeriesService', function($http) {
    //TODO: refactor this to a CONFIG
    this.basePath = 'http://gateway.marvel.com:80',
    this.standardParams = {
        apikey: '01f17a8c218b6ddb271b3457769cb674',
        ts: '00',
        hash: '579ee81a9d0c7ce3e3fc5ec42dfec338'
    },
    this.fetchSeries = function(seriesParams) {
        angular.extend(seriesParams, this.standardParams);
        return $http.get(this.basePath + '/v1/public/series', {params: seriesParams});
    },
    this.fetchSeriesDetails = function(seriesId) {
        return $http.get(this.basePath + '/v1/public/series/' + seriesId, {params: this.standardParams});
    };
    this.fetchSeriesComics = function(seriesId) {
        return $http.get(this.basePath + '/v1/public/series/' + seriesId + '/comics', {params: this.standardParams});

    };
    this.fetchSeriesStories = function(seriesId) {
        return $http.get(this.basePath + '/v1/public/series/' + seriesId + '/stories', {params: this.standardParams});

    };
    this.fetchSeriesCharacters = function(seriesId) {
        return $http.get(this.basePath + '/v1/public/series/' + seriesId + '/characters', {params: this.standardParams});

    };
    this.fetchSeriesEvents = function(seriesId) {
        return $http.get(this.basePath + '/v1/public/series/' + seriesId + '/events', {params: this.standardParams});

    };
});