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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* COLORS */\n@media screen and (min-width: 320px) {\n  .login-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n    .login-section .login-header {\n      font-family: 'Cinzel', serif;\n      font-weight: 600;\n      color: #146eff;\n      text-decoration: underline; }\n    .login-section .login-input,\n    .login-section .login-form-submit {\n      margin: 20px;\n      width: 50%; }\n    .login-section .login-form-submit {\n      padding: 6px;\n      font-weight: bolder;\n      cursor: pointer;\n      border-radius: 6px;\n      background-color: #e3e3e3;\n      transition: background-color .5s; }\n      .login-section .login-form-submit:hover {\n        background-color: #146eff;\n        color: white; }\n  header,\n  footer {\n    background-color: #146eff;\n    height: 15%; }\n    header h1,\n    footer h1 {\n      font-size: 25px; }\n    header nav,\n    footer nav {\n      display: flex;\n      justify-content: center; }\n    header .welcome-logo,\n    footer .welcome-logo {\n      margin: 0;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between; }\n  footer {\n    display: flex;\n    justify-content: center; }\n  main {\n    background-color: #e3e3e3;\n    height: auto; }\n    main button {\n      padding: 6px;\n      font-weight: bolder;\n      cursor: pointer;\n      border-radius: 6px;\n      background-color: #e3e3e3;\n      transition: background-color .5s; }\n      main button:hover {\n        background-color: #146eff;\n        color: white; }\n    main h3,\n    main .book-title {\n      margin: 0; }\n    main .book {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      padding: 10px; }\n    main .book-inputs {\n      padding: 10px;\n      align-content: center; }\n    main .destination-input,\n    main .travel-date,\n    main .trip-duration,\n    main .number-travel {\n      display: flex;\n      justify-content: center;\n      padding: 10px 0;\n      flex-direction: column; }\n  .stats-book {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding-top: 15px;\n    margin: 15px; }\n    .stats-book .user-stats,\n    .stats-book .book-trip {\n      border: 15px solid grey;\n      border-radius: 30px;\n      flex-direction: column;\n      background-color: white;\n      align-items: center;\n      padding: 20px;\n      display: flex;\n      justify-content: center; }\n    .stats-book .book-trip {\n      margin-top: 15px; }\n  img {\n    width: auto;\n    height: 160px; }\n  .past-title {\n    font-family: 'Cinzel', serif;\n    font-weight: 600;\n    color: #146eff;\n    text-decoration: underline;\n    display: flex;\n    justify-content: center;\n    font-size: xxx-large; }\n  .cards-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center; }\n    .cards-wrapper .destination-card {\n      display: flex;\n      justify-content: center;\n      border: 10px solid grey;\n      border-radius: 30px;\n      flex-direction: column;\n      background-color: white;\n      align-items: center;\n      padding: 20px;\n      margin: 15px; } }\n\n@media screen and (min-width: 768px) {\n  main .destination-input,\n  main .travel-date,\n  main .trip-duration,\n  main .number-travel {\n    display: flex;\n    justify-content: center;\n    padding: 20px 0;\n    flex-direction: column; }\n  .cards-wrapper {\n    grid-template-columns: 1fr 1fr; }\n  .button-wrapper {\n    display: flex;\n    justify-content: space-around; }\n  .login-section .login-input,\n  .login-section .login-form-submit {\n    width: 30%; } }\n\n@media screen and (min-width: 1024px) {\n  .login-section .login-input,\n  .login-section .login-form-submit {\n    width: 20%; }\n  header h1 {\n    font-size: 35px; }\n  .cards-wrapper {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .stats-book {\n    flex-direction: row; } }\n\n.hidden {\n  display: none !important; }\n", "",{"version":3,"sources":["webpack://./src/css/_variables.scss","webpack://./src/css/_media-queries.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"AAAA,WAAA;ACAA;EAEE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB,EAAA;IAJrB;MCkBA,4BAA4B;MAC5B,gBAAgB;MAChB,cFrByB;MEsBzB,0BAA0B,EAAA;IDrB1B;;MAYI,YAAY;MACZ,UAAU,EAAA;IAbd;MCIA,YAAY;MACZ,mBAAmB;MACnB,eAAe;MACf,kBAAkB;MAClB,yBFRuB;MESvB,gCAAgC,EAAA;MAEhC;QACE,yBFbuB;QEcvB,YAAY,EAAA;EDQd;;IAEE,yBDxBuB;ICyBvB,WAAW,EAAA;IAHb;;MAMI,eAAe,EAAA;IANnB;;MCtBA,aAAa;MACb,uBAAuB,EAAA;IDqBvB;;MAcI,SAAS;MACT,aAAa;MACb,mBAAmB;MACnB,8BAA8B,EAAA;EAIlC;IC3CA,aAAa;IACb,uBAAuB,EAAA;ED8CvB;IACE,yBD/CqB;ICgDrB,YAAY,EAAA;IAFd;MC1CA,YAAY;MACZ,mBAAmB;MACnB,eAAe;MACf,kBAAkB;MAClB,yBFRuB;MESvB,gCAAgC,EAAA;MAEhC;QACE,yBFbuB;QEcvB,YAAY,EAAA;IDiCd;;MAUI,SAAS,EAAA;IAVb;MC/CA,aAAa;MACb,uBAAuB;MD6DnB,mBAAmB;MACnB,sBAAsB;MACtB,aAAa,EAAA;IAjBjB;MAqBI,aAAa;MACb,qBAAqB,EAAA;IAtBzB;;;;MC/CA,aAAa;MACb,uBAAuB;MD4EnB,eAAe;MACf,sBAAsB,EAAA;EAI1B;IACE,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY,EAAA;IALd;;MCxDA,uBAA6B;MAC7B,mBAAmB;MACnB,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MACnB,aAAa;MA/Bb,aAAa;MACb,uBAAuB,EAAA;IDiFvB;MAcI,gBAAgB,EAAA;EAIpB;IACE,WAAW;IACX,aAAa,EAAA;EAGf;ICtFA,4BAA4B;IAC5B,gBAAgB;IAChB,cFrByB;IEsBzB,0BAA0B;IAtB1B,aAAa;IACb,uBAAuB;ID2GrB,oBAAoB,EAAA;EAGtB;IACE,aAAa;IACb,0BAA0B;IAC1B,uBAAuB,EAAA;IAHzB;MC/GA,aAAa;MACb,uBAAuB;MAyBvB,uBAA6B;MAC7B,mBAAmB;MACnB,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MACnB,aAAa;MDwFT,YAAY,EAAA,EACb;;AAKL;EAEE;;;;IC/HA,aAAa;IACb,uBAAuB;IDoInB,eAAe;IACf,sBAAsB,EAAA;EAI1B;IACE,8BAA8B,EAAA;EAGhC;IACE,aAAa;IACb,6BAA6B,EAAA;EAG/B;;IAGI,UAAU,EAAA,EACX;;AAGL;EAEE;;IAGI,UAAU,EAAA;EAId;IAEI,eAAe,EAAA;EAInB;IACE,kCAAkC,EAAA;EAGpC;IACE,mBAAmB,EAAA,EACpB;;AE1KH;EACE,wBAAwB,EAAA","sourcesContent":["/* COLORS */\n$header-background: #146eff;\n$main-background: #e3e3e3;\n","@media screen and (min-width: 320px) {\n\n  .login-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .login-header {\n      @include headline-font;\n    }\n\n    .login-input,\n    .login-form-submit {\n      margin: 20px;\n      width: 50%;\n    }\n\n    .login-form-submit {\n      @include button-format;\n    }\n  }\n\n  header,\n  footer {\n    background-color: $header-background;\n    height: 15%;\n\n    h1 {\n      font-size: 25px;\n    }\n\n    nav {\n      @include flex-center;\n    }\n\n    .welcome-logo {\n      margin: 0;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n    }\n  }\n\n  footer {\n    @include flex-center;\n  }\n\n  main {\n    background-color: $main-background;\n    height: auto;\n\n    button {\n      @include button-format;\n    }\n\n    h3,\n    .book-title {\n      margin: 0;\n    }\n\n    .book {\n      @include flex-center;\n      align-items: center;\n      flex-direction: column;\n      padding: 10px;\n    }\n\n    .book-inputs {\n      padding: 10px;\n      align-content: center;\n    }\n\n    .destination-input,\n    .travel-date,\n    .trip-duration,\n    .number-travel {\n      @include flex-center;\n      padding: 10px 0;\n      flex-direction: column;\n    }\n  }\n\n  .stats-book {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding-top: 15px;\n    margin: 15px;\n\n    .user-stats,\n    .book-trip {\n      @include card-styling(15px);\n      @include flex-center;\n    }\n\n    .book-trip {\n      margin-top: 15px;\n    }\n  }\n\n  img {\n    width: auto;\n    height: 160px;\n  }\n\n  .past-title {\n    @include headline-font;\n    @include flex-center;\n    font-size: xxx-large;\n  }\n\n  .cards-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n\n    .destination-card {\n      @include flex-center;\n      @include card-styling(10px);\n      margin: 15px;\n    }\n  }\n}\n\n\n@media screen and (min-width: 768px) {\n\n  main {\n    .destination-input,\n    .travel-date,\n    .trip-duration,\n    .number-travel {\n      @include flex-center;\n      padding: 20px 0;\n      flex-direction: column;\n    }\n  }\n\n  .cards-wrapper {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .button-wrapper {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .login-section {\n    .login-input,\n    .login-form-submit {\n      width: 30%;\n    }\n  }\n}\n@media screen and (min-width: 1024px) {\n\n  .login-section {\n    .login-input,\n    .login-form-submit {\n      width: 20%;\n    }\n  }\n\n  header {\n    h1 {\n      font-size: 35px;\n    }\n  }\n\n  .cards-wrapper {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  .stats-book {\n    flex-direction: row;\n  }\n}\n","@mixin flex-center() {\n  display: flex;\n  justify-content: center;\n}\n\n@mixin button-format() {\n  padding: 6px;\n  font-weight: bolder;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: $main-background;\n  transition: background-color .5s;\n\n  &:hover {\n    background-color: $header-background;\n    color: white;\n  }\n}\n\n@mixin headline-font() {\n  font-family: 'Cinzel', serif;\n  font-weight: 600;\n  color: $header-background;\n  text-decoration: underline;\n}\n\n@mixin card-styling($thickness) {\n  border: $thickness solid grey;\n  border-radius: 30px;\n  flex-direction: column;\n  background-color: white;\n  align-items: center;\n  padding: 20px;\n}\n","@import '_variables.scss';\n@import '_mixins.scss';\n@import 'normalize.css';\n@import '_media-queries.scss';\n\n\n.hidden {\n  display: none !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/dom-updates.js":
/*!****************************!*\
  !*** ./src/dom-updates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {

  greetUser(traveler) {
    let element = document.querySelector('.welcome');
    element.innerHTML = `Welcome ${traveler.name}!`
  },

  displayPrevYrSpending(traveler, allDestinations) {
    let element = document.querySelector('.previous-year');
    element.innerHTML = 'You spent $' + traveler.calcPrevYearSpending(allDestinations) + ' last year on trips, what a year!'
  },

  displayCurrentYrSpending(traveler, allDestinations) {
    let element = document.querySelector('.current-year');
    element.innerHTML = 'You\'ve spent $' + traveler.calcCurrentYearSpending(allDestinations) + ' so far this year on trips, keep it going!'
  },

  addTripCardToDom(myTrips, allDestinations, element) {
    element.innerHTML = '';
    return myTrips.map(trip => {
      return allDestinations.destinations.find(destination => {
        if (trip.destinationID === destination.id) {
          let cardHtml = `
              <article class="destination-card" id=${destination.id}>
                <h3>${destination.destination}</h3>
                <p>${trip.date} for ${trip.duration} days</p>
                <p>Number of passengers: ${trip.travelers}</p>
                <p>Trip total w/ 10% agent fee: $${trip.getTotalWithAgentFee(destination)}</p>
                <p>Trip Status: ${trip.status}</p>
                <div class="card-photo-container">
                  <img src=${destination.image} class="card-photo-preview" alt="${destination.alt}" height="300px">
                </div>
              </article>`
          return element.insertAdjacentHTML("afterbegin", cardHtml);
        }
      })
    })
  },

  getDestinationNames(destinations) {
    const destinationSelect = document.querySelector('.destination-list');
    destinationSelect.innerHTML =
    `${destinations.map(destination => {
      return `<option value="${destination.id}">${destination.destination}</option>`
    })}`
  },

  displayEstimateCost(element, costPerPerson, estimatedTotalCost, totalPlusFees) {
    return element.innerHTML = `
      <p class="estimate-per-person">Cost Per Person: $${costPerPerson}</p>
      <p class="estimate-all">Total All Travelers: $${estimatedTotalCost}</p>
      <p class="estimate-fees">Total + Agent Fees: $${totalPlusFees}</p>
      <button class="book-trip-btn">Book this trip!</button>`
  },

  displayBookConfirmation(element) {
    element.innerHTML = `
      <p>Are you sure you want to book this trip?</p>
      <button class="yes-book">Yes, I'm sure!</button>
      <button class="no-book">Not right now</button>`
  },
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetch-requests.js":
/*!*******************************!*\
  !*** ./src/fetch-requests.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const loadAPIs = (id) => {

  const getSingleTraveler = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => checkForError(response))
    .then(singleTravelerData => singleTravelerData)

  const getAllTrips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => checkForError(response))
    .then(tripsData => tripsData)

  const getAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => checkForError(response))
    .then(destinationsData => destinationsData)

  return Promise.all([getSingleTraveler, getAllTrips, getAllDestinations])
    .then(data => {
      let allData = {};
      allData.getSingleTraveler = data[0];
      allData.getAllTrips = data[1];
      allData.getAllDestinations = data[2];
      return allData;
    })
    .catch(err => errorMsgPointer.insertAdjacentHTML('afterend', `
      <h1 class="error-msg">Something isn't right, please try again!</h1>
      <p>ERROR: ${err.message}</p>`)
    )
}

function checkForError(response) {
  if (response.ok) {
    return response.json();
  } else {
    errorMsgPointer.insertAdjacentHTML('afterend', `
      <h1 class="error-msg">Something isn't right, please try again!</h1>`)
  }
}
/* harmony default export */ __webpack_exports__["default"] = (loadAPIs);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _fetch_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-requests */ "./src/fetch-requests.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip */ "./src/trip.js");
/* harmony import */ var _trips_repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trips-repo */ "./src/trips-repo.js");
/* harmony import */ var _dom_updates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-updates */ "./src/dom-updates.js");







