app.service("accountService", function() {
  var accounts = [];
  this.getAll = function () {
    return accounts;
  };

  this.add = function(username) {
    if(accounts.indexOf(username) === -1){
      accounts.push(username);
    }
  };
});
