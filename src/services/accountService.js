app.service("accountService", function($timeout) {
  var currentAdmin = JSON.parse(localStorage["firebase:session::teamtweet15"]).twitter.username;
  var adminRef = new Firebase("https://teamtweet15.firebaseio.com/adminAccounts/" + currentAdmin);

  var accountsForCurrentAdmin = [];
  this.getAll = function () {
    return accountsForCurrentAdmin;
  };

  adminRef.on("child_added", function(snapshot) {
    var twitterHandle = snapshot.val();
    $timeout(function() {
      accountsForCurrentAdmin.push(twitterHandle);
    }, 0);
  });

  this.addAccount = function(twitterHandle) {
    if(accountsForCurrentAdmin.indexOf(twitterHandle) === -1){
      adminRef.push(twitterHandle);
      // accountsForCurrentAdmin.push(twitterHandle);
    }
  };
});
