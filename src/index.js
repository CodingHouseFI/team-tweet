import authorizeGuests from "./authorize";
import "./ngApp";

import "./services/accountService";
import "./services/apiService";

import "./controllers/TweetCtrl";

let app = angular.module("team-tweet", []);

app.controller("TweetCtrl", ($scope) => {

  $scope.peepsInOurList = [{name:"peep1"},{ name:"peep2"}, {name:"peep3"}, {name:"samer"}];
});

authorizeGuests();
