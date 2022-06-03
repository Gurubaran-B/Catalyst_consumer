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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Progressbar.js */ \"./Components/Progressbar.js\");\n/* harmony import */ var _Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/QuizCard.js */ \"./Components/QuizCard.js\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/QuizPannel.module.css */ \"./styles/QuizPannel.module.css\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var arr = [\n        1,\n        2,\n        3,\n        4,\n        5\n    ];\n    var loc = 100 / arr.length;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), percent = ref1[0], setPercent = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    percent: percent\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardStack),\n                    children: arr.map(function(e, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                            children: i - current >= 0 && i - current < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                initial: {\n                                    opacity: 0,\n                                    y: \"100vh\"\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                exit: {\n                                    rotate: 60,\n                                    x: \"-100vw\",\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 0.8\n                                },\n                                style: {\n                                    zIndex: \"\".concat(300 - (i - current) * 100),\n                                    width: \"\".concat(100 - (i - current) * 4, \"%\"),\n                                    top: \"\".concat(0 + (i - current) * 10, \"px\")\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    loc: loc,\n                                    cross: i - current,\n                                    current: current,\n                                    setCurrent: setCurrent,\n                                    percent: percent,\n                                    setPercent: setPercent\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 57\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                lineNumber: 29,\n                                columnNumber: 42\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                            lineNumber: 27,\n                            columnNumber: 33\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().closebtn),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"closeNotch.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"close_btn_white.svg\",\n                        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"wR+B9az/tZ4hh+d6g2hpa01ZXUo=\");\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCOzs7Ozs0QkFBRztrQ0FDNUIsOERBQUNELEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7d0JBQUN6QixTQUFTLEVBQUVWLDRFQUFZOzs7Ozs0QkFBSTs7Ozs7O29CQUN4RDs7Ozs7O1lBRUosQ0FDUjtDQUNMO0dBMURRQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE0RGIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9RdWl6UGFubmVsLmpzP2JjYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Qcm9ncmVzc2Jhci5qcyc7XHJcbmltcG9ydCBRdWl6Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1F1aXpDYXJkLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUXVpelBhbm5lbC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFF1aXooKVxyXG57XHJcbiAgICBsZXQgYXJyID0gWzEsMiwzLDQsNV1cclxuICAgIGxldCBsb2MgPSAxMDAgLyBhcnIubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BlcmNlbnQsIHNldFBlcmNlbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgPFByb2dyZXNzYmFyIHBlcmNlbnQ9e3BlcmNlbnR9IC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTdGFja30+XHJcbiAgICAgICAgICAgICAgICAgICAge2Fyci5tYXAoKGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKChpIC0gY3VycmVudCkgPj0gMCkgJiYgKChpIC0gY3VycmVudCkgPCAzKSkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTowLCB5OicxMDB2aCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OjEsIHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e3JvdGF0ZTogNjAgLHg6Jy0xMDB2dycsIG9wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuOH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezMwMCAtICgoaSAtIGN1cnJlbnQpICogMTAwKX1gLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7MTAwIC0gKChpIC0gY3VycmVudCkgKiA0KX0lYCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOmAkezAgKyAoKGkgLSBjdXJyZW50KSAqIDEwKX1weGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWl6Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jID0ge2xvY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3MgPSB7KGkgLSBjdXJyZW50KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB7Y3VycmVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnQ9e3NldEN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgPSB7cGVyY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVyY2VudD0ge3NldFBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlYnRufT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiY2xvc2VOb3RjaC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJjbG9zZV9idG5fd2hpdGUuc3ZnXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXo7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJQcm9ncmVzc2JhciIsIlF1aXpDYXJkIiwic3R5bGVzIiwiUXVpeiIsImFyciIsImxvYyIsImxlbmd0aCIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicGVyY2VudCIsInNldFBlcmNlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwcm9ncmVzcyIsImNhcmRDb250YWluZXIiLCJjYXJkU3RhY2siLCJtYXAiLCJlIiwiaSIsImNhcmQiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInJvdGF0ZSIsIngiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzdHlsZSIsInpJbmRleCIsIndpZHRoIiwidG9wIiwiY3Jvc3MiLCJjbG9zZWJ0biIsImltZyIsInNyYyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/QuizPannel.js\n");

/***/ })

});