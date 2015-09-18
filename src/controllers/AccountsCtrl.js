app.controller("AccountsCtrl", ($scope, accountService, apiService) => {
  $scope.authorizedAccounts = accountService.getAllAuthorizedAccounts();

  $scope.addAccount = () => {
    accountService.addAccount($scope.twitterHandle);
    $scope.twitterHandle = '';
  };

  $scope.removeAuthorizedAccount = (key) => {
    accountService.removeAuthorizedAccount(key);
  };

});
