"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/QuizPannel",{

/***/ "./pages/QuizPannel.js":
/*!*****************************!*\
  !*** ./pages/QuizPannel.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Progressbar.js */ \"./Components/Progressbar.js\");\n/* harmony import */ var _Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/QuizCard.js */ \"./Components/QuizCard.js\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/QuizPannel.module.css */ \"./styles/QuizPannel.module.css\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var arr = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    percent: 66\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardStack),\n                    children: arr.map(function(e, i) {\n                        return i - current >= 0 && i - current < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                            style: {\n                                zIndex: \"\".concat(300 - (i - current) * 100),\n                                width: \"\".concat(100 - (i - current) * 4, \"%\"),\n                                top: \"\".concat(0 + (i - current) * 10, \"px\")\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                current: current,\n                                setCurrent: setCurrent\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                lineNumber: 34,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                            lineNumber: 26,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().closebtn),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"closeNotch.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"close_btn_white.svg\",\n                        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9RdWl6UGFubmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXNDO0FBQ2lCO0FBQ047QUFDSTs7QUFFckQsU0FBU0ssSUFBSSxHQUNiOzs7SUFDSSxJQUFJQyxHQUFHLEdBQUc7QUFBQyxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxVQUFFO0tBQUM7SUFFaEMsSUFBOEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFUN0MsT0FTa0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFUbEIsVUFTOEIsR0FBSUEsR0FBVyxHQUFmO0lBTTFCLHFCQUNJLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBRU4sZ0ZBQWdCOzswQkFFNUIsOERBQUNLLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sK0VBQWU7MEJBQzNCLDRFQUFDRixrRUFBVztvQkFBQ1csT0FBTyxFQUFFLEVBQUU7Ozs7O3dCQUFJOzs7OztvQkFDMUI7MEJBRU4sOERBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sb0ZBQW9COzBCQUNoQyw0RUFBQ0ssS0FBRztvQkFBQ0MsU0FBUyxFQUFFTixnRkFBZ0I7OEJBQzNCRSxHQUFHLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUM7K0JBQUssQ0FBRyxHQUFHWCxPQUFPLElBQUssQ0FBQyxJQUFNLENBQUUsR0FBR0EsT0FBTyxHQUFJLENBQUMsa0JBQ3JELDhEQUFDRSxLQUFHOzRCQUFDQyxTQUFTLEVBQUVOLDJFQUFXOzRCQUN0QmdCLEtBQUssRUFDRTtnQ0FDSUMsTUFBTSxFQUFFLEVBQUMsQ0FBOEIsT0FBNUIsR0FBRyxHQUFJLENBQUNILENBQUMsR0FBR1gsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFHO2dDQUN4Q2UsS0FBSyxFQUFFLEVBQUMsQ0FBNEIsTUFBQyxDQUEzQixHQUFHLEdBQUksQ0FBQ0osQ0FBQyxHQUFHWCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDO2dDQUN0Q2dCLEdBQUcsRUFBQyxFQUFDLENBQTJCLE1BQUUsQ0FBM0IsQ0FBQyxHQUFJLENBQUNMLENBQUMsR0FBR1gsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUUsQ0FBQzs2QkFDdEM7c0NBRVQsNEVBQUNKLCtEQUFRO2dDQUFDSSxPQUFPLEVBQUlBLE9BQU87Z0NBQUVDLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUNBQUk7Ozs7O2lDQUN0RDtxQkFBQyxDQUFDOzs7Ozt3QkFDZDs7Ozs7b0JBQ0o7MEJBRU4sOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sK0VBQWU7O2tDQUMzQiw4REFBQ3FCLEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxnQkFBZ0I7Ozs7OzRCQUFHO2tDQUM1Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLHFCQUFxQjt3QkFBQ2hCLFNBQVMsRUFBRU4sNEVBQVk7Ozs7OzRCQUFJOzs7Ozs7b0JBQ3hEOzs7Ozs7WUFFSixDQUNSO0NBQ0w7R0F4Q1FDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTBDYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1F1aXpQYW5uZWwuanM/YmNiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9ncmVzc2JhciBmcm9tICcuLi9Db21wb25lbnRzL1Byb2dyZXNzYmFyLmpzJztcclxuaW1wb3J0IFF1aXpDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvUXVpekNhcmQuanMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9RdWl6UGFubmVsLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gUXVpeigpXHJcbntcclxuICAgIGxldCBhcnIgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTBdXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIFxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc2JhciBwZXJjZW50PXs2Nn0gLz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFN0YWNrfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJyLm1hcCgoZSwgaSkgPT4gKChpIC0gY3VycmVudCkgPj0gMCkgJiYgKChpIC0gY3VycmVudCkgPCAzKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezMwMCAtICgoaSAtIGN1cnJlbnQpICogMTAwKX1gLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7MTAwIC0gKChpIC0gY3VycmVudCkgKiA0KX0lYCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOmAkezAgKyAoKGkgLSBjdXJyZW50KSAqIDEwKX1weGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWl6Q2FyZCBjdXJyZW50ID0ge2N1cnJlbnR9IHNldEN1cnJlbnQ9e3NldEN1cnJlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VidG59PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJjbG9zZU5vdGNoLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImNsb3NlX2J0bl93aGl0ZS5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb2dyZXNzYmFyIiwiUXVpekNhcmQiLCJzdHlsZXMiLCJRdWl6IiwiYXJyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwcm9ncmVzcyIsInBlcmNlbnQiLCJjYXJkQ29udGFpbmVyIiwiY2FyZFN0YWNrIiwibWFwIiwiZSIsImkiLCJjYXJkIiwic3R5bGUiLCJ6SW5kZXgiLCJ3aWR0aCIsInRvcCIsImNsb3NlYnRuIiwiaW1nIiwic3JjIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/QuizPannel.js\n");

/***/ })

});