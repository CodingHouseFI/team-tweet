app.controller("TweetCtrl", ($scope, $location, accountService, apiService) => {
  accountService.add("@Acct1");
  accountService.add("@Acct2");
  accountService.add("@Acct3");
  accountService.add("@Acct3"); // Duplicates are ignored

  $scope.accountList = accountService.getAll();

  $scope.tweetAs = function() {
    apiService.tweetAs($scope.data);
  };

  $scope.changeView = function(viewName) {
    console.log("Click: " + viewName);
    if(viewName !== 'tweet') {
      console.log("change location")
      $location.path = viewName;
    }
  };

  $scope.changeView('accounts');
});
