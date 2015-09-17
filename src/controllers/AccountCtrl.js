app.controller("AccountCtrl", ($scope, accountService) => {
  $scope.accountList = accountService.getAll();
  if($scope.accountList.length === 0) {
    accountService.add("@Acct1");
    accountService.add("@Acct2");
    accountService.add("@Acct3");
  }

  $scope.addAccount = function (username) {
    if(username === undefined || username.length <= 0) {
      return;
    }
    else if(username[0] !== '@') {
      username = '@' + username;
    }
    accountService.add(username);
  };
});