let traveler, allTrips, allDestinations;

const tripCardsGrid = document.querySelector('.cards-wrapper');
const destinationSelect = document.querySelector('.destination-list');
const departDaySelect = document.querySelector('#depart');
const tripDurationSelect = document.querySelector('#duration');
const numTravelersSelect = document.querySelector('#numTravelers');
const estimateTripBtn = document.querySelector('.estimate-trip');
const estimateDOMPointer = document.querySelector('.display-estimates');
const loginBtn = document.querySelector('.login-form-submit');
const userNameInput = document.querySelector('#username-field');
const errorMsgPointer = document.querySelector('.stats-book');


estimateTripBtn.addEventListener('click', showEstimate);
loginBtn.addEventListener('click', checkLogin);


function checkLogin() {
  const passwordInput = document.querySelector('#password-field');
  const loginFormWrap = document.querySelector('.login-section');
  const userDashboardWrap = document.querySelector('.user-dashboard');
  const userID = getValidLoginID();
  if (passwordInput.value === 'travel2020' && userID) {
    getUser(userID);
    loginFormWrap.classList.add('hidden');
    userDashboardWrap.classList.remove('hidden');
  } else {
    const loginErrorMsg = document.querySelector('.login-error-msg')
    loginErrorMsg.innerHTML = 'Invalid username/password, please try again!'
  }
}

