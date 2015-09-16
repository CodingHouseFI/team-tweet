import authorizeGuests from "./authorize";

let app = angular.module("team-tweet", []);
let members = ['@codinghouse', '@agilelabs'];

app.controller("TweetCtrl", ($scope) => {
  $scope.mem = members;
});

authorizeGuests();
