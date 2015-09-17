app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
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