function getValidLoginID() {
  let userId = userNameInput.value.slice(8);
  if (userId > 0 && userId <= 50 && userNameInput.value.includes('traveler')) {
    return userId;
  } else {
    return false;
  }
}

function getUser(userID) {
  Object(_fetch_requests__WEBPACK_IMPORTED_MODULE_1__["default"])(userID)
    .then(allData => {
      traveler = new _traveler__WEBPACK_IMPORTED_MODULE_2__["default"](allData.getSingleTraveler);
      allTrips = new _trips_repo__WEBPACK_IMPORTED_MODULE_4__["default"](allData.getAllTrips);
      allDestinations = allData.getAllDestinations;
      allTrips.findTripsByID(traveler);
      displayStartDOM();
    })
}

function displayStartDOM () {
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].greetUser(traveler);
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayPrevYrSpending(traveler, allDestinations.destinations);
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCurrentYrSpending(traveler, allDestinations.destinations)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].addTripCardToDom(traveler.myTrips, allDestinations, tripCardsGrid)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].getDestinationNames(allDestinations.destinations);
  formatDateCalendar();
}

function formatDateCalendar() {
  let date1 = new Date();
  let minDate = date1.toISOString().substring(0, 10);
  return departDaySelect.setAttribute('min', minDate);
}

function bookTripConfirmation() {
  event.preventDefault();
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayBookConfirmation(estimateDOMPointer);
  document.querySelector('.yes-book').addEventListener('click', postTrip)
  document.querySelector('.no-book').addEventListener('click', () => estimateDOMPointer.innerHTML = '');
}

