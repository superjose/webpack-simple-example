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

/***/ "./src/alert-box/alert-box.js":
/*!************************************!*\
  !*** ./src/alert-box/alert-box.js ***!
  \************************************/
/*! exports provided: AlertBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertBox\", function() { return AlertBox; });\n// Says Hello to the user when clicked!\r\n\r\nclass AlertBox {\r\n    sayHi() {\r\n        alert(\"Hello 😊\");\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/alert-box/alert-box.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alert_box_alert_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-box/alert-box */ \"./src/alert-box/alert-box.js\");\n/* harmony import */ var _write_text_write_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write-text/write-text */ \"./src/write-text/write-text.js\");\n/* harmony import */ var _write_text_write_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_write_text_write_text__WEBPACK_IMPORTED_MODULE_1__);\n// ES2015 imports. Since it's a class name we can import it through curly\r\n// brackets.\r\n\r\n\r\n\r\n// This also works\r\n// const writeText = require('./write-text/write-text.js');\r\n\r\n// Since it's a class, we need to instantiate it before we can use it.\r\nconst alertUser = new _alert_box_alert_box__WEBPACK_IMPORTED_MODULE_0__[\"AlertBox\"]();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const alertButton = document.getElementById('js-button');\r\n    alertButton.addEventListener('click', alertUser.sayHi);\r\n\r\n    const pTagButton = document.getElementById('js-write-text-button');\r\n    const pTag = document.querySelector('p');\r\n    /**\r\n     * This is another variation. We create an anonymous function (Search more about it online)\r\n     * and we call the function. \r\n     */\r\n    pTagButton.addEventListener('click', () => {\r\n        _write_text_write_text__WEBPACK_IMPORTED_MODULE_1___default()(pTag)\r\n    });\r\n    \r\n    \r\n    \r\n    /**\r\n     * The approach below is cleaner, and it works! I also recommend it over the above method\r\n     * because it allows you to remove the event listener by doing \r\n     * pTagButton.removeEventListener('click', writeText). You can't do this via anonymous functions\r\n     */\r\n    // pTagButton.addEventListener('click', writeText.bind(this, pTag));\r\n    \r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/write-text/write-text.js":
/*!**************************************!*\
  !*** ./src/write-text/write-text.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will write text to a p tag using module.exports style:\r\n\r\n/**\r\n * We pass the actual <p></p> tag by searching it with \r\n * document.querySelector\r\n * @param {} p \r\n */\r\nmodule.exports = (p) => {\r\n    p.innerHTML = 'Hello! From hidden text ';\r\n}\n\n//# sourceURL=webpack:///./src/write-text/write-text.js?");

/***/ })

/******/ });