app.controller("TweetCtrl", ($scope, accountService, apiService) => {
  accountService.add("@Acct1");
  accountService.add("@Acct2");
  accountService.add("@Acct3");
  accountService.add("@Acct3"); // Duplicates are ignored

  $scope.accountList = accountService.getAll();

  $scope.tweetAs = function() {
    apiService.tweetAs($scope.data);
  };
});
