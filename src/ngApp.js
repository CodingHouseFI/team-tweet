window.app = angular.module("team-tweet", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
$routeProvider
    .when('/', {
      templateUrl: 'src/views/tweet.html',
      controller: 'TweetCtrl'
    })
    .when('/accounts', {
      templateUrl: 'src/views/accounts.html',
      controller: 'AccountCtrl'
    });
}]);


