app.service("authService", function() {
  let authData = localStorage["firebase:session::teamtweet15"];
  this.currentAccount = authData && JSON.parse(authData).twitter.username;
});
