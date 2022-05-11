/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 953:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.indexTemplate = void 0;
const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="react_root">${content}</div>
</body>
</html>
`;
exports.indexTemplate = indexTemplate;


/***/ }),

/***/ 595:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(860));
const server_1 = __importDefault(__webpack_require__(684));
const Header_1 = __webpack_require__(662);
const index_Template_1 = __webpack_require__(953);
const app = (0, express_1.default)();
app.use("/static", express_1.default.static("./dist/client"));
app.get("/", (req, res) => {
    res.send((0, index_Template_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));
});
app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
});


/***/ }),

/***/ 662:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Header = exports.HeaderCompotent = void 0;
const root_1 = __webpack_require__(826);
const React = __importStar(__webpack_require__(689));
function HeaderCompotent() {
    return (React.createElement("header", null,
        React.createElement("h1", null, "Reddit for our own"),
        React.createElement("p", null, "Hello there!")));
}
exports.HeaderCompotent = HeaderCompotent;
;
exports.Header = (0, root_1.hot)(HeaderCompotent);


/***/ }),

/***/ 860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 684:
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ 826:
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(595);
/******/ 	
/******/ })()
;