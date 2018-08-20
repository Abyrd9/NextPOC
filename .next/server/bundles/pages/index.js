module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return font; });
var font = function font() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
  return "\n    font-family: 'Roboto', sans-serif;\n    font-size: ".concat(size, "px;\n    font-weight: ").concat(weight, ";\n  ");
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(3);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(8);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./components/Styles.js
var Styles = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Nav.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: center;\n  background-color: #000;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 1200px;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", "\n  color: #fff;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: #fff;\n  ", "\n  margin: 10px 20px;\n  &:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", "\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #6c63ff;\n  border: none;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 10px 50px;\n  margin: 0;\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  p {\n    ", "\n    color: #fff;\n    margin: 0;\n  }\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  color: #6c63ff;\n  ", "\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var NavContainer = external__styled_components__default.a.div(_templateObject);
var NavContent = external__styled_components__default.a.div(_templateObject2);
var Logo = external__styled_components__default.a.h1(_templateObject3, Object(Styles["a" /* font */])(28, 500));
var LinkStyle = external__styled_components__default.a.a(_templateObject4, Object(Styles["a" /* font */])(16, 200));
var NavList = external__styled_components__default.a.ul(_templateObject5);
var Button = external__styled_components__default.a.button(_templateObject6, Object(Styles["a" /* font */])(14, 300));
var CallNow = external__styled_components__default.a.div(_templateObject7, Object(Styles["a" /* font */])(14, 200));
var Phone = external__styled_components__default.a.h3(_templateObject8, Object(Styles["a" /* font */])(24, 200));

var Nav_Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(NavContainer, null, external__react__default.a.createElement(NavContent, null, external__react__default.a.createElement(Logo, null, "Logo Image"), external__react__default.a.createElement(NavList, null, external__react__default.a.createElement(link__default.a, {
        prefetch: true,
        href: "/"
      }, external__react__default.a.createElement(LinkStyle, null, "Home")), external__react__default.a.createElement(link__default.a, {
        prefetch: true,
        href: "/products"
      }, external__react__default.a.createElement(LinkStyle, null, "Products")), external__react__default.a.createElement(link__default.a, {
        href: "/#"
      }, external__react__default.a.createElement(LinkStyle, null, "Link")), external__react__default.a.createElement(link__default.a, {
        href: "/#"
      }, external__react__default.a.createElement(LinkStyle, null, "Link")), external__react__default.a.createElement(link__default.a, {
        href: "/#"
      }, external__react__default.a.createElement(LinkStyle, null, "Link"))), external__react__default.a.createElement(Button, null, "order now"), external__react__default.a.createElement(CallNow, null, external__react__default.a.createElement("p", null, "Call Now We're Open"), external__react__default.a.createElement(Phone, null, this.props.phoneNumber))));
    }
  }]);

  return Nav;
}(external__react_["Component"]);

Nav_Nav.propTypes = {};
/* harmony default export */ var components_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./components/Base.js




var Base_Base = function Base(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "This is The Page Title"), external__react__default.a.createElement("meta", {
    charSet: "utf-8"
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900",
    rel: "stylesheet"
  })), external__react__default.a.createElement(components_Nav, {
    phoneNumber: props.phoneNumber
  }), props.children);
};

/* harmony default export */ var components_Base = __webpack_exports__["a"] = (Base_Base);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Styles__ = __webpack_require__(2);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  /* background-color: #333333; */\n  background-color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n  max-width: 1200px;\n  background: ", ";\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 180%;\n  padding: 50px 0px;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  max-width: 600px;\n  h1 {\n    ", "\n    margin: 0;\n    color: #fff;\n  }\n  h3 {\n    ", "\n    margin: 0;\n    color: #fff;\n    margin-top: 5px;\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", "\n  display: inline-block;\n  width: 40px;\n  margin-left: 5px;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", "\n  margin: 10px 0px;\n  color: #fff;\n  position: relative;\n  margin-left: 12px;\n  ", "\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  ", "\n  color: #fff;\n  margin: 10px 0px;\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", "\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #6c63ff;\n  border: none;\n  border-radius: 5px;\n  padding: 12px 25px;\n  max-width: 220px;\n  margin-top: 10px;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var HeroContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject);
var Content = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject2, function (props) {
  return "\n    url(".concat(props.backgroundImg, ")\n    ");
});
var ContentBlock = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject3, Object(__WEBPACK_IMPORTED_MODULE_3__Styles__["a" /* font */])(60, 300), Object(__WEBPACK_IMPORTED_MODULE_3__Styles__["a" /* font */])(24, 400));
var FrequencyText = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(_templateObject4, Object(__WEBPACK_IMPORTED_MODULE_3__Styles__["a" /* font */])(10, 300));
var Price = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.p(_templateObject5, Object(__WEBPACK_IMPORTED_MODULE_3__Styles__["a" /* font */])(60, 300), function (props) {
  if (props.price.length !== 0) {
    return "\n      &:before {\n        content: '$';\n        font-size: 18px;\n        position: absolute;\n        left: -12px;\n        top: 5px;\n      }\n      ";
  }
});
var Legal = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.p(_templateObject6, Object(__WEBPACK_IMPORTED_MODULE_3__Styles__["a" /* font */])(10, 200));
var Button = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button(_templateObject7, Object(__WEBPACK_IMPORTED_MODULE_3__Styles__["a" /* font */])(14, 300));

