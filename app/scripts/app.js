var marvelApp = angular.module('marvelApp', []);
marvelApp.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeController'
    }).when('/characters', {
        templateUrl: 'app/views/characters.html',
        controller: 'CharacterController'
    }).when('/character_details/:characterId', {
        templateUrl: 'app/views/character_details.html',
        controller: 'CharacterDetailsController'
    }).when('/series', {
        templateUrl: 'app/views/series.html',
        controller: 'SeriesController'
    }).when('/series_details/:seriesId', {
        templateUrl: 'app/views/series_details.html',
        controller: 'SeriesDetailsController'
    }).otherwise({
       redirectTo: '/characters'
    });
}]);
