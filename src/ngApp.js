
window.app = angular.module("team-tweet", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: "TweetCtrl"
    })
    .state('accounts', {
      url: '/accounts',
      templateUrl: 'templates/accounts.html',
      controller: "AccountsCtrl"
    })

});
