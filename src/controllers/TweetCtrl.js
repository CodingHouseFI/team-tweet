app.controller("TweetCtrl", ($scope, accountService, apiService) => {
  $scope.accountList = accountService.getAllAccountsYouCanTweetAs();

  $scope.tweetAs = function() {
    apiService.tweetAs($scope.data);
  };
});
