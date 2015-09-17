/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _authorize = __webpack_require__(1);

	var _authorize2 = _interopRequireDefault(_authorize);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	(0, _authorize2["default"])();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function () {
	  if (localStorage["firebase:session::teamtweet15"]) {
	    return;
	  }

	  var ref = new Firebase("https://teamtweet15.firebaseio.com");
	  ref.authWithOAuthPopup("twitter", function (error, authData) {
	    if (error) {
	      alert("Login Failed!", error);
	    } else {
	      alert("Authenticated successfully with payload:", authData);
	    }
	  });
	};

	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	window.app = angular.module("team-tweet", ['ngRoute']);

	// create the module and name it scotchApp
	// also include ngRoute for all our routing needs
	// var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	app.config(function ($routeProvider) {
	    $routeProvider

	    // route for the home page
	    .when('/', {
	        templateUrl: 'pages/main.html',
	        controller: 'mainController'
	    })

	    // route for the about page
	    .when('/addUser', {
	        templateUrl: 'pages/addUserPage.html',
	        controller: 'aboutController'
	    });
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function ($scope) {
	    // create a message to display in our view
	    $scope.message = 'Everyone come and see how good I look!';
	});

	app.controller('aboutController', function ($scope) {
	    $scope.message = 'Look! I am an about page.';
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	app.service("accountService", function () {
	  var accounts = [];
	  this.getAll = function () {
	    return accounts;
	  };

	  this.add = function (username) {
	    if (accounts.indexOf(username) === -1) {
	      accounts.push(username);
	    }
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	app.service("apiService", function () {
	  this.tweetAs = function (options) {
	    // Do the thing here...
	    console.log(options);
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	app.controller("TweetCtrl", function ($scope, accountService, apiService) {
	  accountService.add("@Acct1");
	  accountService.add("@Acct2");
	  accountService.add("@Acct3");
	  accountService.add("@Acct3"); // Duplicates are ignored

	  $scope.accountList = accountService.getAll();

	  $scope.tweetAs = function () {
	    apiService.tweetAs($scope.data);
	  };
	});

/***/ }
/******/ ]);