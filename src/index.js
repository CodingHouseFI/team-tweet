import authorizeGuests from "./authorize";

import "./ngApp";

import "./services/accountService";
import "./services/apiService";

import "./controllers/TweetCtrl";
import './configs/router.js';

authorizeGuests();
