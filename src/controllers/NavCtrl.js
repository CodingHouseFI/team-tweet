app.controller("NavCtrl", ($scope, authService) => {
  $scope.loggedInUserHandle = authService.currentAccount
});
