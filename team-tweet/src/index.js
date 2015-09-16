let hot = "HOT";
console.log(`ES2015 is ${hot}`);

let authorizeGuests = () => {
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


authorizeGuests();
