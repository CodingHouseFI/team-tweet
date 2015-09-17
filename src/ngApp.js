window.app = angular.module("team-tweet", ['ngRoute']);

 // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    // var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/addUser', {
                templateUrl : 'pages/addUserPage.html',
                controller  : 'aboutController'
            })
     
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

   