app.controller("TweetCtrl", ($scope, accountService, apiService) => {
	console.log('hit');
  accountService.add("@Acct1");
  accountService.add("@Acct2");
  accountService.add("@Acct3");
  accountService.add("@Acct3"); // Duplicates are ignored
  
  $scope.addUser = function () {
  	accountService.add($scope.user);
  	 console.log($scope.accountList);

  }
  $scope.accountList = accountService.getAll();
  console.log($scope.accountList);

  $scope.tweetAs = function() {
    apiService.tweetAs($scope.data);
  };
});
