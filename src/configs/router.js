routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('tweet-team', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller: "TweetCtrl"
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('auth', {
            url: '/auth',
            templateUrl: 'partial-auth.html',
            controller: "TweetCtrl"    
        });
        
});