app.service("authService", function() {
  this.currentAccount = JSON.parse(localStorage["firebase:session::teamtweet15"]).twitter.username;
});
