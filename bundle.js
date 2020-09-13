/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\nvar darkMode = {\n  htmlBg: '#333333',\n  bodyBg: '#333333'\n};\nvar lightMode = {\n  htmlBg: '#f5f5f5',\n  bodyBg: '#f5f5f5'\n};\nvar textColors = ['#f5f5f5', 'black'];\nvar changingElements = [_variables__WEBPACK_IMPORTED_MODULE_0__[\"html\"], _variables__WEBPACK_IMPORTED_MODULE_0__[\"body\"]];\n\nvar changeTheme = function changeTheme(theme, id) {\n  Object.keys(theme).map(function (key, index) {\n    changingElements[index].style.backgroundColor = theme[key];\n  });\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"body\"].style.color = textColors[id];\n};\n\n_variables__WEBPACK_IMPORTED_MODULE_0__[\"darkModeCheckbox\"].addEventListener('change', function (_ref) {\n  var target = _ref.target;\n  target.checked ? changeTheme(darkMode, 0) : changeTheme(lightMode, 1);\n});\n\nvar successMessage = function successMessage() {\n  return console.warn('WEBPACK LENDO ATÉ AQUI.');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (successMessage());\n\n//# sourceURL=webpack:///./src/dark-mode.js?");

/***/ }),

/***/ "./src/populator-functions.js":
/*!************************************!*\
  !*** ./src/populator-functions.js ***!
  \************************************/
/*! exports provided: populateOutput, selectPopulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateOutput\", function() { return populateOutput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectPopulator\", function() { return selectPopulator; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\n // Populates the output with the given params\n\nfunction populateOutput() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  params.map(function (param, index) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"output\"].innerHTML += \"<p> \".concat(_variables__WEBPACK_IMPORTED_MODULE_0__[\"outputLabels\"][0][index], \" \").concat(param, \" </p>\");\n  });\n} // Function that handles populating the select with options\n\nfunction selectPopulator() {\n  _script__WEBPACK_IMPORTED_MODULE_1__[\"apis\"].map(function (item, index) {\n    var option = document.createElement('option');\n    option.innerHTML = item.name;\n    option.value = index;\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectApp\"].appendChild(option);\n  });\n}\n\n//# sourceURL=webpack:///./src/populator-functions.js?");

/***/ }),

/***/ "./src/render-functions.js":
/*!*********************************!*\
  !*** ./src/render-functions.js ***!
  \*********************************/
