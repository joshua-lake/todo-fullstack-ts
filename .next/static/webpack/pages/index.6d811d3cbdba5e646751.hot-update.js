"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/GetTodos.tsx":
/*!****************************!*\
  !*** ./pages/GetTodos.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetTodos; }\n/* harmony export */ });\n/* harmony import */ var _Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _Atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Atoms */ \"./pages/Atoms.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jpl/Desktop/dev/ts-learning/todo-fullstack-ts/pages/GetTodos.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar todoUpdate = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({\n  key: 'todoUpdate',\n  // unique ID (with respect to other atoms/selectors)\n  get: function get(_ref) {\n    var _get = _ref.get;\n    return _get(_Atoms__WEBPACK_IMPORTED_MODULE_3__.updateList);\n  }\n});\nfunction GetTodos() {\n  _s();\n\n  var _this = this;\n\n  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_Atoms__WEBPACK_IMPORTED_MODULE_3__.updateList),\n      _useRecoilState2 = (0,_Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useRecoilState, 2),\n      toggle = _useRecoilState2[0],\n      setToggle = _useRecoilState2[1];\n\n  var _useRecoilState3 = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_Atoms__WEBPACK_IMPORTED_MODULE_3__.todoList),\n      _useRecoilState4 = (0,_Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useRecoilState3, 2),\n      data = _useRecoilState4[0],\n      setData = _useRecoilState4[1]; // const [data, setData] = useState<{id: number,  title: string}[]>([])\n\n\n  var update = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(todoUpdate);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetch('/api/todos/all').then(function (res) {\n      return res.json();\n    }).then(function (todos) {\n      setData(todos);\n    });\n  }, [update]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: data.map(function (todo) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [todo.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          id: \"toggle-all\",\n          className: \"toggle-all\",\n          onClick: handleDelete,\n          value: todo.id,\n          children: \"Done\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this)]\n      }, todo.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 7\n  }, this);\n} // className={styles.title\n\n_s(GetTodos, \"b4JZF56xcmKPJ0UipVTDIBPV1eI=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue];\n});\n\n_c = GetTodos;\n\nvar _c;\n\n$RefreshReg$(_c, \"GetTodos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HZXRUb2Rvcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTU8sVUFBVSxHQUFHTCxnREFBUSxDQUFDO0FBQzFCTSxFQUFBQSxHQUFHLEVBQUUsWUFEcUI7QUFDUDtBQUNuQkMsRUFBQUEsR0FBRyxFQUFFLG1CQUFXO0FBQUEsUUFBVEEsSUFBUyxRQUFUQSxHQUFTO0FBQ2IsV0FBT0EsSUFBRyxDQUFDTCw4Q0FBRCxDQUFWO0FBQ0Y7QUFKeUIsQ0FBRCxDQUEzQjtBQVFlLFNBQVNNLFFBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFFbEMsd0JBQTRCUCxzREFBYyxDQUFVQyw4Q0FBVixDQUExQztBQUFBO0FBQUEsTUFBT08sTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEseUJBQXdCVCxzREFBYyxDQUFDRSw0Q0FBRCxDQUF0QztBQUFBO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWIsdUJBSmtDLENBTWhDOzs7QUFFQSxNQUFNQyxNQUFNLEdBQUdkLHNEQUFjLENBQUNNLFVBQUQsQ0FBN0I7QUFFQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RnQixJQUFBQSxLQUFLLENBQUMsZ0JBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsYUFBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDRCxLQUhILEVBSUdGLElBSkgsQ0FJUSxVQUFDRyxLQUFELEVBQVc7QUFDZk4sTUFBQUEsT0FBTyxDQUFDTSxLQUFELENBQVA7QUFDRCxLQU5IO0FBT0QsR0FSUSxFQVFOLENBQUNMLE1BQUQsQ0FSTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSxjQUVHRixJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFBQyxJQUFJLEVBQUk7QUFDaEIsMEJBQ0U7QUFBbUIsaUJBQVMsRUFBRWhCLGdFQUE5QjtBQUFBLG1CQUNHZ0IsSUFBSSxDQUFDQyxLQURSLGVBRUU7QUFBUSxZQUFFLEVBQUMsWUFBWDtBQUF3QixtQkFBUyxFQUFDLFlBQWxDO0FBQStDLGlCQUFPLEVBQUVDLFlBQXhEO0FBQXNFLGVBQUssRUFBRUYsSUFBSSxDQUFDRyxFQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQVVILElBQUksQ0FBQ0csRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxLQVBBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUgsRUFFRDs7R0F2Q3dCZjtVQUVNUCxvREFFSkEsb0RBSVBGOzs7S0FSS1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvR2V0VG9kb3MudHN4P2QwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgc2VsZWN0b3IsIHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgdG9kb1N0YXRlLCB1cGRhdGVMaXN0IH0gZnJvbSBcIi4vQXRvbXNcIjtcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vQXRvbXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcblxuXG5jb25zdCB0b2RvVXBkYXRlID0gc2VsZWN0b3Ioe1xuICBrZXk6ICd0b2RvVXBkYXRlJywgLy8gdW5pcXVlIElEICh3aXRoIHJlc3BlY3QgdG8gb3RoZXIgYXRvbXMvc2VsZWN0b3JzKVxuICBnZXQ6ICh7Z2V0fSkgPT4ge1xuICAgICByZXR1cm4gZ2V0KHVwZGF0ZUxpc3QpO1xuICB9LFxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0VG9kb3MgKCkge1xuXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VSZWNvaWxTdGF0ZTxib29sZWFuPih1cGRhdGVMaXN0KVxuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVJlY29pbFN0YXRlKHRvZG9MaXN0KVxuXG4gICAgLy8gY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8e2lkOiBudW1iZXIsICB0aXRsZTogc3RyaW5nfVtdPihbXSlcblxuICAgIGNvbnN0IHVwZGF0ZSA9IHVzZVJlY29pbFZhbHVlKHRvZG9VcGRhdGUpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goJy9hcGkvdG9kb3MvYWxsJylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh0b2RvcykgPT4ge1xuICAgICAgICAgIHNldERhdGEodG9kb3MpXG4gICAgICAgIH0pXG4gICAgfSwgW3VwZGF0ZV0pXG5cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBcbiAgICAgICAge2RhdGEubWFwKHRvZG8gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dG9kby5pZH0gY2xhc3NOYW1lPXtzdHlsZXMudG9kb30+XG4gICAgICAgICAgICAgIHt0b2RvLnRpdGxlfVxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLWFsbFwiIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IHZhbHVlPXt0b2RvLmlkfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWNvaWxWYWx1ZSIsInNlbGVjdG9yIiwidXNlUmVjb2lsU3RhdGUiLCJ1cGRhdGVMaXN0IiwidG9kb0xpc3QiLCJzdHlsZXMiLCJ0b2RvVXBkYXRlIiwia2V5IiwiZ2V0IiwiR2V0VG9kb3MiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJkYXRhIiwic2V0RGF0YSIsInVwZGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0b2RvcyIsIm1hcCIsInRvZG8iLCJ0aXRsZSIsImhhbmRsZURlbGV0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/GetTodos.tsx\n");

/***/ })

});