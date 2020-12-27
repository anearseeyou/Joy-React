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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./JoyReact.js":
/*!*********************!*\
  !*** ./JoyReact.js ***!
  \*********************/
/*! exports provided: JoyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JoyReact\", function() { return JoyReact; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n * @Author: zhengbingyi\n * @Date: 2020-12-27 22:01:25\n * @LastEditors: zhengbingyi\n * @LastEditTime: 2020-12-28 00:26:55\n * @Descripttion: \n */\n// 定义一个包装element的类\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      vchild.mountTo(this.root);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return ElementWrapper;\n}(); // 定义一个包装text的类\n\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(content);\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar JoyReact = {\n  createElement: function createElement(type, attributes) {\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    console.log(arguments);\n    var element;\n    if (typeof type === 'string') element = new ElementWrapper();else element = new type();\n\n    for (var name in attributes) {\n      // attributes 就是传过来的name和id 等属性\n      element.setAttribute(name, attributes[name]);\n    }\n\n    for (var _i = 0, _children = children; _i < _children.length; _i++) {\n      var child = _children[_i];\n      // children 就是传过来的span等元素\n      if (typeof child === 'string') child = new TextWrapper(child);\n      element.appendChild(child);\n    }\n\n    return element;\n  },\n  render: function render(vdom, element) {\n    vdom.mountTo(element);\n  }\n};\n\n//# sourceURL=webpack:///./JoyReact.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JoyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JoyReact.js */ \"./JoyReact.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n * @Author: zhengbingyi\n * @Date: 2020-12-27 22:01:28\n * @LastEditors: zhengbingyi\n * @LastEditTime: 2020-12-28 00:37:59\n * @Descripttion: \n */\n\n\nvar JoyComponent = /*#__PURE__*/function () {\n  function JoyComponent() {\n    _classCallCheck(this, JoyComponent);\n  }\n\n  _createClass(JoyComponent, [{\n    key: \"render\",\n    value: function render() {\n      return _JoyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"JoyReact\"].createElement(\"div\", null, _JoyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"JoyReact\"].createElement(\"span\", null, \"Hello\"), _JoyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"JoyReact\"].createElement(\"span\", null, \"Joy\"), _JoyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"JoyReact\"].createElement(\"span\", null, \"React!!!!!!!\"));\n    }\n  }, {\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // setAttribute 就是property\n      this[name] = value;\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      var vdom = this.render();\n      vdom.mountTo(parent);\n    }\n  }]);\n\n  return JoyComponent;\n}(); // 把dom抽象成组件\n\n\nvar joy = _JoyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"JoyReact\"].createElement(JoyComponent, {\n  name: \"joy\",\n  id: \"joy\"\n});\n_JoyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"JoyReact\"].render(joy, document.body); // 渲染dom\n// let joy = <div name='joyName' id='joyId'>\n//             <span>Hello</span>\n//             <span>Joy</span>\n//             <span>React!</span>\n//           </div>\n// document.body.appendChild(joy)\n// console.log(joy)\n\n/*\nvar joy = JoyReact.createElement(\"div\", {\n  name: \"joyName\",\n  id: \"joyId\"\n}, \nJoyReact.createElement(\"span\", null, \"Hello\"), \nJoyReact.createElement(\"span\", null, \"Joy\"), \nJoyReact.createElement(\"span\", null, \"React!\"));\n*/\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });