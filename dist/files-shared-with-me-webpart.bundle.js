define("f4ae596f-48a5-40cf-8e72-7679c09c9cac_0.0.1", ["react","@microsoft/sp-core-library","@microsoft/sp-webpart-base","filesSharedWithMeWebpartStrings","react-dom"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FilesSharedWithMeWebpart_module_scss_1 = __webpack_require__(8);
var FilesSharedWithMeWebpart = (function (_super) {
    __extends(FilesSharedWithMeWebpart, _super);
    function FilesSharedWithMeWebpart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesSharedWithMeWebpart.prototype.render = function () {
        var files = this.props.files.map(function (file) {
            return (React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.row, key: file.name + "key" },
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell },
                    React.createElement("a", { href: file.url }, file.name)),
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, file.sharedBy),
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, file.sharedDate)));
        });
        return (React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.filesSharedWithMeWebpart },
            React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.container },
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.table },
                    React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.thead },
                        React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "File"),
                        React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "Shared by"),
                        React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "Shared by date")),
                    files))));
    };
    return FilesSharedWithMeWebpart;
}(React.Component));
exports.default = FilesSharedWithMeWebpart;



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(7);
var loader = __webpack_require__(9);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1]);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".filesSharedWithMeWebpart_815dc211 .container_815dc211{max-width:700px;margin:0 auto}.filesSharedWithMeWebpart_815dc211 .row_815dc211{padding:20px}.filesSharedWithMeWebpart_815dc211 .listItem_815dc211{max-width:715px;margin:5px auto;box-shadow:0 0 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.filesSharedWithMeWebpart_815dc211 .button_815dc211{text-decoration:none;height:32px;min-width:80px;background-color:#0078d7;border-color:#0078d7;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.filesSharedWithMeWebpart_815dc211 .button_815dc211 .label_815dc211{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.filesSharedWithMeWebpart_815dc211 .thead_815dc211{display:table-header-group;vertical-align:middle;color:#777}.filesSharedWithMeWebpart_815dc211 .row_815dc211{display:table-row-group}.filesSharedWithMeWebpart_815dc211 .cell_815dc211{display:table-cell;color:#444;padding:8px}.filesSharedWithMeWebpart_815dc211 .table_815dc211{padding:20px;width:100%}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(6);
var styles = {
    filesSharedWithMeWebpart: 'filesSharedWithMeWebpart_815dc211',
    container: 'container_815dc211',
    row: 'row_815dc211',
    listItem: 'listItem_815dc211',
    button: 'button_815dc211',
    label: 'label_815dc211',
    thead: 'thead_815dc211',
    cell: 'cell_815dc211',
    table: 'table_815dc211',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = _root.__themeState__ = _root.__themeState__ || {
    theme: undefined,
    lastStyleElement: undefined,
    registeredStyles: []
};
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 */
function loadStyles(styles) {
    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
    if (_injectStylesWithCssText === undefined) {
        _injectStylesWithCssText = shouldUseCssText();
    }
    applyThemableStyles(styleParts);
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStyles) {
    _themeState.loadStyles = loadStyles;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray), stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray, styleRecord);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 */
function clearStyles() {
    _themeState.registeredStyles.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
    _themeState.registeredStyles = [];
}
exports.clearStyles = clearStyles;
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            applyThemableStyles(styleRecord.themableStyle, styleRecord);
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles));
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, unless "DEBUG" is false
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && ("boolean" === 'undefined' || true)) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return resolvedArray.join('');
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
    if (styleRecord) {
        head.replaceChild(styleElement, styleRecord.styleElement);
        styleRecord.styleElement = styleElement;
    }
    else {
        head.appendChild(styleElement);
    }
    if (!styleRecord) {
        _themeState.registeredStyles.push({
            styleElement: styleElement,
            themableStyle: styleArray
        });
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray);
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(5);
var sp_core_library_1 = __webpack_require__(2);
var sp_webpart_base_1 = __webpack_require__(3);
var strings = __webpack_require__(4);
var FilesSharedWithMeWebpart_1 = __webpack_require__(1);
console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var req;
        return __generator(this, function (_a) {
            req = {
                url: 'https://www.bt.no',
                method: 'GET',
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'User-Agent': 'Super Agent/0.0.1',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
                }
            };
            return [2 /*return*/];
        });
    });
})();
// function getCurrentUserSP() {
//   var ur = 'https://bouvetasa.sharepoint.com/_api/web/currentuser';
//   var opt = {
//     url: ur,
//       method: "GET",
//     header: {
//       'User-Agent': 'Super Agent/0.0.1',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     }
//   }
//   request(opt, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(error + "***********");
//       return error;
//     } else {
//       //response.statusCode +s
//       console.log( " aaaaaaaaa " + response + body);
//       return response;
//     }
//   });
// }
//getCurrentUserSP();
// getCurrentUserSP();
// console.log("Done");
// function sharedWithMe() {
//   var ur = 'https://bouvetasa.sharepoint.com/_api/search/query?querytext=%27(SharedWithUsersOWSUSER:trond.tufte@bouvet.no)%27';
//   var opt = {
//     url: ur,
//   //    method: "GET",
//     header: {
//       'User-Agent': 'Super Agent/0.0.1',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     }
//   }
//   request(opt, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(error);
//       return error;
//     } else {
//       //response.statusCode +s
//       console.log( " " + response.value + body);
//       return response;
//     }
//   });
// }
var appconfig = {
    clientID: "f776dc11-31ca-469d-b388-89113f1fabb0",
    redirectUri: location.origin
};
//  getCurrentUserSP();
var scopes = ["User.Read", "Files.Read"];
var defaultFiles = [{ name: "Report1", url: "#", sharedBy: "Per Holmen", sharedDate: "23.07.2017" }, { name: "Report2", url: "#", sharedBy: "Gro Holmen", sharedDate: "12.06.2017" }, { name: "Report3", url: "#", sharedBy: "Trude Holmen", sharedDate: "04.01.2017" }];
/// <reference path="../../../node_modules/msal/out/msal.d.ts" />
//const tt = new Msal.UserAgentApplication(msalconfig.clientID, null, 
//  (errorDes, token, error, tokenType) => {});
var FilesSharedWithMeWebpartWebPart = (function (_super) {
    __extends(FilesSharedWithMeWebpartWebPart, _super);
    function FilesSharedWithMeWebpartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesSharedWithMeWebpartWebPart.prototype.render = function () {
        var element = React.createElement(FilesSharedWithMeWebpart_1.default, {
            description: this.properties.description,
            files: defaultFiles
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(FilesSharedWithMeWebpartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FilesSharedWithMeWebpartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FilesSharedWithMeWebpartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FilesSharedWithMeWebpartWebPart;



/***/ })
/******/ ])});;
//# sourceMappingURL=files-shared-with-me-webpart.bundle.js.map