var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          price = _props.price,
          frequencyText = _props.frequencyText,
          legal = _props.legal,
          title = _props.title,
          subtitle = _props.subtitle,
          buttonText = _props.buttonText,
          backgroundImg = _props.backgroundImg;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroContainer, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
        backgroundImg: backgroundImg
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContentBlock, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, subtitle), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Price, {
        price: price
      }, price, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FrequencyText, null, frequencyText)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Legal, null, legal), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button, null, buttonText))));
    }
  }]);

  return Hero;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Hero.propTypes = {
  price: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  frequencyText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  legal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Styles__ = __webpack_require__(2);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background-color: #1F2025;\n  width: 100%;\n  padding: 100px 0px;\n  ", "\n  color: #fff;\n  text-align: center;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FooterStyle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, Object(__WEBPACK_IMPORTED_MODULE_2__Styles__["a" /* font */])(18, 200));

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterStyle, null, "Content.");
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(5);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// EXTERNAL MODULE: ./components/Base.js + 1 modules
var Base = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Hero.js
var Hero = __webpack_require__(9);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(3);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: ./components/Styles.js
var Styles = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeatureSection.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  padding: 60px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F2F2F2;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  text-align: center;\n  ", "\n  margin: 0;\n  margin-bottom: 10px;\n  color: #6c63ff;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  text-align : center;\n  ", "\n  margin: 10px;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  text-align: center;\n  ", "\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-top: 60px;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px 20px;\n  max-width: 600px;\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: 125px;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var FeatureSectionContainer = external__styled_components__default.a.div(_templateObject);
var FeatureTitle = external__styled_components__default.a.h2(_templateObject2, Object(Styles["a" /* font */])(48, 200));
var FeatureSubtitle = external__styled_components__default.a.p(_templateObject3, Object(Styles["a" /* font */])(16, 200));
var Featurelegal = external__styled_components__default.a.p(_templateObject4, Object(Styles["a" /* font */])(10, 200));
var FeatureContent = external__styled_components__default.a.div(_templateObject5);
var FeatureBlock = external__styled_components__default.a.div(_templateObject6);
var FeatureImage = external__styled_components__default.a.img(_templateObject7);

var FeatureSection_FeatureSection =
/*#__PURE__*/
function (_Component) {
  _inherits(FeatureSection, _Component);

  function FeatureSection() {
    var _this;

    _classCallCheck(this, FeatureSection);

    _this = _possibleConstructorReturn(this, (FeatureSection.__proto__ || Object.getPrototypeOf(FeatureSection)).call(this));
    _this.state = {
      features: [{
        img: '../static/icons/_ionicons_svg_md-globe.svg',
        title: 'Access around the globe wherever you have access.',
        legal: 'not applicable for any location outside of the current county you are in'
      }, {
        img: '../static/icons/_ionicons_svg_md-chatboxes.svg',
        title: 'Message anyone from anywhere because you have so many friends and stuff.',
        legal: ''
      }, {
        img: '../static/icons/_ionicons_svg_md-construct.svg',
        title: "Constant and relentless support even when you don't want it.",
        legal: 'support restrictions apply, please do not ask for it directly.'
      }]
    };
    return _this;
  }

  _createClass(FeatureSection, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(FeatureSectionContainer, null, external__react__default.a.createElement(FeatureTitle, null, "These are some cool features"), external__react__default.a.createElement(FeatureSubtitle, null, "If you look at these features, I'll bet you'd really like to buy some things."), external__react__default.a.createElement(FeatureContent, null, this.state.features.map(function (feature) {
        return external__react__default.a.createElement(FeatureBlock, null, external__react__default.a.createElement(FeatureImage, {
          src: feature.img
        }), external__react__default.a.createElement(FeatureSubtitle, null, feature.title), external__react__default.a.createElement(Featurelegal, null, feature.legal));
      })));
    }
  }]);

  return FeatureSection;
}(external__react_["Component"]);

FeatureSection_FeatureSection.propTypes = {};
/* harmony default export */ var components_FeatureSection = (FeatureSection_FeatureSection);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/index.js


var pages__templateObject = /*#__PURE__*/ pages__taggedTemplateLiteral(["\n  body {\n    margin: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  p {\n    margin: 0;\n  }\n"]);

function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








Object(external__styled_components_["injectGlobal"])(pages__templateObject);

var pages_index =
/*#__PURE__*/
function (_Component) {
  pages__inherits(index, _Component);

  function index() {
    pages__classCallCheck(this, index);

    return pages__possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).apply(this, arguments));
  }

  pages__createClass(index, [{
    key: "render",
    value: function render() {
      var product1 = this.props.data.product1;
      return external__react__default.a.createElement(Base["a" /* default */], {
        phoneNumber: this.props.phoneNumber
      }, external__react__default.a.createElement(Hero["a" /* default */], {
        price: product1.price,
        frequencyText: product1.frequencyText,
        legal: product1.legal,
        title: "This is the Title",
        subtitle: "This is the subtext that will say some crazy thing and help sell more things.",
        buttonText: "view packages",
        backgroundImg: "../static/hero/hero-westworld.png"
      }), external__react__default.a.createElement(components_FeatureSection, null), external__react__default.a.createElement(Footer["a" /* default */], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var req, res, data;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return external__isomorphic_fetch__default()('https://api.myjson.com/bins/1c58pg');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return index;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ })
/******/ ]);