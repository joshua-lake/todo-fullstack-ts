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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetTodos; }\n/* harmony export */ });\n/* harmony import */ var _Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _Atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Atoms */ \"./pages/Atoms.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jpl/Desktop/dev/ts-learning/todo-fullstack-ts/pages/GetTodos.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar todoUpdate = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({\n  key: 'todoUpdate',\n  // unique ID (with respect to other atoms/selectors)\n  get: function get(_ref) {\n    var _get = _ref.get;\n    return _get(_Atoms__WEBPACK_IMPORTED_MODULE_3__.updateList);\n  }\n});\nfunction GetTodos() {\n  _s();\n\n  var _this = this;\n\n  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_Atoms__WEBPACK_IMPORTED_MODULE_3__.todoList),\n      _useRecoilState2 = (0,_Users_jpl_Desktop_dev_ts_learning_todo_fullstack_ts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useRecoilState, 2),\n      data = _useRecoilState2[0],\n      setData = _useRecoilState2[1]; // const [data, setData] = useState<{id: number,  title: string}[]>([])\n\n\n  var update = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(todoUpdate);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetch('/api/todos/all').then(function (res) {\n      return res.json();\n    }).then(function (todos) {\n      setData(todos);\n    });\n  }, [update]);\n\n  function handleDelete() {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: data.map(function (todo) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [todo.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          id: \"toggle-all\",\n          className: \"toggle-all\",\n          onClick: handleDelete,\n          value: todo.id,\n          children: \"Done\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this)]\n      }, todo.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 7\n  }, this);\n} // className={styles.title\n\n_s(GetTodos, \"tJ+RmOxdzjxG3OtA28MOlUJHECY=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue];\n});\n\n_c = GetTodos;\n\nvar _c;\n\n$RefreshReg$(_c, \"GetTodos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HZXRUb2Rvcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTU8sVUFBVSxHQUFHTCxnREFBUSxDQUFDO0FBQzFCTSxFQUFBQSxHQUFHLEVBQUUsWUFEcUI7QUFDUDtBQUNuQkMsRUFBQUEsR0FBRyxFQUFFLG1CQUFXO0FBQUEsUUFBVEEsSUFBUyxRQUFUQSxHQUFTO0FBQ2IsV0FBT0EsSUFBRyxDQUFDTCw4Q0FBRCxDQUFWO0FBQ0Y7QUFKeUIsQ0FBRCxDQUEzQjtBQVFlLFNBQVNNLFFBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFFbEMsd0JBQXdCUCxzREFBYyxDQUFDRSw0Q0FBRCxDQUF0QztBQUFBO0FBQUEsTUFBT00sSUFBUDtBQUFBLE1BQWFDLE9BQWIsdUJBRmtDLENBSWhDOzs7QUFFQSxNQUFNQyxNQUFNLEdBQUdaLHNEQUFjLENBQUNNLFVBQUQsQ0FBN0I7QUFFQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RjLElBQUFBLEtBQUssQ0FBQyxnQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYixhQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUNELEtBSEgsRUFJR0YsSUFKSCxDQUlRLFVBQUNHLEtBQUQsRUFBVztBQUNmTixNQUFBQSxPQUFPLENBQUNNLEtBQUQsQ0FBUDtBQUNELEtBTkg7QUFPRCxHQVJRLEVBUU4sQ0FBQ0wsTUFBRCxDQVJNLENBQVQ7O0FBVUEsV0FBU00sWUFBVCxHQUF5QixDQUV4Qjs7QUFJRCxzQkFDRTtBQUFBLGNBRUdSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUFDLElBQUksRUFBSTtBQUNoQiwwQkFDRTtBQUFtQixpQkFBUyxFQUFFZixnRUFBOUI7QUFBQSxtQkFDR2UsSUFBSSxDQUFDQyxLQURSLGVBRUU7QUFBUSxZQUFFLEVBQUMsWUFBWDtBQUF3QixtQkFBUyxFQUFDLFlBQWxDO0FBQStDLGlCQUFPLEVBQUVILFlBQXhEO0FBQXNFLGVBQUssRUFBRUUsSUFBSSxDQUFDRSxFQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQVVGLElBQUksQ0FBQ0UsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxLQVBBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUgsRUFFRDs7R0F2Q3dCYjtVQUVFUCxvREFJUEY7OztLQU5LUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9HZXRUb2Rvcy50c3g/ZDAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCBzZWxlY3RvciwgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyB0b2RvU3RhdGUsIHVwZGF0ZUxpc3QgfSBmcm9tIFwiLi9BdG9tc1wiO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi9BdG9tc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xuXG5cbmNvbnN0IHRvZG9VcGRhdGUgPSBzZWxlY3Rvcih7XG4gIGtleTogJ3RvZG9VcGRhdGUnLCAvLyB1bmlxdWUgSUQgKHdpdGggcmVzcGVjdCB0byBvdGhlciBhdG9tcy9zZWxlY3RvcnMpXG4gIGdldDogKHtnZXR9KSA9PiB7XG4gICAgIHJldHVybiBnZXQodXBkYXRlTGlzdCk7XG4gIH0sXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRUb2RvcyAoKSB7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3QpXG5cbiAgICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTx7aWQ6IG51bWJlciwgIHRpdGxlOiBzdHJpbmd9W10+KFtdKVxuXG4gICAgY29uc3QgdXBkYXRlID0gdXNlUmVjb2lsVmFsdWUodG9kb1VwZGF0ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaCgnL2FwaS90b2Rvcy9hbGwnKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHRvZG9zKSA9PiB7XG4gICAgICAgICAgc2V0RGF0YSh0b2RvcylcbiAgICAgICAgfSlcbiAgICB9LCBbdXBkYXRlXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZSAoKSB7XG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICB7ZGF0YS5tYXAodG9kbyA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXt0b2RvLmlkfSBjbGFzc05hbWU9e3N0eWxlcy50b2RvfT5cbiAgICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGUtYWxsXCIgY2xhc3NOYW1lPVwidG9nZ2xlLWFsbFwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gdmFsdWU9e3RvZG8uaWR9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8vIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlY29pbFZhbHVlIiwic2VsZWN0b3IiLCJ1c2VSZWNvaWxTdGF0ZSIsInVwZGF0ZUxpc3QiLCJ0b2RvTGlzdCIsInN0eWxlcyIsInRvZG9VcGRhdGUiLCJrZXkiLCJnZXQiLCJHZXRUb2RvcyIsImRhdGEiLCJzZXREYXRhIiwidXBkYXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRvZG9zIiwiaGFuZGxlRGVsZXRlIiwibWFwIiwidG9kbyIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/GetTodos.tsx\n");

/***/ })

});