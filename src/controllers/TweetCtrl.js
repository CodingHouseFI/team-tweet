app.controller("TweetCtrl", ($scope, accountService, apiService) => {
  $scope.accountsICanTweetAs = accountService.getAllAccountsYouCanTweetAs();

  $scope.tweetAs = function() {
    apiService.tweetAs($scope.data);
  };
});
