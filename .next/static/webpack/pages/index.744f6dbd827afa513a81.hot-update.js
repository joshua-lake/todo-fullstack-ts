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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetTodos; }\n/* harmony export */ });\n/* harmony import */ var _Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _Atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Atoms */ \"./pages/Atoms.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jpl/Desktop/dev/ts-learning/todo-fullstack-ts/pages/GetTodos.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar todoUpdate = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({\n  key: 'todoUpdate',\n  // unique ID (with respect to other atoms/selectors)\n  get: function get(_ref) {\n    var _get = _ref.get;\n    return _get(_Atoms__WEBPACK_IMPORTED_MODULE_3__.updateList);\n  }\n});\nfunction GetTodos() {\n  _s();\n\n  var _this = this;\n\n  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_Atoms__WEBPACK_IMPORTED_MODULE_3__.todoList),\n      _useRecoilState2 = (0,_Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useRecoilState, 2),\n      data = _useRecoilState2[0],\n      setData = _useRecoilState2[1]; // const [data, setData] = useState<{id: number,  title: string}[]>([])\n\n\n  var update = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(todoUpdate);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetch('/api/todos/all').then(function (res) {\n      return res.json();\n    }).then(function (todos) {\n      setData(todos);\n    });\n  }, [update]);\n\n  function handleDelete() {\n    fetch;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: data.map(function (todo) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [todo.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          id: \"toggle-all\",\n          className: \"toggle-all\",\n          onClick: handleDelete,\n          value: todo.id,\n          children: \"Done\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this)]\n      }, todo.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 7\n  }, this);\n} // className={styles.title\n\n_s(GetTodos, \"tJ+RmOxdzjxG3OtA28MOlUJHECY=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue];\n});\n\n_c = GetTodos;\n\nvar _c;\n\n$RefreshReg$(_c, \"GetTodos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HZXRUb2Rvcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTU8sVUFBVSxHQUFHTCxnREFBUSxDQUFDO0FBQzFCTSxFQUFBQSxHQUFHLEVBQUUsWUFEcUI7QUFDUDtBQUNuQkMsRUFBQUEsR0FBRyxFQUFFLG1CQUFXO0FBQUEsUUFBVEEsSUFBUyxRQUFUQSxHQUFTO0FBQ2IsV0FBT0EsSUFBRyxDQUFDTCw4Q0FBRCxDQUFWO0FBQ0Y7QUFKeUIsQ0FBRCxDQUEzQjtBQVFlLFNBQVNNLFFBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFFbEMsd0JBQXdCUCxzREFBYyxDQUFDRSw0Q0FBRCxDQUF0QztBQUFBO0FBQUEsTUFBT00sSUFBUDtBQUFBLE1BQWFDLE9BQWIsdUJBRmtDLENBSWhDOzs7QUFFQSxNQUFNQyxNQUFNLEdBQUdaLHNEQUFjLENBQUNNLFVBQUQsQ0FBN0I7QUFFQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RjLElBQUFBLEtBQUssQ0FBQyxnQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYixhQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUNELEtBSEgsRUFJR0YsSUFKSCxDQUlRLFVBQUNHLEtBQUQsRUFBVztBQUNmTixNQUFBQSxPQUFPLENBQUNNLEtBQUQsQ0FBUDtBQUNELEtBTkg7QUFPRCxHQVJRLEVBUU4sQ0FBQ0wsTUFBRCxDQVJNLENBQVQ7O0FBVUEsV0FBU00sWUFBVCxHQUF5QjtBQUN2QkwsSUFBQUEsS0FBSztBQUNOOztBQUlELHNCQUNFO0FBQUEsY0FFR0gsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQUMsSUFBSSxFQUFJO0FBQ2hCLDBCQUNFO0FBQW1CLGlCQUFTLEVBQUVmLGdFQUE5QjtBQUFBLG1CQUNHZSxJQUFJLENBQUNDLEtBRFIsZUFFRTtBQUFRLFlBQUUsRUFBQyxZQUFYO0FBQXdCLG1CQUFTLEVBQUMsWUFBbEM7QUFBK0MsaUJBQU8sRUFBRUgsWUFBeEQ7QUFBc0UsZUFBSyxFQUFFRSxJQUFJLENBQUNFLEVBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBVUYsSUFBSSxDQUFDRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELEtBUEE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhSCxFQUVEOztHQXZDd0JiO1VBRUVQLG9EQUlQRjs7O0tBTktTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0dldFRvZG9zLnRzeD9kMDA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUsIHNlbGVjdG9yLCB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHRvZG9TdGF0ZSwgdXBkYXRlTGlzdCB9IGZyb20gXCIuL0F0b21zXCI7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL0F0b21zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5cblxuY29uc3QgdG9kb1VwZGF0ZSA9IHNlbGVjdG9yKHtcbiAga2V5OiAndG9kb1VwZGF0ZScsIC8vIHVuaXF1ZSBJRCAod2l0aCByZXNwZWN0IHRvIG90aGVyIGF0b21zL3NlbGVjdG9ycylcbiAgZ2V0OiAoe2dldH0pID0+IHtcbiAgICAgcmV0dXJuIGdldCh1cGRhdGVMaXN0KTtcbiAgfSxcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFRvZG9zICgpIHtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdClcblxuICAgIC8vIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHtpZDogbnVtYmVyLCAgdGl0bGU6IHN0cmluZ31bXT4oW10pXG5cbiAgICBjb25zdCB1cGRhdGUgPSB1c2VSZWNvaWxWYWx1ZSh0b2RvVXBkYXRlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoKCcvYXBpL3RvZG9zL2FsbCcpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigodG9kb3MpID0+IHtcbiAgICAgICAgICBzZXREYXRhKHRvZG9zKVxuICAgICAgICB9KVxuICAgIH0sIFt1cGRhdGVdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlICgpIHtcbiAgICAgIGZldGNoXG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBcbiAgICAgICAge2RhdGEubWFwKHRvZG8gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dG9kby5pZH0gY2xhc3NOYW1lPXtzdHlsZXMudG9kb30+XG4gICAgICAgICAgICAgIHt0b2RvLnRpdGxlfVxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLWFsbFwiIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IHZhbHVlPXt0b2RvLmlkfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWNvaWxWYWx1ZSIsInNlbGVjdG9yIiwidXNlUmVjb2lsU3RhdGUiLCJ1cGRhdGVMaXN0IiwidG9kb0xpc3QiLCJzdHlsZXMiLCJ0b2RvVXBkYXRlIiwia2V5IiwiZ2V0IiwiR2V0VG9kb3MiLCJkYXRhIiwic2V0RGF0YSIsInVwZGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0b2RvcyIsImhhbmRsZURlbGV0ZSIsIm1hcCIsInRvZG8iLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/GetTodos.tsx\n");

/***/ })

});