function postTrip() {
  event.preventDefault();
  estimateDOMPointer.innerHTML = '';
  fetch("http://localhost:3001/api/v1/trips", {
    method: 'POST',
    body: JSON.stringify({
      "id": allTrips.allTrips.length + 1,
      "userID": traveler.id,
      "destinationID": parseInt(destinationSelect.value),
      "travelers": numTravelersSelect.value,
      "date": formatDatePost(departDaySelect.value),
      "duration": tripDurationSelect.value,
      "status": 'pending',
      "suggestedActivities": []
    }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(data => {
      traveler.myTrips.push(new _trip__WEBPACK_IMPORTED_MODULE_3__["default"](data.newTrip))
      allTrips.allTrips.push(new _trip__WEBPACK_IMPORTED_MODULE_3__["default"](data.newTrip))
      _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].addTripCardToDom(traveler.myTrips, allDestinations, tripCardsGrid)
      _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCurrentYrSpending(traveler, allDestinations.destinations)
    })
    .catch(err => estimateDOMPointer.innerHTML = err.message)
}

function formatDatePost(dateInput) {
  const dateParts = dateInput.split('-')
  return dateParts.join('/')
}

function showEstimate() {
  event.preventDefault();
  estimateDOMPointer.innerHTML = '';
  const getDestination = allDestinations.destinations.find(destination => destination.id === parseInt(destinationSelect.value));
  const costPerPerson = (getDestination.estimatedLodgingCostPerDay * tripDurationSelect.value) + getDestination.estimatedFlightCostPerPerson;
  const estimatedTotalCost = costPerPerson * numTravelersSelect.value;
  const totalPlusFees = parseInt(estimatedTotalCost * 1.1).toFixed(2);
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayEstimateCost(estimateDOMPointer, costPerPerson, estimatedTotalCost, totalPlusFees);
  document.querySelector('.book-trip-btn').addEventListener('click', bookTripConfirmation);
}


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.myTrips = [];
  }

  calcPrevYearSpending(destinationData) {
    return this.myTrips.reduce((total, trip) => {
      let curYear = new Date().getFullYear();
      let tripYear = parseInt(trip.date.split('/')[0]);
      let getDestination = destinationData.find(destination => destination.id === trip.destinationID);
      if (tripYear === curYear - 1) {
        total += trip.getTotalWithAgentFee(getDestination)
      }
      return total;
    }, 0)
  }

  calcCurrentYearSpending(destinationData) {
    return this.myTrips.reduce((total, trip) => {
      let curYear = new Date().getFullYear();
      let tripYear = parseInt(trip.date.split('/')[0]);
      let getDestination = destinationData.find(destination => destination.id === trip.destinationID);
      if (tripYear === curYear) {
        total += trip.getTotalWithAgentFee(getDestination)
      }
      return total;
    }, 0)
  }

  getPendingTrips() {
    let pending = this.myTrips.filter(trip => trip.status === 'pending');
    if (pending.length === 0) {
      return `You currently don't have any pending trips!`
    } else {
      return pending;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor({ id, userID, destinationID, travelers, date, duration, status, suggestedActivities }) {
    this.id = id;
    this.userID = userID;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
  }

  getDestinationID() {
    return this.destinationID;
  }

  getUserID() {
    return this.userID;
  }

  getCostPerPerson(destination) {
    const lodgingCostPP = destination.estimatedLodgingCostPerDay * this.duration;
    const flightCostPP = destination.estimatedFlightCostPerPerson;
    return lodgingCostPP + flightCostPP; 
  }

  getTotalCostTrip(destination) {
    return this.getCostPerPerson(destination) * this.travelers;
  }

  getTotalWithAgentFee(destination) {
    let preFees = this.getTotalCostTrip(destination);
    return parseInt((preFees += preFees * 0.1).toFixed(2));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ }),

/***/ "./src/trips-repo.js":
/*!***************************!*\
  !*** ./src/trips-repo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ "./src/trip.js");


class TripRepo {
  constructor(data) {
    this.allTrips = data.trips.map(trip => new _trip__WEBPACK_IMPORTED_MODULE_0__["default"](trip))
  }

  findTripsByID(traveler) {
    return this.allTrips.filter(trip => {
      if (traveler.id === trip.userID) {
        return traveler.myTrips.push(trip);
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TripRepo);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZXRjaC1yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy90cmlwcy1yZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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STtBQUNyQyxNQUFNLG9EQUFVO0FBQ2hCLE1BQU0sb0RBQVU7QUFDaEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFDeEI7QUFBQTtBQUNBLGVBQWUsb0ZBQW9GO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BDcEI7QUFBQTtBQUF5Qjs7QUFFekI7QUFDQTtBQUNBLCtDQUErQyw2Q0FBSTtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWUsdUVBQVEsRUFBQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1JTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5sb2dpbi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmxvZ2luLXNlY3Rpb24gLmxvZ2luLWhlYWRlciB7XFxuICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIGNvbG9yOiAjMTQ2ZWZmO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgIC5sb2dpbi1zZWN0aW9uIC5sb2dpbi1pbnB1dCxcXG4gICAgLmxvZ2luLXNlY3Rpb24gLmxvZ2luLWZvcm0tc3VibWl0IHtcXG4gICAgICBtYXJnaW46IDIwcHg7XFxuICAgICAgd2lkdGg6IDUwJTsgfVxcbiAgICAubG9naW4tc2VjdGlvbiAubG9naW4tZm9ybS1zdWJtaXQge1xcbiAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41czsgfVxcbiAgICAgIC5sb2dpbi1zZWN0aW9uIC5sb2dpbi1mb3JtLXN1Ym1pdDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2ZWZmO1xcbiAgICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICBoZWFkZXIsXFxuICBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2ZWZmO1xcbiAgICBoZWlnaHQ6IDE1JTsgfVxcbiAgICBoZWFkZXIgaDEsXFxuICAgIGZvb3RlciBoMSB7XFxuICAgICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICAgIGhlYWRlciBuYXYsXFxuICAgIGZvb3RlciBuYXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgaGVhZGVyIC53ZWxjb21lLWxvZ28sXFxuICAgIGZvb3RlciAud2VsY29tZS1sb2dvIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gICAgbWFpbiBidXR0b24ge1xcbiAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41czsgfVxcbiAgICAgIG1haW4gYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDZlZmY7XFxuICAgICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgbWFpbiBoMyxcXG4gICAgbWFpbiAuYm9vay10aXRsZSB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIG1haW4gLmJvb2sge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgbWFpbiAuYm9vay1pbnB1dHMge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuICAgIG1haW4gLmRlc3RpbmF0aW9uLWlucHV0LFxcbiAgICBtYWluIC50cmF2ZWwtZGF0ZSxcXG4gICAgbWFpbiAudHJpcC1kdXJhdGlvbixcXG4gICAgbWFpbiAubnVtYmVyLXRyYXZlbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnN0YXRzLWJvb2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIG1hcmdpbjogMTVweDsgfVxcbiAgICAuc3RhdHMtYm9vayAudXNlci1zdGF0cyxcXG4gICAgLnN0YXRzLWJvb2sgLmJvb2stdHJpcCB7XFxuICAgICAgYm9yZGVyOiAxNXB4IHNvbGlkIGdyZXk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5zdGF0cy1ib29rIC5ib29rLXRyaXAge1xcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cXG4gIGltZyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDE2MHB4OyB9XFxuICAucGFzdC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjMTQ2ZWZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlOyB9XFxuICAuY2FyZHMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAuY2FyZHMtd3JhcHBlciAuZGVzdGluYXRpb24tY2FyZCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBib3JkZXI6IDEwcHggc29saWQgZ3JleTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgIG1hcmdpbjogMTVweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4gLmRlc3RpbmF0aW9uLWlucHV0LFxcbiAgbWFpbiAudHJhdmVsLWRhdGUsXFxuICBtYWluIC50cmlwLWR1cmF0aW9uLFxcbiAgbWFpbiAubnVtYmVyLXRyYXZlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYXJkcy13cmFwcGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XFxuICAuYnV0dG9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgLmxvZ2luLXNlY3Rpb24gLmxvZ2luLWlucHV0LFxcbiAgLmxvZ2luLXNlY3Rpb24gLmxvZ2luLWZvcm0tc3VibWl0IHtcXG4gICAgd2lkdGg6IDMwJTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAubG9naW4tc2VjdGlvbiAubG9naW4taW5wdXQsXFxuICAubG9naW4tc2VjdGlvbiAubG9naW4tZm9ybS1zdWJtaXQge1xcbiAgICB3aWR0aDogMjAlOyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDM1cHg7IH1cXG4gIC5jYXJkcy13cmFwcGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgfVxcbiAgLnN0YXRzLWJvb2sge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tZWRpYS1xdWVyaWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FDQUE7RUFFRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0lBSnJCO01Da0JBLDRCQUE0QjtNQUM1QixnQkFBZ0I7TUFDaEIsY0ZyQnlCO01Fc0J6QiwwQkFBMEIsRUFBQTtJRHJCMUI7O01BWUksWUFBWTtNQUNaLFVBQVUsRUFBQTtJQWJkO01DSUEsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLHlCRlJ1QjtNRVN2QixnQ0FBZ0MsRUFBQTtNQUVoQztRQUNFLHlCRmJ1QjtRRWN2QixZQUFZLEVBQUE7RURRZDs7SUFFRSx5QkR4QnVCO0lDeUJ2QixXQUFXLEVBQUE7SUFIYjs7TUFNSSxlQUFlLEVBQUE7SUFObkI7O01DdEJBLGFBQWE7TUFDYix1QkFBdUIsRUFBQTtJRHFCdkI7O01BY0ksU0FBUztNQUNULGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFJbEM7SUMzQ0EsYUFBYTtJQUNiLHVCQUF1QixFQUFBO0VEOEN2QjtJQUNFLHlCRC9DcUI7SUNnRHJCLFlBQVksRUFBQTtJQUZkO01DMUNBLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQix5QkZSdUI7TUVTdkIsZ0NBQWdDLEVBQUE7TUFFaEM7UUFDRSx5QkZidUI7UUVjdkIsWUFBWSxFQUFBO0lEaUNkOztNQVVJLFNBQVMsRUFBQTtJQVZiO01DL0NBLGFBQWE7TUFDYix1QkFBdUI7TUQ2RG5CLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsYUFBYSxFQUFBO0lBakJqQjtNQXFCSSxhQUFhO01BQ2IscUJBQXFCLEVBQUE7SUF0QnpCOzs7O01DL0NBLGFBQWE7TUFDYix1QkFBdUI7TUQ0RW5CLGVBQWU7TUFDZixzQkFBc0IsRUFBQTtFQUkxQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7SUFMZDs7TUN4REEsdUJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixhQUFhO01BL0JiLGFBQWE7TUFDYix1QkFBdUIsRUFBQTtJRGlGdkI7TUFjSSxnQkFBZ0IsRUFBQTtFQUlwQjtJQUNFLFdBQVc7SUFDWCxhQUFhLEVBQUE7RUFHZjtJQ3RGQSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGNGckJ5QjtJRXNCekIsMEJBQTBCO0lBdEIxQixhQUFhO0lBQ2IsdUJBQXVCO0lEMkdyQixvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCLEVBQUE7SUFIekI7TUMvR0EsYUFBYTtNQUNiLHVCQUF1QjtNQXlCdkIsdUJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixhQUFhO01Ed0ZULFlBQVksRUFBQSxFQUNiOztBQUtMO0VBRUU7Ozs7SUMvSEEsYUFBYTtJQUNiLHVCQUF1QjtJRG9JbkIsZUFBZTtJQUNmLHNCQUFzQixFQUFBO0VBSTFCO0lBQ0UsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCLEVBQUE7RUFHL0I7O0lBR0ksVUFBVSxFQUFBLEVBQ1g7O0FBR0w7RUFFRTs7SUFHSSxVQUFVLEVBQUE7RUFJZDtJQUVJLGVBQWUsRUFBQTtFQUluQjtJQUNFLGtDQUFrQyxFQUFBO0VBR3BDO0lBQ0UsbUJBQW1CLEVBQUEsRUFDcEI7O0FFMUtIO0VBQ0Usd0JBQXdCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ09MT1JTICovXFxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMTQ2ZWZmO1xcbiRtYWluLWJhY2tncm91bmQ6ICNlM2UzZTM7XFxuXCIsXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLmxvZ2luLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmxvZ2luLWhlYWRlciB7XFxuICAgICAgQGluY2x1ZGUgaGVhZGxpbmUtZm9udDtcXG4gICAgfVxcblxcbiAgICAubG9naW4taW5wdXQsXFxuICAgIC5sb2dpbi1mb3JtLXN1Ym1pdCB7XFxuICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgLmxvZ2luLWZvcm0tc3VibWl0IHtcXG4gICAgICBAaW5jbHVkZSBidXR0b24tZm9ybWF0O1xcbiAgICB9XFxuICB9XFxuXFxuICBoZWFkZXIsXFxuICBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJhY2tncm91bmQ7XFxuICAgIGhlaWdodDogMTUlO1xcblxcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLndlbGNvbWUtbG9nbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQ7XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBAaW5jbHVkZSBidXR0b24tZm9ybWF0O1xcbiAgICB9XFxuXFxuICAgIGgzLFxcbiAgICAuYm9vay10aXRsZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIC5ib29rIHtcXG4gICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcblxcbiAgICAuYm9vay1pbnB1dHMge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kZXN0aW5hdGlvbi1pbnB1dCxcXG4gICAgLnRyYXZlbC1kYXRlLFxcbiAgICAudHJpcC1kdXJhdGlvbixcXG4gICAgLm51bWJlci10cmF2ZWwge1xcbiAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICB9XFxuXFxuICAuc3RhdHMtYm9vayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcblxcbiAgICAudXNlci1zdGF0cyxcXG4gICAgLmJvb2stdHJpcCB7XFxuICAgICAgQGluY2x1ZGUgY2FyZC1zdHlsaW5nKDE1cHgpO1xcbiAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5ib29rLXRyaXAge1xcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgfVxcblxcbiAgLnBhc3QtdGl0bGUge1xcbiAgICBAaW5jbHVkZSBoZWFkbGluZS1mb250O1xcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICB9XFxuXFxuICAuY2FyZHMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLmRlc3RpbmF0aW9uLWNhcmQge1xcbiAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcbiAgICAgIEBpbmNsdWRlIGNhcmQtc3R5bGluZygxMHB4KTtcXG4gICAgICBtYXJnaW46IDE1cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIG1haW4ge1xcbiAgICAuZGVzdGluYXRpb24taW5wdXQsXFxuICAgIC50cmF2ZWwtZGF0ZSxcXG4gICAgLnRyaXAtZHVyYXRpb24sXFxuICAgIC5udW1iZXItdHJhdmVsIHtcXG4gICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNhcmRzLXdyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAuYnV0dG9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5sb2dpbi1zZWN0aW9uIHtcXG4gICAgLmxvZ2luLWlucHV0LFxcbiAgICAubG9naW4tZm9ybS1zdWJtaXQge1xcbiAgICAgIHdpZHRoOiAzMCU7XFxuICAgIH1cXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAubG9naW4tc2VjdGlvbiB7XFxuICAgIC5sb2dpbi1pbnB1dCxcXG4gICAgLmxvZ2luLWZvcm0tc3VibWl0IHtcXG4gICAgICB3aWR0aDogMjAlO1xcbiAgICB9XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2FyZHMtd3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICB9XFxuXFxuICAuc3RhdHMtYm9vayB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblwiLFwiQG1peGluIGZsZXgtY2VudGVyKCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gYnV0dG9uLWZvcm1hdCgpIHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iYWNrZ3JvdW5kO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iYWNrZ3JvdW5kO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbkBtaXhpbiBoZWFkbGluZS1mb250KCkge1xcbiAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogJGhlYWRlci1iYWNrZ3JvdW5kO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtaXhpbiBjYXJkLXN0eWxpbmcoJHRoaWNrbmVzcykge1xcbiAgYm9yZGVyOiAkdGhpY2tuZXNzIHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblwiLFwiQGltcG9ydCAnX3ZhcmlhYmxlcy5zY3NzJztcXG5AaW1wb3J0ICdfbWl4aW5zLnNjc3MnO1xcbkBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xcbkBpbXBvcnQgJ19tZWRpYS1xdWVyaWVzLnNjc3MnO1xcblxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgZ3JlZXRVc2VyKHRyYXZlbGVyKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZScpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFdlbGNvbWUgJHt0cmF2ZWxlci5uYW1lfSFgXG4gIH0sXG5cbiAgZGlzcGxheVByZXZZclNwZW5kaW5nKHRyYXZlbGVyLCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cy15ZWFyJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnWW91IHNwZW50ICQnICsgdHJhdmVsZXIuY2FsY1ByZXZZZWFyU3BlbmRpbmcoYWxsRGVzdGluYXRpb25zKSArICcgbGFzdCB5ZWFyIG9uIHRyaXBzLCB3aGF0IGEgeWVhciEnXG4gIH0sXG5cbiAgZGlzcGxheUN1cnJlbnRZclNwZW5kaW5nKHRyYXZlbGVyLCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXllYXInKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICdZb3VcXCd2ZSBzcGVudCAkJyArIHRyYXZlbGVyLmNhbGNDdXJyZW50WWVhclNwZW5kaW5nKGFsbERlc3RpbmF0aW9ucykgKyAnIHNvIGZhciB0aGlzIHllYXIgb24gdHJpcHMsIGtlZXAgaXQgZ29pbmchJ1xuICB9LFxuXG4gIGFkZFRyaXBDYXJkVG9Eb20obXlUcmlwcywgYWxsRGVzdGluYXRpb25zLCBlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gbXlUcmlwcy5tYXAodHJpcCA9PiB7XG4gICAgICByZXR1cm4gYWxsRGVzdGluYXRpb25zLmRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQpIHtcbiAgICAgICAgICBsZXQgY2FyZEh0bWwgPSBgXG4gICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiZGVzdGluYXRpb24tY2FyZFwiIGlkPSR7ZGVzdGluYXRpb24uaWR9PlxuICAgICAgICAgICAgICAgIDxoMz4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+JHt0cmlwLmRhdGV9IGZvciAke3RyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgICAgICAgPHA+TnVtYmVyIG9mIHBhc3NlbmdlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRyaXAgdG90YWwgdy8gMTAlIGFnZW50IGZlZTogJCR7dHJpcC5nZXRUb3RhbFdpdGhBZ2VudEZlZShkZXN0aW5hdGlvbil9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRyaXAgU3RhdHVzOiAke3RyaXAuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1waG90by1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7ZGVzdGluYXRpb24uaW1hZ2V9IGNsYXNzPVwiY2FyZC1waG90by1wcmV2aWV3XCIgYWx0PVwiJHtkZXN0aW5hdGlvbi5hbHR9XCIgaGVpZ2h0PVwiMzAwcHhcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPmBcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGNhcmRIdG1sKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIGdldERlc3RpbmF0aW9uTmFtZXMoZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpO1xuICAgIGRlc3RpbmF0aW9uU2VsZWN0LmlubmVySFRNTCA9XG4gICAgYCR7ZGVzdGluYXRpb25zLm1hcChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke2Rlc3RpbmF0aW9uLmlkfVwiPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9vcHRpb24+YFxuICAgIH0pfWBcbiAgfSxcblxuICBkaXNwbGF5RXN0aW1hdGVDb3N0KGVsZW1lbnQsIGNvc3RQZXJQZXJzb24sIGVzdGltYXRlZFRvdGFsQ29zdCwgdG90YWxQbHVzRmVlcykge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxwIGNsYXNzPVwiZXN0aW1hdGUtcGVyLXBlcnNvblwiPkNvc3QgUGVyIFBlcnNvbjogJCR7Y29zdFBlclBlcnNvbn08L3A+XG4gICAgICA8cCBjbGFzcz1cImVzdGltYXRlLWFsbFwiPlRvdGFsIEFsbCBUcmF2ZWxlcnM6ICQke2VzdGltYXRlZFRvdGFsQ29zdH08L3A+XG4gICAgICA8cCBjbGFzcz1cImVzdGltYXRlLWZlZXNcIj5Ub3RhbCArIEFnZW50IEZlZXM6ICQke3RvdGFsUGx1c0ZlZXN9PC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stdHJpcC1idG5cIj5Cb29rIHRoaXMgdHJpcCE8L2J1dHRvbj5gXG4gIH0sXG5cbiAgZGlzcGxheUJvb2tDb25maXJtYXRpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGJvb2sgdGhpcyB0cmlwPzwvcD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJ5ZXMtYm9va1wiPlllcywgSSdtIHN1cmUhPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibm8tYm9va1wiPk5vdCByaWdodCBub3c8L2J1dHRvbj5gXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjb25zdCBsb2FkQVBJcyA9IChpZCkgPT4ge1xuXG4gIGNvbnN0IGdldFNpbmdsZVRyYXZlbGVyID0gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7aWR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiBjaGVja0ZvckVycm9yKHJlc3BvbnNlKSlcbiAgICAudGhlbihzaW5nbGVUcmF2ZWxlckRhdGEgPT4gc2luZ2xlVHJhdmVsZXJEYXRhKVxuXG4gIGNvbnN0IGdldEFsbFRyaXBzID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IGNoZWNrRm9yRXJyb3IocmVzcG9uc2UpKVxuICAgIC50aGVuKHRyaXBzRGF0YSA9PiB0cmlwc0RhdGEpXG5cbiAgY29uc3QgZ2V0QWxsRGVzdGluYXRpb25zID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAudGhlbihyZXNwb25zZSA9PiBjaGVja0ZvckVycm9yKHJlc3BvbnNlKSlcbiAgICAudGhlbihkZXN0aW5hdGlvbnNEYXRhID0+IGRlc3RpbmF0aW9uc0RhdGEpXG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKFtnZXRTaW5nbGVUcmF2ZWxlciwgZ2V0QWxsVHJpcHMsIGdldEFsbERlc3RpbmF0aW9uc10pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBsZXQgYWxsRGF0YSA9IHt9O1xuICAgICAgYWxsRGF0YS5nZXRTaW5nbGVUcmF2ZWxlciA9IGRhdGFbMF07XG4gICAgICBhbGxEYXRhLmdldEFsbFRyaXBzID0gZGF0YVsxXTtcbiAgICAgIGFsbERhdGEuZ2V0QWxsRGVzdGluYXRpb25zID0gZGF0YVsyXTtcbiAgICAgIHJldHVybiBhbGxEYXRhO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBlcnJvck1zZ1BvaW50ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGBcbiAgICAgIDxoMSBjbGFzcz1cImVycm9yLW1zZ1wiPlNvbWV0aGluZyBpc24ndCByaWdodCwgcGxlYXNlIHRyeSBhZ2FpbiE8L2gxPlxuICAgICAgPHA+RVJST1I6ICR7ZXJyLm1lc3NhZ2V9PC9wPmApXG4gICAgKVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckVycm9yKHJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JNc2dQb2ludGVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgXG4gICAgICA8aDEgY2xhc3M9XCJlcnJvci1tc2dcIj5Tb21ldGhpbmcgaXNuJ3QgcmlnaHQsIHBsZWFzZSB0cnkgYWdhaW4hPC9oMT5gKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkQVBJcztcbiIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCBsb2FkQVBJcyBmcm9tICcuL2ZldGNoLXJlcXVlc3RzJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vdHJpcCc7XG5pbXBvcnQgVHJpcFJlcG8gZnJvbSAnLi90cmlwcy1yZXBvJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tLXVwZGF0ZXMnO1xuXG5sZXQgdHJhdmVsZXIsIGFsbFRyaXBzLCBhbGxEZXN0aW5hdGlvbnM7XG5cbmNvbnN0IHRyaXBDYXJkc0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtd3JhcHBlcicpO1xuY29uc3QgZGVzdGluYXRpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpO1xuY29uc3QgZGVwYXJ0RGF5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlcGFydCcpO1xuY29uc3QgdHJpcER1cmF0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1cmF0aW9uJyk7XG5jb25zdCBudW1UcmF2ZWxlcnNTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtVHJhdmVsZXJzJyk7XG5jb25zdCBlc3RpbWF0ZVRyaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXN0aW1hdGUtdHJpcCcpO1xuY29uc3QgZXN0aW1hdGVET01Qb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktZXN0aW1hdGVzJyk7XG5jb25zdCBsb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtLXN1Ym1pdCcpO1xuY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZS1maWVsZCcpO1xuY29uc3QgZXJyb3JNc2dQb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLWJvb2snKTtcblxuXG5lc3RpbWF0ZVRyaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RXN0aW1hdGUpO1xubG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xvZ2luKTtcblxuXG5mdW5jdGlvbiBjaGVja0xvZ2luKCkge1xuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWZpZWxkJyk7XG4gIGNvbnN0IGxvZ2luRm9ybVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tc2VjdGlvbicpO1xuICBjb25zdCB1c2VyRGFzaGJvYXJkV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWRhc2hib2FyZCcpO1xuICBjb25zdCB1c2VySUQgPSBnZXRWYWxpZExvZ2luSUQoKTtcbiAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICd0cmF2ZWwyMDIwJyAmJiB1c2VySUQpIHtcbiAgICBnZXRVc2VyKHVzZXJJRCk7XG4gICAgbG9naW5Gb3JtV3JhcC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB1c2VyRGFzaGJvYXJkV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsb2dpbkVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWVycm9yLW1zZycpXG4gICAgbG9naW5FcnJvck1zZy5pbm5lckhUTUwgPSAnSW52YWxpZCB1c2VybmFtZS9wYXNzd29yZCwgcGxlYXNlIHRyeSBhZ2FpbiEnXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsaWRMb2dpbklEKCkge1xuICBsZXQgdXNlcklkID0gdXNlck5hbWVJbnB1dC52YWx1ZS5zbGljZSg4KTtcbiAgaWYgKHVzZXJJZCA+IDAgJiYgdXNlcklkIDw9IDUwICYmIHVzZXJOYW1lSW5wdXQudmFsdWUuaW5jbHVkZXMoJ3RyYXZlbGVyJykpIHtcbiAgICByZXR1cm4gdXNlcklkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVc2VyKHVzZXJJRCkge1xuICBsb2FkQVBJcyh1c2VySUQpXG4gICAgLnRoZW4oYWxsRGF0YSA9PiB7XG4gICAgICB0cmF2ZWxlciA9IG5ldyBUcmF2ZWxlcihhbGxEYXRhLmdldFNpbmdsZVRyYXZlbGVyKTtcbiAgICAgIGFsbFRyaXBzID0gbmV3IFRyaXBSZXBvKGFsbERhdGEuZ2V0QWxsVHJpcHMpO1xuICAgICAgYWxsRGVzdGluYXRpb25zID0gYWxsRGF0YS5nZXRBbGxEZXN0aW5hdGlvbnM7XG4gICAgICBhbGxUcmlwcy5maW5kVHJpcHNCeUlEKHRyYXZlbGVyKTtcbiAgICAgIGRpc3BsYXlTdGFydERPTSgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGFydERPTSAoKSB7XG4gIGRvbVVwZGF0ZXMuZ3JlZXRVc2VyKHRyYXZlbGVyKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5UHJldllyU3BlbmRpbmcodHJhdmVsZXIsIGFsbERlc3RpbmF0aW9ucy5kZXN0aW5hdGlvbnMpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlDdXJyZW50WXJTcGVuZGluZyh0cmF2ZWxlciwgYWxsRGVzdGluYXRpb25zLmRlc3RpbmF0aW9ucylcbiAgZG9tVXBkYXRlcy5hZGRUcmlwQ2FyZFRvRG9tKHRyYXZlbGVyLm15VHJpcHMsIGFsbERlc3RpbmF0aW9ucywgdHJpcENhcmRzR3JpZClcbiAgZG9tVXBkYXRlcy5nZXREZXN0aW5hdGlvbk5hbWVzKGFsbERlc3RpbmF0aW9ucy5kZXN0aW5hdGlvbnMpO1xuICBmb3JtYXREYXRlQ2FsZW5kYXIoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZUNhbGVuZGFyKCkge1xuICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZSgpO1xuICBsZXQgbWluRGF0ZSA9IGRhdGUxLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgcmV0dXJuIGRlcGFydERheVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ21pbicsIG1pbkRhdGUpO1xufVxuXG5mdW5jdGlvbiBib29rVHJpcENvbmZpcm1hdGlvbigpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Qm9va0NvbmZpcm1hdGlvbihlc3RpbWF0ZURPTVBvaW50ZXIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVzLWJvb2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvc3RUcmlwKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tYm9vaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXN0aW1hdGVET01Qb2ludGVyLmlubmVySFRNTCA9ICcnKTtcbn1cblxuZnVuY3Rpb24gcG9zdFRyaXAoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVzdGltYXRlRE9NUG9pbnRlci5pbm5lckhUTUwgPSAnJztcbiAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImlkXCI6IGFsbFRyaXBzLmFsbFRyaXBzLmxlbmd0aCArIDEsXG4gICAgICBcInVzZXJJRFwiOiB0cmF2ZWxlci5pZCxcbiAgICAgIFwiZGVzdGluYXRpb25JRFwiOiBwYXJzZUludChkZXN0aW5hdGlvblNlbGVjdC52YWx1ZSksXG4gICAgICBcInRyYXZlbGVyc1wiOiBudW1UcmF2ZWxlcnNTZWxlY3QudmFsdWUsXG4gICAgICBcImRhdGVcIjogZm9ybWF0RGF0ZVBvc3QoZGVwYXJ0RGF5U2VsZWN0LnZhbHVlKSxcbiAgICAgIFwiZHVyYXRpb25cIjogdHJpcER1cmF0aW9uU2VsZWN0LnZhbHVlLFxuICAgICAgXCJzdGF0dXNcIjogJ3BlbmRpbmcnLFxuICAgICAgXCJzdWdnZXN0ZWRBY3Rpdml0aWVzXCI6IFtdXG4gICAgfSksXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgdHJhdmVsZXIubXlUcmlwcy5wdXNoKG5ldyBUcmlwKGRhdGEubmV3VHJpcCkpXG4gICAgICBhbGxUcmlwcy5hbGxUcmlwcy5wdXNoKG5ldyBUcmlwKGRhdGEubmV3VHJpcCkpXG4gICAgICBkb21VcGRhdGVzLmFkZFRyaXBDYXJkVG9Eb20odHJhdmVsZXIubXlUcmlwcywgYWxsRGVzdGluYXRpb25zLCB0cmlwQ2FyZHNHcmlkKVxuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5Q3VycmVudFlyU3BlbmRpbmcodHJhdmVsZXIsIGFsbERlc3RpbmF0aW9ucy5kZXN0aW5hdGlvbnMpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGVzdGltYXRlRE9NUG9pbnRlci5pbm5lckhUTUwgPSBlcnIubWVzc2FnZSlcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZVBvc3QoZGF0ZUlucHV0KSB7XG4gIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGVJbnB1dC5zcGxpdCgnLScpXG4gIHJldHVybiBkYXRlUGFydHMuam9pbignLycpXG59XG5cbmZ1bmN0aW9uIHNob3dFc3RpbWF0ZSgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXN0aW1hdGVET01Qb2ludGVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBnZXREZXN0aW5hdGlvbiA9IGFsbERlc3RpbmF0aW9ucy5kZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gcGFyc2VJbnQoZGVzdGluYXRpb25TZWxlY3QudmFsdWUpKTtcbiAgY29uc3QgY29zdFBlclBlcnNvbiA9IChnZXREZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXBEdXJhdGlvblNlbGVjdC52YWx1ZSkgKyBnZXREZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICBjb25zdCBlc3RpbWF0ZWRUb3RhbENvc3QgPSBjb3N0UGVyUGVyc29uICogbnVtVHJhdmVsZXJzU2VsZWN0LnZhbHVlO1xuICBjb25zdCB0b3RhbFBsdXNGZWVzID0gcGFyc2VJbnQoZXN0aW1hdGVkVG90YWxDb3N0ICogMS4xKS50b0ZpeGVkKDIpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlFc3RpbWF0ZUNvc3QoZXN0aW1hdGVET01Qb2ludGVyLCBjb3N0UGVyUGVyc29uLCBlc3RpbWF0ZWRUb3RhbENvc3QsIHRvdGFsUGx1c0ZlZXMpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay10cmlwLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9va1RyaXBDb25maXJtYXRpb24pO1xufVxuIiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gZGF0YS50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy5teVRyaXBzID0gW107XG4gIH1cblxuICBjYWxjUHJldlllYXJTcGVuZGluZyhkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5teVRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGxldCBjdXJZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgbGV0IHRyaXBZZWFyID0gcGFyc2VJbnQodHJpcC5kYXRlLnNwbGl0KCcvJylbMF0pO1xuICAgICAgbGV0IGdldERlc3RpbmF0aW9uID0gZGVzdGluYXRpb25EYXRhLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCk7XG4gICAgICBpZiAodHJpcFllYXIgPT09IGN1clllYXIgLSAxKSB7XG4gICAgICAgIHRvdGFsICs9IHRyaXAuZ2V0VG90YWxXaXRoQWdlbnRGZWUoZ2V0RGVzdGluYXRpb24pXG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMClcbiAgfVxuXG4gIGNhbGNDdXJyZW50WWVhclNwZW5kaW5nKGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHJldHVybiB0aGlzLm15VHJpcHMucmVkdWNlKCh0b3RhbCwgdHJpcCkgPT4ge1xuICAgICAgbGV0IGN1clllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICBsZXQgdHJpcFllYXIgPSBwYXJzZUludCh0cmlwLmRhdGUuc3BsaXQoJy8nKVswXSk7XG4gICAgICBsZXQgZ2V0RGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbkRhdGEuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKTtcbiAgICAgIGlmICh0cmlwWWVhciA9PT0gY3VyWWVhcikge1xuICAgICAgICB0b3RhbCArPSB0cmlwLmdldFRvdGFsV2l0aEFnZW50RmVlKGdldERlc3RpbmF0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIDApXG4gIH1cblxuICBnZXRQZW5kaW5nVHJpcHMoKSB7XG4gICAgbGV0IHBlbmRpbmcgPSB0aGlzLm15VHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdwZW5kaW5nJyk7XG4gICAgaWYgKHBlbmRpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYFlvdSBjdXJyZW50bHkgZG9uJ3QgaGF2ZSBhbnkgcGVuZGluZyB0cmlwcyFgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjtcbiIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih7IGlkLCB1c2VySUQsIGRlc3RpbmF0aW9uSUQsIHRyYXZlbGVycywgZGF0ZSwgZHVyYXRpb24sIHN0YXR1cywgc3VnZ2VzdGVkQWN0aXZpdGllcyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IGRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmF2ZWxlcnM7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gc3VnZ2VzdGVkQWN0aXZpdGllcztcbiAgfVxuXG4gIGdldERlc3RpbmF0aW9uSUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzdGluYXRpb25JRDtcbiAgfVxuXG4gIGdldFVzZXJJRCgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySUQ7XG4gIH1cblxuICBnZXRDb3N0UGVyUGVyc29uKGRlc3RpbmF0aW9uKSB7XG4gICAgY29uc3QgbG9kZ2luZ0Nvc3RQUCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBmbGlnaHRDb3N0UFAgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICAgIHJldHVybiBsb2RnaW5nQ29zdFBQICsgZmxpZ2h0Q29zdFBQOyBcbiAgfVxuXG4gIGdldFRvdGFsQ29zdFRyaXAoZGVzdGluYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3N0UGVyUGVyc29uKGRlc3RpbmF0aW9uKSAqIHRoaXMudHJhdmVsZXJzO1xuICB9XG5cbiAgZ2V0VG90YWxXaXRoQWdlbnRGZWUoZGVzdGluYXRpb24pIHtcbiAgICBsZXQgcHJlRmVlcyA9IHRoaXMuZ2V0VG90YWxDb3N0VHJpcChkZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIHBhcnNlSW50KChwcmVGZWVzICs9IHByZUZlZXMgKiAwLjEpLnRvRml4ZWQoMikpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7XG4iLCJpbXBvcnQgVHJpcCBmcm9tICcuL3RyaXAnXG5cbmNsYXNzIFRyaXBSZXBvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuYWxsVHJpcHMgPSBkYXRhLnRyaXBzLm1hcCh0cmlwID0+IG5ldyBUcmlwKHRyaXApKVxuICB9XG5cbiAgZmluZFRyaXBzQnlJRCh0cmF2ZWxlcikge1xuICAgIHJldHVybiB0aGlzLmFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHtcbiAgICAgIGlmICh0cmF2ZWxlci5pZCA9PT0gdHJpcC51c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRyYXZlbGVyLm15VHJpcHMucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBSZXBvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==