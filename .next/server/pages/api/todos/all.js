"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos/all";
exports.ids = ["pages/api/todos/all"];
exports.modules = {

/***/ "./pages/api/todos/all.ts":
/*!********************************!*\
  !*** ./pages/api/todos/all.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./pages/api/todos/index.ts\");\n\nasync function handler(req, res) {\n  console.log(req.body);\n  const todo = await _index__WEBPACK_IMPORTED_MODULE_0__.prisma.todo.findMany({\n    where: {\n      title: {\n        equals: 'vacuuming'\n      }\n    }\n  });\n  res.send(todo);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvYWxsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFHZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0Q0MsR0FBNUMsRUFBa0U7QUFDL0VDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQWhCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1QLHdEQUFBLENBQXFCO0FBQ3RDUyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLE1BQU0sRUFBRTtBQURIO0FBREY7QUFEK0IsR0FBckIsQ0FBbkI7QUFPQVIsRUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVNMLElBQVQ7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS90b2Rvcy9hbGwudHM/NGY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBwcmlzbWEudG9kby5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGVxdWFsczogJ3ZhY3V1bWluZydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXMuc2VuZCh0b2RvKVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInRvZG8iLCJmaW5kTWFueSIsIndoZXJlIiwidGl0bGUiLCJlcXVhbHMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/todos/all.ts\n");

/***/ }),

/***/ "./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: ['query']\n});\nasync function handler(req, res) {\n  const todo = await prisma.todo.create({\n    data: {\n      title: 'vacuuming'\n    }\n  });\n  res.send(todo);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRU8sTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLENBQWlCO0FBQUNFLEVBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixDQUFqQixDQUFmO0FBRVEsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNENDLEdBQTVDLEVBQWtFO0FBQy9FLFFBQU1DLElBQUksR0FBRyxNQUFNTCxNQUFNLENBQUNLLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUFDQyxJQUFBQSxJQUFJLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBUCxHQUFuQixDQUFuQjtBQUNBSixFQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0osSUFBVDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzQ1NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7bG9nOiBbJ3F1ZXJ5J119KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBwcmlzbWEudG9kby5jcmVhdGUoe2RhdGE6IHt0aXRsZTogJ3ZhY3V1bWluZyd9fSk7XG4gIHJlcy5zZW5kKHRvZG8pXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImxvZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2RvIiwiY3JlYXRlIiwiZGF0YSIsInRpdGxlIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/todos/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/all.ts"));
module.exports = __webpack_exports__;

})();