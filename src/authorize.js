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
      ref.child("users").push(authData);
    }
  });
};



//curl -X POST -d '{"jameela": "AMAING!!!"}' 'https://twiffer.firebaseio.com/tests.json'
