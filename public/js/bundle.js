/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/sub.ts":
/*!***********************!*\
  !*** ./src/ts/sub.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hello = void 0;
function hello() {
    console.log("TypeScript import成功");
}
exports.hello = hello;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var sub_1 = __webpack_require__(/*! ./ts/sub */ "./src/ts/sub.ts");
//CSSからSCSSに変更
//import "./css/style.css";
__webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
console.log("TypeScript 変換成功");
(0, sub_1.hello)();
window.addEventListener("load", function () {
    console.log("IE11で表示されたらTypeScript Transpile成功");
});

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map