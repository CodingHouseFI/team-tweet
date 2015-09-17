export default () => {
  if ( localStorage["firebase:session::teamtweet15"] ) {
    return;
  }

  var ref = new Firebase("https://teamtweet15.firebaseio.com");
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      alert("Login Failed!", error);
    } else {
      alert("Authenticated successfully with payload:", authData);
    }
  });
};
