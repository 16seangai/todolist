/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    height: 100vh;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
}

h1, h2 {
    font-weight: 500;
}

.sidebar {
    flex: 1;
    padding: 24px;
    background-color: #0d6efd;
    color: white;
}

.project-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.project-list li {
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project-list li:hover {
    background-color: rgba(255, 255, 255, 0.25);
}


.project-list li.active {
    background-color: rgba(255, 255, 255, 0.3); /* stronger highlight for active */
    font-weight: bold;
}

.delete-project-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0 4px;
    opacity: 0;
    transition: opacity 0.2s;
    line-height: 1;
}

.project-list li:hover .delete-project-btn {
    opacity: 0.6;
}

.delete-project-btn:hover {
    opacity: 1 !important;
}

#add-project-btn {
    width: 100%;
    margin-top: 16px;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px dashed rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-project-btn:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
}

.add-project-btn:active {
    transform: translateY(0);
}

.main {
    flex: 3;
    padding: 16px;
}

.task-board {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

.task-column {
    flex: 1;
    background-color: #f5f5f5;
    padding: 0px 16px 8px 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-column header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.add-task-btn {
    cursor: pointer;
}

.task-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.task-list li {
    cursor: pointer;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: white;
}

.task-list li:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.task-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.task-meta span {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.75rem;
}

.task-item[data-priority="high"] .task-priority {
  background: #ffe5e5;
  color: #d32f2f;
}

.task-item[data-priority="medium"] .task-priority {
  background: #e3f2fd;
  color: #1976d2;
}

.task-item[data-priority="low"] .task-priority {
  background: #e8f5e9;
  color: #2e7d32;
}

.task-deadline {
  background: #f5f5f5;
  color: #616161;
}

#task-dialog,
#project-dialog {
    border-radius: 4px;
}

.task-form,
.project-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.task-form button,
.project-form button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
}

.task-form button:hover,
.project-form button:hover {
    transform: translateY(-2px);
}

.task-form button[value="save"],
.project-form button[value="save"] {
    background-color: #0d6efd;
    color: white;
}

.task-form button[value="cancel"],
.project-form button[value="cancel"] {
    background-color: #9ca3af;
    color: white;
}

