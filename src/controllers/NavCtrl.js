/**
 * Created by HUQ on 9/17/15.
 */
app.controller("NavCtrl", ($scope, authService) => {
  $scope.loggedInUserHandle = authService.currentAccount
});
