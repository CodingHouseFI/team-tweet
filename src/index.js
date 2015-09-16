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
      let input = $('<input>')
        $('body').append(input);
        $('body').append('<input tweet here>');
        $('body').append('<button type="button" class="btn btn-success">tweet</button>');
    }
  });
};


authorizeGuests();