.task-form button[value="delete"] {
    background-color: transparent;
    font-size: 1.2rem;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,aAAa;IACb,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;AAC/C;;;AAGA;IACI,0CAA0C,EAAE,kCAAkC;IAC9E,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,cAAc;IACd,UAAU;IACV,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,0CAA0C;IAC1C,YAAY;IACZ,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,0CAA0C;IAC1C,sCAAsC;IACtC,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,OAAO;IACP,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,oBAAoB;AACxB;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;;IAEI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;AACrB","sourcesContent":["body {\n    margin: 0;\n    height: 100vh;\n    display: flex;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nh1, h2 {\n    font-weight: 500;\n}\n\n.sidebar {\n    flex: 1;\n    padding: 24px;\n    background-color: #0d6efd;\n    color: white;\n}\n\n.project-list {\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.project-list li {\n    cursor: pointer;\n    padding: 8px 12px;\n    border-radius: 4px;\n    transition: background-color 0.3s;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-list li:hover {\n    background-color: rgba(255, 255, 255, 0.25);\n}\n\n\n.project-list li.active {\n    background-color: rgba(255, 255, 255, 0.3); /* stronger highlight for active */\n    font-weight: bold;\n}\n\n.delete-project-btn {\n    background: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n    cursor: pointer;\n    padding: 0 4px;\n    opacity: 0;\n    transition: opacity 0.2s;\n    line-height: 1;\n}\n\n.project-list li:hover .delete-project-btn {\n    opacity: 0.6;\n}\n\n.delete-project-btn:hover {\n    opacity: 1 !important;\n}\n\n#add-project-btn {\n    width: 100%;\n    margin-top: 16px;\n    padding: 4px;\n    background-color: rgba(255, 255, 255, 0.2);\n    color: white;\n    border: 2px dashed rgba(255, 255, 255, 0.5);\n    border-radius: 6px;\n    font-size: 1.5rem;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n.add-project-btn:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n    border-color: rgba(255, 255, 255, 0.8);\n    transform: translateY(-2px);\n}\n\n.add-project-btn:active {\n    transform: translateY(0);\n}\n\n.main {\n    flex: 3;\n    padding: 16px;\n}\n\n.task-board {\n    display: flex;\n    justify-content: space-between;\n    gap: 16px;\n}\n\n.task-column {\n    flex: 1;\n    background-color: #f5f5f5;\n    padding: 0px 16px 8px 16px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.task-column header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-task-btn {\n    cursor: pointer;\n}\n\n.task-list {\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.task-list li {\n    cursor: pointer;\n    padding: 16px 12px;\n    border-radius: 4px;\n    background-color: white;\n}\n\n.task-list li:hover {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.task-item {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.task-meta span {\n    padding: 2px 6px;\n    border-radius: 4px;\n    font-size: 0.75rem;\n}\n\n.task-item[data-priority=\"high\"] .task-priority {\n  background: #ffe5e5;\n  color: #d32f2f;\n}\n\n.task-item[data-priority=\"medium\"] .task-priority {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n\n.task-item[data-priority=\"low\"] .task-priority {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n\n.task-deadline {\n  background: #f5f5f5;\n  color: #616161;\n}\n\n#task-dialog,\n#project-dialog {\n    border-radius: 4px;\n}\n\n.task-form,\n.project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.task-form button,\n.project-form button {\n    padding: 8px 16px;\n    border: none;\n    border-radius: 4px;\n    font-size: 1rem;\n    cursor: pointer;\n    transition: all 0.2s;\n}\n\n.task-form button:hover,\n.project-form button:hover {\n    transform: translateY(-2px);\n}\n\n.task-form button[value=\"save\"],\n.project-form button[value=\"save\"] {\n    background-color: #0d6efd;\n    color: white;\n}\n\n.task-form button[value=\"cancel\"],\n.project-form button[value=\"cancel\"] {\n    background-color: #9ca3af;\n    color: white;\n}\n\n.task-form button[value=\"delete\"] {\n    background-color: transparent;\n    font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dataManager.js":
/*!****************************!*\
  !*** ./src/dataManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataManager: () => (/* binding */ DataManager)
/* harmony export */ });
const DataManager = {
    projects: [],
    nextProjectId: 1,
    nextTaskId: 1,

    save() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
        localStorage.setItem('nextProjectId', this.nextProjectId);
        localStorage.setItem('nextTaskId', this.nextTaskId);
    },

    load() {
        const stored = localStorage.getItem('projects');
        this.nextProjectId = parseInt(localStorage.getItem('nextProjectId')) || 1;
        this.nextTaskId = parseInt(localStorage.getItem('nextTaskId')) || 1;
        stored ? this.projects = JSON.parse(stored) : this.init();
        return this.projects;
    },

    init() {
        this.projects = [
            {
                id: this.nextProjectId++,
                name: 'Default Project',
                tasks: []
            }
        ];
        this.save()
    },

    Projects: {
        find(projectId) {
            return DataManager.projects.find(project => project.id === projectId);
        },

        add(projectName) {
            const newProject = {
                id: DataManager.nextProjectId++,
                name: projectName,
                tasks: []
            };
            DataManager.projects.push(newProject);
            DataManager.save();
            return newProject;
        },

        delete(projectId) {
            DataManager.projects = DataManager.projects.filter(project => project.id !== projectId);
            DataManager.save();
        }
    },

    Tasks: {
        add(projectId, taskData) {
            const project = DataManager.projects.find(p => p.id === projectId);
            if (project) {
                const newTask = {
                    id: DataManager.nextTaskId++,
                    name: taskData.name,
                    description: taskData.description || '',
                    priority: taskData.priority,
                    deadline: taskData.deadline || null,
                    status: taskData.status,
                };
                project.tasks.push(newTask);
                DataManager.save();
                return newTask;
            }
        },

        update(projectId, taskId, taskData) {
            const project = DataManager.Projects.find(projectId);
            if (project) {
                const task = project.tasks.find(t => t.id === taskId);
                if (task) {
                    Object.assign(task, taskData);
                    DataManager.save();
                    return task;
                }
            }
        },

        delete(projectId, taskId) {
            const project = DataManager.Projects.find(projectId);
            if (project) {
                project.tasks = project.tasks.filter(t => t.id !== taskId);
                DataManager.save();
            }
        }
    }
};



