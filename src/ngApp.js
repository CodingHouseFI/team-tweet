window.app = angular.module("team-tweet", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/tweet');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('tweet', {
            url: '/',
            templateUrl: './src/views/tweet.html',
            controller: 'TweetCtrl'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('accounts', {
            url: '/accounts',
            templateUrl: './src/views/accounts.html',
            controller: 'AccountCtrl'
        });
        
});
// app.config(['$routeProvider', function($routeProvider) {
// $routeProvider
//     .when('/', {
//       templateUrl: 'src/views/tweet.html',
//       controller: 'TweetCtrl',
//     })
//     .when('/accounts', {
//       templateUrl: 'src/views/accounts.html',
//       controller: 'AccountCtrl'
//     });
// }]);


