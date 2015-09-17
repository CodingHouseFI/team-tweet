app.controller("AccountCtrl", ($scope, $location, accountService) => {
  $scope.accountList = accountService.getAll();

  $scope.addAccount = function (username) {
    accountService.add(username);
  };

  console.log("accounts")
  $scope.changeView = function(viewName) {
    console.log("Click: " + viewName);
    if(viewName !== 'accounts') {
      $location.path = viewName;
    }
  };
});