/***/ }),

/***/ "./src/dataView.js":
/*!*************************!*\
  !*** ./src/dataView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataView: () => (/* binding */ DataView)
/* harmony export */ });
const DataView = {
    updateProjectHeader(projectName) {
        const header = document.querySelector('.main h1');
        header.textContent = projectName ? `Tasks - ${projectName}` : 'Tasks'
    },

    renderProjects(projects, activeProjectId) {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
        
        projects.forEach((project, index) => {
            const li = document.createElement('li');
            li.dataset.projectId = project.id;
            
            if (activeProjectId === project.id || (!activeProjectId && index === 0)) {
                li.classList.add('active');
            }
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = project.name;
            nameSpan.className = 'project-name';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-project-btn';
            deleteBtn.dataset.projectId = project.id;
            
            li.appendChild(nameSpan);
            li.appendChild(deleteBtn);
            projectList.appendChild(li);
        });
    },

    renderTasks(project) {
        ['to-do', 'in-progress', 'done'].forEach(status => {
            const taskList = document.querySelector(`.task-column[data-status="${status}"] .task-list`);
            taskList.innerHTML = '';

            if (project) {
                const tasks = project.tasks.filter(task => task.status === status);

                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.className = 'task-item';
                    li.dataset.taskId = task.id;
                    li.dataset.priority = task.priority;
                    li.dataset.deadline = task.deadline;

                    li.innerHTML = `
                        <span class="task-name">${task.name}</span>
                        <span class="task-meta">
                            <span class="task-priority">${task.priority}</span>
                            ${task.deadline ? `<span class="task-deadline">${task.deadline}</span>` : ''}
                        </span>
                    `;

                    taskList.appendChild(li);
                })
            }
        })
    }
};



/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManager.js */ "./src/dataManager.js");
/* harmony import */ var _dataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataView.js */ "./src/dataView.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




// ==================== Helper Functions ====================
function getActiveProjectId() {
    const activeProjectLi = document.querySelector('.project-list li.active');
    return activeProjectLi ? parseInt(activeProjectLi.dataset.projectId) : null;
}

function getActiveProject() {
    const projectId = getActiveProjectId();
    return projectId ? _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.Projects.find(projectId) : null;
}

function refreshProjectView(activeProjectId = null) {
    _dataView_js__WEBPACK_IMPORTED_MODULE_1__.DataView.renderProjects(_dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.projects, activeProjectId);
}

function updateProjectHeader() {
    const projectName = getActiveProject()?.name;
    _dataView_js__WEBPACK_IMPORTED_MODULE_1__.DataView.updateProjectHeader(projectName);
}

function refreshTaskView() {
    const project = getActiveProject();
    if (project) {
        _dataView_js__WEBPACK_IMPORTED_MODULE_1__.DataView.renderTasks(project);
    }
}

function getTaskFormData() {
    return {
        name: document.querySelector('input[name="task-name"]').value.trim(),
        description: document.querySelector('textarea[name="description"]').value.trim(),
        priority: document.querySelector('select[name="priority"]').value,
        deadline: document.querySelector('input[name="deadline"]').value || null,
    };
}

function populateTaskForm(task) {
    document.querySelector('input[name="task-name"]').value = task.name;
    document.querySelector('textarea[name="description"]').value = task.description;
    document.querySelector('select[name="priority"]').value = task.priority;
    document.querySelector('input[name="deadline"]').value = task.deadline || '';
}

function clearTaskForm() {
    document.querySelector('.task-form').reset();
}

function openDialog(dialog, dataAttributes = {}) {
    Object.entries(dataAttributes).forEach(([key, value]) => {
        if (value !== undefined) {
            dialog.dataset[key] = value;
        }
    });
    dialog.showModal();
}

