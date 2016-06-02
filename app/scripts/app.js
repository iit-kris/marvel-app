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
    }).otherwise({
       redirectTo: '/characters'
    });
}]);
