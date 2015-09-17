app.service("accountService", function($timeout) {
  var loggedInAccount = JSON.parse(localStorage["firebase:session::teamtweet15"]).twitter.username;
  var iCanTweetAsRef, authorizedRef = new Firebase("https://teamtweet15.firebaseio.com/authorizedTweeters/" + loggedInAccount);
  var loggedInTweetAsRef = new Firebase("https://teamtweet15.firebaseio.com/ICanTweetAsAccounts/" + loggedInAccount);

  var authorizedForLoggedInAccount = {}, accountsYouCanTweetAs = [];

  this.getAll = function () {
    return authorizedForLoggedInAccount;
  };

  this.getAllAccountsYouCanTweetAs = function () {
    return accountsYouCanTweetAs;
  };

  authorizedRef.on("child_added", function(snapshot) {
    var fbKey = snapshot.key();
    var twitterHandle = snapshot.val();
    $timeout(function() {
      authorizedForLoggedInAccount[fbKey] = twitterHandle;
    }, 0);
  });

  loggedInTweetAsRef.on("child_added", function(snapshot) {
    var twitterHandle = snapshot.val();
    $timeout(function() {
      accountsYouCanTweetAs.push(twitterHandle);
    }, 0);
  });

  this.addAccount = function(twitterHandle) {
    twitterHandle = twitterHandle.toLowerCase();
    // if(authorizedForLoggedInAccount.indexOf(twitterHandle) === -1){
      authorizedRef.push(twitterHandle);
      iCanTweetAsRef = new Firebase("https://teamtweet15.firebaseio.com/ICanTweetAsAccounts/" + twitterHandle);
      iCanTweetAsRef.push(loggedInAccount);
    // }
  };
});
