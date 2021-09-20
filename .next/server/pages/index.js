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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jpl/Desktop/dev/ts-learning/ts-boilerplate/ts-boilerplate/pages/index.tsx\";\n\n\n\nfunction Home() {\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // fetch('/api/todos/all', {method: 'POST', body: JSON.stringify({name: 'josh'}), headers: {'content-type': 'application/json'}})\n    fetch('/api/todos/all').then(res => {\n      return res.json();\n    }).then(todos => {\n      setData(todos);\n    });\n  }, []);\n  console.log((_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default()));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n    children: data.map(todo => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: todo.title\n      }, todo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n} // docker-compose --project-name todo up -d ==> spin up docker\n// npx prisma migrate dev --name init ==> migrate db//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSiwrQ0FBUSxDQUFzRSxFQUF0RSxDQUFoQztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDtBQUNBTSxJQUFBQSxLQUFLLENBQUMsZ0JBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLEdBQUQsSUFBUztBQUNiLGFBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0QsS0FISCxFQUlHRixJQUpILENBSVNHLEtBQUQsSUFBVztBQUNmTCxNQUFBQSxPQUFPLENBQUNLLEtBQUQsQ0FBUDtBQUNELEtBTkg7QUFPRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZViwyREFBWjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQSxpRUFBaEI7QUFBQSxjQUNHRSxJQUFJLENBQUNVLEdBQUwsQ0FBU0MsSUFBSSxJQUFJO0FBQ2hCLDBCQUNFO0FBQUEsa0JBQ0dBLElBQUksQ0FBQ0Y7QUFEUixTQUFVRSxJQUFJLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBS0QsS0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELEVBR0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTx7aWQ6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nLCB0aXRsZTogc3RyaW5nfVtdPihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZldGNoKCcvYXBpL3RvZG9zL2FsbCcsIHttZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoe25hbWU6ICdqb3NoJ30pLCBoZWFkZXJzOiB7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxuICAgIGZldGNoKCcvYXBpL3RvZG9zL2FsbCcpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHRvZG9zKSA9PiB7XG4gICAgICAgIHNldERhdGEodG9kb3MpXG4gICAgICB9KVxuICB9LCBbXSlcbiAgY29uc29sZS5sb2coc3R5bGVzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAge2RhdGEubWFwKHRvZG8gPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgIHt0b2RvLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8vIGRvY2tlci1jb21wb3NlIC0tcHJvamVjdC1uYW1lIHRvZG8gdXAgLWQgPT0+IHNwaW4gdXAgZG9ja2VyXG4vLyBucHggcHJpc21hIG1pZ3JhdGUgZGV2IC0tbmFtZSBpbml0ID09PiBtaWdyYXRlIGRiIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWFwIiwidG9kbyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"index_title__3W9b9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5zY3NzPzQ3ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVcIjogXCJpbmRleF90aXRsZV9fM1c5YjlcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.module.scss\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();