let hot = "HOT";
console.log(`ES2015 is ${hot}`);

let authGuests = () => {
  if (localStorage["firebase:session::twiffer"]) {
    return;
  }
};

var ref = new Firebase("https://twiffer.firebaseio.com");
ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

authGuests();