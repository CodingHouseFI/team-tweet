import authorizeGuests from "./authorize";

let app = angular.module("team-tweet", []);


app.controller("TweetCtrl", ($scope) => {
  $scope.userList = ["@smallman", "@mikeliang", "@twitterguy"];
  
});

authorizeGuests();