function closeDialog(dialog, clearForm = null) {
    dialog.close();
    if (clearForm) clearForm();
    // Clear all data attributes
    Object.keys(dialog.dataset).forEach(key => delete dialog.dataset[key]);
}

// ==================== Initialization ====================
_dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.load();
refreshProjectView();
refreshTaskView();
updateProjectHeader();

// ==================== Project Management ====================
const projectList = document.querySelector('.project-list');
const projectDialog = document.getElementById('project-dialog');
const addProjectButton = document.getElementById('add-project-btn');
const saveProjectButton = document.querySelector('.project-form button[value="save"]');

// Add project
addProjectButton.addEventListener('click', () => {
    openDialog(projectDialog);
});

// Save project
saveProjectButton.addEventListener('click', () => {
    const projectNameInput = document.querySelector('input[name="project-name"]');
    const projectName = projectNameInput.value.trim();
    
    if (projectName) {
        const newProject = _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.Projects.add(projectName);
        refreshProjectView(newProject.id);
        refreshTaskView();
        updateProjectHeader();
        closeDialog(projectDialog);
        projectNameInput.value = '';
    }
});

// Project list interactions
projectList.addEventListener('click', (e) => {
    // Delete project
    if (e.target.classList.contains('delete-project-btn')) {
        e.stopPropagation();
        const projectId = parseInt(e.target.dataset.projectId);
        const index = _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.projects.findIndex(p => p.id === projectId);
        
        _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.Projects.delete(projectId);
        
        // Select adjacent project
        const newActiveIndex = index > 0 ? index - 1 : 0;
        const newActiveId = _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.projects[newActiveIndex]?.id;
        
        refreshProjectView(newActiveId);
        refreshTaskView();
        updateProjectHeader();
        return;
    }
    
    // Select project
    if (e.target.closest('li')) {
        const projectId = parseInt(e.target.closest('li').dataset.projectId);
        refreshProjectView(projectId);
        refreshTaskView();
        _dataView_js__WEBPACK_IMPORTED_MODULE_1__.DataView.updateProjectHeader(getActiveProject()?.name);
    }
});

// ==================== Task Management ====================
const taskDialog = document.getElementById('task-dialog');
const taskBoard = document.querySelector('.task-board');
const addTaskButtons = document.querySelectorAll('.add-task-btn');
const saveTaskButton = document.querySelector('.task-form button[value="save"]');
const deleteTaskButton = document.querySelector('.task-form button[value="delete"]');

// Add task (click + button)
addTaskButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const column = e.target.closest('.task-column');
        const status = column.dataset.status;
        
        clearTaskForm();
        openDialog(taskDialog, { status });
    });
});

// Edit task (click task item)
taskBoard.addEventListener('click', (e) => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = parseInt(taskItem.dataset.taskId);
    const project = getActiveProject();
    const task = project?.tasks.find(t => t.id === taskId);
    
    if (task) {
        populateTaskForm(task);
        openDialog(taskDialog, { status: task.status, taskId });
    }
});

// Save task
saveTaskButton.addEventListener('click', () => {
    const taskId = taskDialog.dataset.taskId;
    const projectId = getActiveProjectId();
    
    if (!projectId) return;
    
    const taskData = {
        ...getTaskFormData(),
        status: taskDialog.dataset.status,
    };
    
    if (taskId) {
        _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.Tasks.update(projectId, parseInt(taskId), taskData);
    } else {
        _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.Tasks.add(projectId, taskData);
    }
    
    closeDialog(taskDialog, clearTaskForm);
    refreshTaskView();
});

// Delete task
deleteTaskButton.addEventListener('click', () => {
    const taskId = taskDialog.dataset.taskId;
    const projectId = getActiveProjectId();

    if (taskId) {
        _dataManager_js__WEBPACK_IMPORTED_MODULE_0__.DataManager.Tasks.delete(projectId, parseInt(taskId));
        closeDialog(taskDialog, clearTaskForm);
        refreshTaskView();
    }
});


})();

/******/ })()
;
//# sourceMappingURL=main.js.map