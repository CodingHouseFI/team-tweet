app.service("accountService", function($timeout, ttConfig, authService) {
  var loggedInAccount = authService.currentAccount;
  var iCanTweetAsRef, authorizedRef= new Firebase(`${ttConfig.fbDomain}authorizedTweeters/${loggedInAccount}`);
  var loggedInTweetAsRef = new Firebase(`${ttConfig.fbDomain}ICanTweetAsAccounts/${loggedInAccount}`);

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
    console.log(twitterHandle);
  });

  authorizedRef.on("child_removed", function(snapshot) {
    var fbKey = snapshot.key();
    $timeout(function() {
      delete authorizedForLoggedInAccount[fbKey];
    }, 0);
  });

  loggedInTweetAsRef.on ("child_added", function(snapshot) {
    var twitterHandle = snapshot.val();
    $timeout(function() {
      accountsYouCanTweetAs.push(twitterHandle);
    }, 0);
    console.log(twitterHandle);
  });

  this.addAccount = function(twitterHandle) {
    twitterHandle = twitterHandle.toLowerCase();
    // if(authorizedForLoggedInAccount.indexOf(twitterHandle) === -1){
      authorizedRef.push(twitterHandle);
      iCanTweetAsRef = new Firebase('https://teamtweet15.firebaseio.com/ICanTweetAsAccounts/' + twitterHandle);
      iCanTweetAsRef.push(loggedInAccount);
      //accountsForCurrentAdmin.push(twitterHandle);
    // }
  };

  this.deleteAuthorizedAccount = (fbKey) => {
    console.log(fbKey);
    (authorizedRef).child(fbKey).remove();
  }



});

