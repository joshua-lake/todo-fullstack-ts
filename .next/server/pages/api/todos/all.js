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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./pages/api/todos/index.ts\");\n// import { PrismaClient } from '@prisma/client'\n\nasync function handler(req, res) {\n  // console.log(req.body)\n  const todo = await _index__WEBPACK_IMPORTED_MODULE_0__.prisma.todo.findMany();\n  res.send(todo);\n} // const todo = await prisma.todo.findMany({\n//   where: {\n//     title: {\n//       equals: 'vacuuming'\n//     }\n//   }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvYWxsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUdlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRDQyxHQUE1QyxFQUFrRTtBQUMvRTtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNSix3REFBQSxFQUFuQjtBQUNBRyxFQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBU0YsSUFBVDtBQUNELEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvdG9kb3MvYWxsLnRzPzRmN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcbi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICBjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZE1hbnkoKTtcbiAgcmVzLnNlbmQodG9kbylcbn1cblxuLy8gY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRNYW55KHtcbi8vICAgd2hlcmU6IHtcbi8vICAgICB0aXRsZToge1xuLy8gICAgICAgZXF1YWxzOiAndmFjdXVtaW5nJ1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2RvIiwiZmluZE1hbnkiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/todos/all.ts\n");

/***/ }),

/***/ "./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: ['query']\n});\nasync function handler(req, res) {\n  console.log(req.body, 'index');\n  const todo = await prisma.todo.create({\n    data: {\n      title: req.body\n    }\n  });\n  res.send(todo);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRU8sTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLENBQWlCO0FBQUNFLEVBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixDQUFqQixDQUFmO0FBRVEsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNENDLEdBQTVDLEVBQWtFO0FBQy9FQyxFQUFBQSxPQUFPLENBQUNKLEdBQVIsQ0FBWUUsR0FBRyxDQUFDRyxJQUFoQixFQUFzQixPQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNUCxNQUFNLENBQUNPLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUFDQyxJQUFBQSxJQUFJLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFUCxHQUFHLENBQUNHO0FBQVo7QUFBUCxHQUFuQixDQUFuQjtBQUNBRixFQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBU0osSUFBVDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzQ1NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7bG9nOiBbJ3F1ZXJ5J119KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LCAnaW5kZXgnKVxuICBjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uY3JlYXRlKHtkYXRhOiB7dGl0bGU6IHJlcS5ib2R5fX0pO1xuICByZXMuc2VuZCh0b2RvKVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJsb2ciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImJvZHkiLCJ0b2RvIiwiY3JlYXRlIiwiZGF0YSIsInRpdGxlIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/todos/index.ts\n");

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