/*! exports provided: renderLoading, renderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLoading\", function() { return renderLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderError\", function() { return renderError; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n // Makes the Loading Gif visible\n\nvar renderLoading = function renderLoading() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"loadingGif\"].classList.toggle('hide');\n}; // Render when an error occurs\n\nvar renderError = function renderError(item, classe) {\n  item.classList.toggle(classe);\n  setTimeout(function () {\n    item.classList.toggle(classe);\n  }, 2000);\n};\n\n//# sourceURL=webpack:///./src/render-functions.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: getReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReq\", function() { return getReq; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _render_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-functions */ \"./src/render-functions.js\");\n/* harmony import */ var _populator_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populator-functions */ \"./src/populator-functions.js\");\n\n\n // Function that makes the async request to the selected API\n\nfunction getReq(url) {\n  Object(_render_functions__WEBPACK_IMPORTED_MODULE_1__[\"renderLoading\"])();\n  axios.get(url).then(function (response) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"loadingGif\"].classList.toggle('hide');\n    var user = response.data;\n    var name = user.name,\n        bio = user.bio,\n        avatar_url = user.avatar_url,\n        blog = user.blog,\n        company = user.company,\n        email = user.email,\n        location = user.location,\n        followers = user.followers,\n        following = user.following,\n        id = user.id,\n        repos_url = user.repos_url,\n        twitter_username = user.twitter_username,\n        hireable = user.hireable,\n        public_repos = user.public_repos,\n        site_admin = user.site_admin,\n        starred_url = user.starred_url,\n        subscriptions_url = user.subscriptions_url,\n        type = user.type,\n        updated_at = user.updated_at,\n        url = user.url;\n    Object(_populator_functions__WEBPACK_IMPORTED_MODULE_2__[\"populateOutput\"])(name, bio, avatar_url, blog, company, email, location, followers, following, id, repos_url, twitter_username, hireable, public_repos, site_admin, starred_url, subscriptions_url, type, updated_at, url);\n  })[\"catch\"](function (error) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"loadingGif\"].classList.toggle('hide');\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"warningDivP\"].innerHTML = error;\n    Object(_render_functions__WEBPACK_IMPORTED_MODULE_1__[\"renderError\"])(_variables__WEBPACK_IMPORTED_MODULE_0__[\"warningDiv\"], 'hide');\n  });\n}\n\n//# sourceURL=webpack:///./src/request.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: apis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apis\", function() { return apis; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _render_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-functions */ \"./src/render-functions.js\");\n/* harmony import */ var _populator_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populator-functions */ \"./src/populator-functions.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n/* harmony import */ var _dark_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dark-mode */ \"./src/dark-mode.js\");\n\n\n\n\n\nvar apis = [{\n  name: 'Github',\n  img: 'https://image.flaticon.com/icons/svg/733/733609.svg',\n  color: 'var(--github-color)',\n  imgColor: 'var(--github-img-color)'\n}, {\n  name: 'Twitter',\n  img: 'https://image.flaticon.com/icons/svg/733/733579.svg',\n  color: 'var(--twitter-color)',\n  imgColor: 'var(--twitter-img-color)'\n}, {\n  name: 'Instagram',\n  img: 'https://image.flaticon.com/icons/svg/174/174855.svg',\n  color: 'var(--instagram-color)',\n  imgColor: 'var(--instagram-img-color)'\n}]; // Handle the calls to the changing select color function\n\n_variables__WEBPACK_IMPORTED_MODULE_0__[\"selectApp\"].addEventListener('change', function (e) {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectApp\"].style.backgroundColor = '';\n  var target = e.target.value;\n\n  switch (target >= 0) {\n    case target == '0':\n      selectStyles(target);\n      break;\n\n    case target == '1':\n      selectStyles(target);\n      break;\n\n    case target == '2':\n      selectStyles(target);\n      break;\n  }\n}); // Handles the searchButton click\n\n_variables__WEBPACK_IMPORTED_MODULE_0__[\"searchButton\"].addEventListener('click', function () {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"output\"].innerHTML = '';\n\n  if (isInputEmpty()) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"warningDivP\"].innerHTML = 'Por favor, digite um valor no campo de usuário';\n    Object(_render_functions__WEBPACK_IMPORTED_MODULE_1__[\"renderError\"])(_variables__WEBPACK_IMPORTED_MODULE_0__[\"warningDiv\"], 'hide');\n  } else {\n    // Pegar o campo selecionado do select e mandar como parâmetro\n    requestFromApi(_variables__WEBPACK_IMPORTED_MODULE_0__[\"selectApp\"].value);\n  }\n});\n\nvar isInputEmpty = function isInputEmpty() {\n  return _variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].value === '';\n}; // Handles the possible choices from getting APIs\n\n\nfunction requestFromApi(app) {\n  switch (app) {\n    case 'default':\n      Object(_request__WEBPACK_IMPORTED_MODULE_3__[\"getReq\"])(\"https://api.github.com/users/\".concat(_variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].value));\n      break;\n\n    case '0':\n      Object(_request__WEBPACK_IMPORTED_MODULE_3__[\"getReq\"])(\"https://api.github.com/users/\".concat(_variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].value));\n      break;\n\n    case '1':\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"output\"].innerHTML = 'Twitter API ainda não adicionada.';\n      break;\n\n    case '2':\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"output\"].innerHTML = 'Instagram API ainda não adicionada.';\n      break;\n  }\n} // Change the Select styles and the image source\n\n\nvar selectStyles = function selectStyles(target) {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectApp\"].style.backgroundColor = apis[target].color;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectImg\"].style.backgroundColor = apis[target].imgColor;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectImg\"].src = apis[target].img;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectApp\"].style.transition = '0.2s';\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"selectImg\"].style.transition = '0.2s';\n};\n\nObject(_populator_functions__WEBPACK_IMPORTED_MODULE_2__[\"selectPopulator\"])();\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: input, searchButton, selectApp, selectImg, warningDiv, warningDivP, output, loadingGif, darkModeCheckbox, html, body, outputLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchButton\", function() { return searchButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectApp\", function() { return selectApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectImg\", function() { return selectImg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warningDiv\", function() { return warningDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warningDivP\", function() { return warningDivP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"output\", function() { return output; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadingGif\", function() { return loadingGif; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkModeCheckbox\", function() { return darkModeCheckbox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"body\", function() { return body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"outputLabels\", function() { return outputLabels; });\nvar input = document.querySelector('.search input');\nvar searchButton = document.querySelector('.search-button');\nvar selectApp = document.querySelector('#select');\nvar selectImg = document.querySelector('.select-img');\nvar warningDiv = document.querySelector('.warning');\nvar warningDivP = document.querySelector('.warning p');\nvar output = document.querySelector('.output-results');\nvar loadingGif = document.querySelector('.loading img');\nvar darkModeCheckbox = document.querySelector('input[name=theme]');\nvar html = document.querySelector('html');\nvar body = document.body;\nvar outputLabels = [['Name: ', 'Bio: ', 'Avatar Url: ', 'Blog: ', 'Company: ', 'Email: ', 'Location: ', 'Followers: ', 'Following: ', 'Id: ', 'Repositories: ', 'Twitter Username: ', 'Hireable: ', 'Public Repositories: ', 'Is Site Admin: ', 'Starred Url\\'s: ', 'Subscriptions Url', 'Type: ', 'Updated At: ', 'Profile Url: ']];\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ })

/******/ });