import authorizeGuests from "./authorize";

let app = angular.module("team-tweet", []);

app.controller("TweetCtrl", ($scope) => {

  $scope.peepsInOurList = [{name:"peep1"},{ name:"peep2"}, {name:"peep3"}, {name:"samer"}];
});

authorizeGuests();
