export default () => {
  if ( localStorage["firebase:session::teamtweet15"] ) {
    return;
  }

  var ref = new Firebase("https://teamtweet15.firebaseio.com/users");
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      alert("Login Failed!", error);
    } else {
      let userName = authData.twitter.username.toLowerCase();
      alert("Authenticated successfully as: " + userName);
      ref.child(userName).set(authData);
    }
  });
};
