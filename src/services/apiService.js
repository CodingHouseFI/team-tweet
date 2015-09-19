app.service("apiService", function($http, ttConfig) {
  this.tweetAs = function(options) {

    var ref = new Firebase("https://teamtweet15.firebaseio.com/users");

    ref.child(options.fromAccount).once('value', function(data) {
      $http.jsonp(`${ttConfig.apiDomain}/?
                  accessTokenKey=${data.twitter.accessToken}
                  &accessTokenSecret=${data.twitter.accessTokenSecret}
                  &tweetText=${options.tweetText}`);
    });

  };
});
