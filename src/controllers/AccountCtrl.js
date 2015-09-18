app.controller("AccountsCtrl", ($scope, accountService, apiService) => {
  $scope.accounts = accountService.getAll();

  $scope.addAccount = () => {
    accountService.addAccount($scope.twitterHandle);
    $scope.twitterHandle = "";
  };

  $scope.deleteAccount = (twitterHandle) => {
    accountService.deleteAuthorizedAccount(twitterHandle);
  }

});
