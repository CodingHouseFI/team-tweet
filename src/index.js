'use strict';

import authorizeGuests from "./authorize";

authorizeGuests();

var app = angular.module('team-tweet', []);
// var users = ['user1', 'user2', 'user3']

app.controller('TweetCtrl', function($scope) {
$scope.userList = ['user1', 'user2', 'user3']
  

})




