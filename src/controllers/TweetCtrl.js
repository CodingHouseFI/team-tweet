app.controller("TweetCtrl", ($scope, accountService, apiService) => {
  $scope.accountList = accountService.getAll();

  $scope.tweetAs = function() {
    apiService.tweetAs($scope.data);
  };
});
