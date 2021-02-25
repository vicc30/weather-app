/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n*/\n/* Global rules */\n:root {\n  --color-green: #198754;\n  --color-white: #fff;\n  --color-gray-dark: #343a40;\n  --color-primary: #0d6efd;\n  --color-secondary: #6c757d;\n  --color-success: #198754;\n  --color-warning: #ffc107;\n  --color-danger: #dc3545;\n  --color-light: #f8f9fa;\n  --color-dark: #212529;\n  --gradient: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.15),\n    rgba(255, 255, 255, 0)\n  );\n}\n/* General rules */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nbody {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.container {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh3 {\n  margin-top: 0;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n/*margin*/\n.mt-3 {\n  margin-top: 1rem !important;\n}\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n/*Card*/\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: var(--color-white);\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.5rem;\n}\n\nh3.card-title {\n  font-size: 30px;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem;\n  font-size: 1rem;\n}\n\n.card-body img {\n  height: 3rem;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n/*Form*/\n\n.form-label {\n  margin-bottom: 0.5rem;\n}\nlabel {\n  display: inline-block;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--color-dark);\n  background-color: var(--color-white);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--color-secondary);\n}\n\n.btn-primary {\n  color: var(--color-white);\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n/* Table */\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: var(--color-dark);\n  vertical-align: top;\n  border-color: #dee2e6;\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\n.table > thead {\n  vertical-align: bottom;\n}\n\n.table > tbody {\n  vertical-align: inherit;\n}\n\ntbody,\ntd,\nth,\nthead,\ntr {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n.table > :not(:last-child) > :last-child > * {\n  border-bottom-color: currentColor;\n}\n\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  border-bottom-width: 1px;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\n/*Flexbox row col*/\n.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 740px;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;;;;;;;CAQC;AACD,iBAAiB;AACjB;EACE,sBAAsB;EACtB,mBAAmB;EACnB,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB;;;;GAIC;AACH;AACA,kBAAkB;;AAElB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,SAAS;AACT;EACE,2BAA2B;AAC7B;AACA;EACE,8BAA8B;AAChC;AACA,OAAO;;AAEP;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,oCAAoC;EACpC,2BAA2B;EAC3B,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA,OAAO;;AAEP;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;EACpC,4BAA4B;EAC5B,yBAAyB;EACzB,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,wEAAwE;AAC1E;;AAEA;;;;;EAKE,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,sCAAsC;EACtC,kCAAkC;AACpC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;EACf,sBAAsB;EACtB;gEAC8D;AAChE;;AAEA,UAAU;AACV;EACE,WAAW;EACX,mBAAmB;EACnB,wBAAwB;EACxB,mBAAmB;EACnB,qBAAqB;EACrB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;;;EAKE,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;AACF","sourcesContent":["/*\n* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n*/\n/* Global rules */\n:root {\n  --color-green: #198754;\n  --color-white: #fff;\n  --color-gray-dark: #343a40;\n  --color-primary: #0d6efd;\n  --color-secondary: #6c757d;\n  --color-success: #198754;\n  --color-warning: #ffc107;\n  --color-danger: #dc3545;\n  --color-light: #f8f9fa;\n  --color-dark: #212529;\n  --gradient: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.15),\n    rgba(255, 255, 255, 0)\n  );\n}\n/* General rules */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nbody {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.container {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh3 {\n  margin-top: 0;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n/*margin*/\n.mt-3 {\n  margin-top: 1rem !important;\n}\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n/*Card*/\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: var(--color-white);\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.5rem;\n}\n\nh3.card-title {\n  font-size: 30px;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem;\n  font-size: 1rem;\n}\n\n.card-body img {\n  height: 3rem;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n/*Form*/\n\n.form-label {\n  margin-bottom: 0.5rem;\n}\nlabel {\n  display: inline-block;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--color-dark);\n  background-color: var(--color-white);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--color-secondary);\n}\n\n.btn-primary {\n  color: var(--color-white);\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n/* Table */\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: var(--color-dark);\n  vertical-align: top;\n  border-color: #dee2e6;\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\n.table > thead {\n  vertical-align: bottom;\n}\n\n.table > tbody {\n  vertical-align: inherit;\n}\n\ntbody,\ntd,\nth,\nthead,\ntr {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n.table > :not(:last-child) > :last-child > * {\n  border-bottom-color: currentColor;\n}\n\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  border-bottom-width: 1px;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\n/*Flexbox row col*/\n.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 740px;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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
/***/ ((module) => {



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

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");

//Import styles


// Get elements in HTML
let input = document.querySelector('input');
const search = document.getElementById('search');

//Set example first value Mexico City
const defaultCity = 'mexico city';

//Async function to get weather with API
const getWeather = async (city) => {
    let cityName = city;
    const apiKey = "f07139de5168665d6bee4fde3a729a7c";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`, { mode: 'cors' });
        const weatherCity = await response.json();
        console.log(weatherCity);
        renderCity(weatherCity);
    }
    catch {
        console.log("Can't connect with getWeather");
    }
}

//Event listener click for search city
search.addEventListener("click", e => {
    e.preventDefault();
    getWeather(input.value);
});

//To Celsius
const toCelsius = (kTemp) => {
    return Math.round((kTemp - 273.1)*10)/10;
}   

const renderCity = (city) => {
    //set values 
    const feels = toCelsius(city.main.feels_like);
    const humidity = city.main.humidity;
    const temp = toCelsius(city.main.temp);
    const max = toCelsius(city.main.temp_max);
    const min = toCelsius(city.main.temp_min);
    const cityName = city.name;
    const icon = city.weather[0].icon;
    const weatherClass = city.weather[0].main;

    //get html element to render
    const card = document.getElementById('cardCity');

    // Clear UI
    card.innerHTML = "";

    // Render card with values

    card.innerHTML += 
        `
            <div class="card mt-3 ${weatherClass.toLowerCase()}" >
                <div class="card-body">
                    <div class="row">
                        <h3 class="card-title"> ${cityName}
                        <img src=" http://openweathermap.org/img/wn/${icon}@2x.png"/ alt="${weatherClass}">
                        </h3>
                    </div>
                    <div class="row">
                        <div class="col col-12 col-md-4">
                            <p class="card-text"> ${weatherClass}</p>
                            <p class="card-text"><i class="fas fa-thermometer-half"></i> ${temp} °C</p>
                        </div>
                        <div class="col col-12 col-md-8">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Feels Like °C</th>
                                        <th scope="col">Humidity</th>
                                        <th scope="col">Min. Temp. °C</th>
                                        <th scope="col">Max Temp. °C</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${feels} °C</td>
                                        <td>${humidity} %</td>
                                        <td>${min} °C</td>
                                        <td>${max} °C</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
}

getWeather(defaultCity);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0REFBNEQsMEJBQTBCLDJGQUEyRixxQkFBcUIsdUJBQXVCLEdBQUcsaUNBQWlDLDJCQUEyQix3QkFBd0IsK0JBQStCLDZCQUE2QiwrQkFBK0IsNkJBQTZCLDZCQUE2Qiw0QkFBNEIsMkJBQTJCLDBCQUEwQiwrR0FBK0csR0FBRyw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixvQkFBb0IsR0FBRyxVQUFVLG9CQUFvQixxQkFBcUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHNCQUFzQixHQUFHLFFBQVEsc0JBQXNCLEdBQUcsYUFBYSxrQkFBa0IscUJBQXFCLHFCQUFxQixHQUFHLE9BQU8sa0JBQWtCLHdCQUF3QixHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRyxTQUFTLG1DQUFtQyxHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsMEJBQTBCLHlDQUF5QyxnQ0FBZ0MsMkNBQTJDLDJCQUEyQixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsZ0JBQWdCLG1CQUFtQix1QkFBdUIsb0JBQW9CLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLDJCQUEyQixxQkFBcUIsR0FBRyw2QkFBNkIsMEJBQTBCLEdBQUcsU0FBUywwQkFBMEIsR0FBRyxtQkFBbUIsbUJBQW1CLGdCQUFnQiw4QkFBOEIsb0JBQW9CLHFCQUFxQixxQkFBcUIsNkJBQTZCLHlDQUF5QyxpQ0FBaUMsOEJBQThCLDBCQUEwQixxQkFBcUIsMkJBQTJCLDZFQUE2RSxHQUFHLG1EQUFtRCxjQUFjLHlCQUF5Qix1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsa0NBQWtDLEdBQUcsa0JBQWtCLDhCQUE4QiwyQ0FBMkMsdUNBQXVDLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLFVBQVUsMEJBQTBCLHFCQUFxQixxQkFBcUIsdUJBQXVCLDBCQUEwQiwyQkFBMkIsc0JBQXNCLGtDQUFrQyw4QkFBOEIsb0JBQW9CLDJCQUEyQiwrSUFBK0ksR0FBRyx5QkFBeUIsZ0JBQWdCLHdCQUF3Qiw2QkFBNkIsd0JBQXdCLDBCQUEwQix5QkFBeUIsOEJBQThCLEdBQUcsb0JBQW9CLDJCQUEyQixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxrQ0FBa0MsMEJBQTBCLHdCQUF3QixvQkFBb0IsR0FBRyxrREFBa0Qsc0NBQXNDLEdBQUcsb0NBQW9DLDJCQUEyQiw2QkFBNkIsR0FBRyxRQUFRLHdCQUF3QixxQ0FBcUMsR0FBRywrQkFBK0Isa0JBQWtCLG9CQUFvQixHQUFHLGNBQWMsbUJBQW1CLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLG1CQUFtQixnQkFBZ0IsR0FBRyxVQUFVLGlCQUFpQixHQUFHLCtCQUErQixnQkFBZ0IsdUJBQXVCLEtBQUssZUFBZSxxQkFBcUIsNEJBQTRCLEtBQUssR0FBRyxTQUFTLDhGQUE4RixLQUFLLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxLQUFLLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLDJDQUEyQywwQkFBMEIsMkZBQTJGLHFCQUFxQix1QkFBdUIsR0FBRyxpQ0FBaUMsMkJBQTJCLHdCQUF3QiwrQkFBK0IsNkJBQTZCLCtCQUErQiw2QkFBNkIsNkJBQTZCLDRCQUE0QiwyQkFBMkIsMEJBQTBCLCtHQUErRyxHQUFHLDRCQUE0QixjQUFjLGVBQWUsMkJBQTJCLG9CQUFvQixHQUFHLFVBQVUsb0JBQW9CLHFCQUFxQixHQUFHLGdCQUFnQixnQkFBZ0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEdBQUcsUUFBUSxzQkFBc0IsR0FBRyxhQUFhLGtCQUFrQixxQkFBcUIscUJBQXFCLEdBQUcsT0FBTyxrQkFBa0Isd0JBQXdCLEdBQUcsdUJBQXVCLGdDQUFnQyxHQUFHLFNBQVMsbUNBQW1DLEdBQUcscUJBQXFCLHVCQUF1QixrQkFBa0IsMkJBQTJCLGlCQUFpQiwwQkFBMEIseUNBQXlDLGdDQUFnQywyQ0FBMkMsMkJBQTJCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxnQkFBZ0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLDZCQUE2QiwwQkFBMEIsR0FBRyxTQUFTLDBCQUEwQixHQUFHLG1CQUFtQixtQkFBbUIsZ0JBQWdCLDhCQUE4QixvQkFBb0IscUJBQXFCLHFCQUFxQiw2QkFBNkIseUNBQXlDLGlDQUFpQyw4QkFBOEIsMEJBQTBCLHFCQUFxQiwyQkFBMkIsNkVBQTZFLEdBQUcsbURBQW1ELGNBQWMseUJBQXlCLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixrQ0FBa0MsR0FBRyxrQkFBa0IsOEJBQThCLDJDQUEyQyx1Q0FBdUMsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsVUFBVSwwQkFBMEIscUJBQXFCLHFCQUFxQix1QkFBdUIsMEJBQTBCLDJCQUEyQixzQkFBc0Isa0NBQWtDLDhCQUE4QixvQkFBb0IsMkJBQTJCLCtJQUErSSxHQUFHLHlCQUF5QixnQkFBZ0Isd0JBQXdCLDZCQUE2Qix3QkFBd0IsMEJBQTBCLHlCQUF5Qiw4QkFBOEIsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsb0JBQW9CLDRCQUE0QixHQUFHLGtDQUFrQywwQkFBMEIsd0JBQXdCLG9CQUFvQixHQUFHLGtEQUFrRCxzQ0FBc0MsR0FBRyxvQ0FBb0MsMkJBQTJCLDZCQUE2QixHQUFHLFFBQVEsd0JBQXdCLHFDQUFxQyxHQUFHLCtCQUErQixrQkFBa0Isb0JBQW9CLEdBQUcsY0FBYyxtQkFBbUIsZ0JBQWdCLG9CQUFvQixHQUFHLGFBQWEsbUJBQW1CLGdCQUFnQixHQUFHLFVBQVUsaUJBQWlCLEdBQUcsK0JBQStCLGdCQUFnQix1QkFBdUIsS0FBSyxlQUFlLHFCQUFxQiw0QkFBNEIsS0FBSyxHQUFHLHFCQUFxQjtBQUNwbFU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNEY7QUFDNUYsWUFBMEY7O0FBRTFGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSXhCLGlFQUFlLDBGQUFjLE1BQU0sRTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2I7QUFDNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEZBQTBGLFNBQVMsU0FBUyxPQUFPLElBQUksZUFBZTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRDtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHNFQUFzRSxLQUFLLGlCQUFpQixhQUFhO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakUsMkZBQTJGLEtBQUs7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRCw4Q0FBOEMsU0FBUztBQUN2RCw4Q0FBOEMsSUFBSTtBQUNsRCw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4qIEBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vbXktZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL215LWZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKi9cXG4vKiBHbG9iYWwgcnVsZXMgKi9cXG46cm9vdCB7XFxuICAtLWNvbG9yLWdyZWVuOiAjMTk4NzU0O1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItZ3JheS1kYXJrOiAjMzQzYTQwO1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjMGQ2ZWZkO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICM2Yzc1N2Q7XFxuICAtLWNvbG9yLXN1Y2Nlc3M6ICMxOTg3NTQ7XFxuICAtLWNvbG9yLXdhcm5pbmc6ICNmZmMxMDc7XFxuICAtLWNvbG9yLWRhbmdlcjogI2RjMzU0NTtcXG4gIC0tY29sb3ItbGlnaHQ6ICNmOGY5ZmE7XFxuICAtLWNvbG9yLWRhcms6ICMyMTI1Mjk7XFxuICAtLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE4MGRlZyxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgKTtcXG59XFxuLyogR2VuZXJhbCBydWxlcyAqL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmgxLFxcbmgzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyptYXJnaW4qL1xcbi5tdC0zIHtcXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG4vKkNhcmQqL1xcblxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmgzLmNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY2FyZC1ib2R5IHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC1ib2R5IGltZyB7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5jYXJkLXRleHQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKkZvcm0qL1xcblxcbi5mb3JtLWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxubGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5mb3JtLXRleHQge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBUYWJsZSAqL1xcbi50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4udGFibGUgPiB0aGVhZCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4udGFibGUgPiB0Ym9keSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxudGJvZHksXFxudGQsXFxudGgsXFxudGhlYWQsXFxudHIge1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuXFxuLnRhYmxlID4gOm5vdCg6bGFzdC1jaGlsZCkgPiA6bGFzdC1jaGlsZCA+ICoge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4udGFibGUgPiA6bm90KGNhcHRpb24pID4gKiA+ICoge1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxudGgge1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xcbn1cXG5cXG4vKkZsZXhib3ggcm93IGNvbCovXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucm93ID4gKiB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sLTEyIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2wge1xcbiAgZmxleDogMSAwIDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xcbiAgfVxcbiAgLmNvbC1tZC00IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7O0NBUUM7QUFDRCxpQkFBaUI7QUFDakI7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckI7Ozs7R0FJQztBQUNIO0FBQ0Esa0JBQWtCOztBQUVsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQSxPQUFPOztBQUVQO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLE9BQU87O0FBRVA7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix3RUFBd0U7QUFDMUU7O0FBRUE7Ozs7O0VBS0UsU0FBUztFQUNULG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCO2dFQUM4RDtBQUNoRTs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7O0VBS0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiogQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9teS1mb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vbXktZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qL1xcbi8qIEdsb2JhbCBydWxlcyAqL1xcbjpyb290IHtcXG4gIC0tY29sb3ItZ3JlZW46ICMxOTg3NTQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci1ncmF5LWRhcms6ICMzNDNhNDA7XFxuICAtLWNvbG9yLXByaW1hcnk6ICMwZDZlZmQ7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogIzZjNzU3ZDtcXG4gIC0tY29sb3Itc3VjY2VzczogIzE5ODc1NDtcXG4gIC0tY29sb3Itd2FybmluZzogI2ZmYzEwNztcXG4gIC0tY29sb3ItZGFuZ2VyOiAjZGMzNTQ1O1xcbiAgLS1jb2xvci1saWdodDogI2Y4ZjlmYTtcXG4gIC0tY29sb3ItZGFyazogIzIxMjUyOTtcXG4gIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcbn1cXG4vKiBHZW5lcmFsIHJ1bGVzICovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDEsXFxuaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKm1hcmdpbiovXFxuLm10LTMge1xcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG4ubWItMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcbi8qQ2FyZCovXFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDA7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaDMuY2FyZC10aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5jYXJkLWJvZHkge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jYXJkLWJvZHkgaW1nIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi8qRm9ybSovXFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZvcm0tdGV4dCB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG5idXR0b246bm90KDpkaXNhYmxlZCkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIFRhYmxlICovXFxuLnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XFxuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50YWJsZSA+IHRoZWFkIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbi50YWJsZSA+IHRib2R5IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG50Ym9keSxcXG50ZCxcXG50aCxcXG50aGVhZCxcXG50ciB7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4udGFibGUgPiA6bm90KDpsYXN0LWNoaWxkKSA+IDpsYXN0LWNoaWxkID4gKiB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi50YWJsZSA+IDpub3QoY2FwdGlvbikgPiAqID4gKiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG50aCB7XFxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XFxufVxcblxcbi8qRmxleGJveCByb3cgY29sKi9cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5yb3cgPiAqIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2wtMTIge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbCB7XFxuICBmbGV4OiAxIDAgMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzQwcHg7XFxuICB9XFxuICAuY29sLW1kLTQge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy9JbXBvcnQgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbi8vIEdldCBlbGVtZW50cyBpbiBIVE1MXG5sZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuXG4vL1NldCBleGFtcGxlIGZpcnN0IHZhbHVlIE1leGljbyBDaXR5XG5jb25zdCBkZWZhdWx0Q2l0eSA9ICdtZXhpY28gY2l0eSc7XG5cbi8vQXN5bmMgZnVuY3Rpb24gdG8gZ2V0IHdlYXRoZXIgd2l0aCBBUElcbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIGxldCBjaXR5TmFtZSA9IGNpdHk7XG4gICAgY29uc3QgYXBpS2V5ID0gXCJmMDcxMzlkZTUxNjg2NjVkNmJlZTRmZGUzYTcyOWE3Y1wiO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckNpdHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5KTtcbiAgICAgICAgcmVuZGVyQ2l0eSh3ZWF0aGVyQ2l0eSk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW4ndCBjb25uZWN0IHdpdGggZ2V0V2VhdGhlclwiKTtcbiAgICB9XG59XG5cbi8vRXZlbnQgbGlzdGVuZXIgY2xpY2sgZm9yIHNlYXJjaCBjaXR5XG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRXZWF0aGVyKGlucHV0LnZhbHVlKTtcbn0pO1xuXG4vL1RvIENlbHNpdXNcbmNvbnN0IHRvQ2Vsc2l1cyA9IChrVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChrVGVtcCAtIDI3My4xKSoxMCkvMTA7XG59ICAgXG5cbmNvbnN0IHJlbmRlckNpdHkgPSAoY2l0eSkgPT4ge1xuICAgIC8vc2V0IHZhbHVlcyBcbiAgICBjb25zdCBmZWVscyA9IHRvQ2Vsc2l1cyhjaXR5Lm1haW4uZmVlbHNfbGlrZSk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBjaXR5Lm1haW4uaHVtaWRpdHk7XG4gICAgY29uc3QgdGVtcCA9IHRvQ2Vsc2l1cyhjaXR5Lm1haW4udGVtcCk7XG4gICAgY29uc3QgbWF4ID0gdG9DZWxzaXVzKGNpdHkubWFpbi50ZW1wX21heCk7XG4gICAgY29uc3QgbWluID0gdG9DZWxzaXVzKGNpdHkubWFpbi50ZW1wX21pbik7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBjaXR5Lm5hbWU7XG4gICAgY29uc3QgaWNvbiA9IGNpdHkud2VhdGhlclswXS5pY29uO1xuICAgIGNvbnN0IHdlYXRoZXJDbGFzcyA9IGNpdHkud2VhdGhlclswXS5tYWluO1xuXG4gICAgLy9nZXQgaHRtbCBlbGVtZW50IHRvIHJlbmRlclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZENpdHknKTtcblxuICAgIC8vIENsZWFyIFVJXG4gICAgY2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy8gUmVuZGVyIGNhcmQgd2l0aCB2YWx1ZXNcblxuICAgIGNhcmQuaW5uZXJIVE1MICs9IFxuICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtdC0zICR7d2VhdGhlckNsYXNzLnRvTG93ZXJDYXNlKCl9XCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPiAke2NpdHlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdcIi8gYWx0PVwiJHt3ZWF0aGVyQ2xhc3N9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiAke3dlYXRoZXJDbGFzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj48aSBjbGFzcz1cImZhcyBmYS10aGVybW9tZXRlci1oYWxmXCI+PC9pPiAke3RlbXB9IMKwQzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RmVlbHMgTGlrZSDCsEM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkh1bWlkaXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5NaW4uIFRlbXAuIMKwQzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TWF4IFRlbXAuIMKwQzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7ZmVlbHN9IMKwQzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aHVtaWRpdHl9ICU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke21pbn0gwrBDPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHttYXh9IMKwQzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxufVxuXG5nZXRXZWF0aGVyKGRlZmF1bHRDaXR5KTsiXSwic291cmNlUm9vdCI6IiJ9