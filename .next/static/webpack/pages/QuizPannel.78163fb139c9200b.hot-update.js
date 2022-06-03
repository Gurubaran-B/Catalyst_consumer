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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Progressbar.js */ \"./Components/Progressbar.js\");\n/* harmony import */ var _Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/QuizCard.js */ \"./Components/QuizCard.js\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/QuizPannel.module.css */ \"./styles/QuizPannel.module.css\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var arr = [\n        1,\n        2,\n        3,\n        4,\n        5\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    percent: 66\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardStack),\n                    children: arr.map(function(e, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                            children: i - current >= 0 && i - current < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                exit: {\n                                    x: \"-100vw\",\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 1\n                                },\n                                style: {\n                                    zIndex: \"\".concat(300 - (i - current) * 100),\n                                    width: \"\".concat(100 - (i - current) * 4, \"%\"),\n                                    top: \"\".concat(0 + (i - current) * 10, \"px\")\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    current: current,\n                                    setCurrent: setCurrent\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 53\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                lineNumber: 27,\n                                columnNumber: 38\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                            lineNumber: 25,\n                            columnNumber: 33\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().closebtn),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"closeNotch.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"close_btn_white.svg\",\n                        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9RdWl6UGFubmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNnQjtBQUNDO0FBQ047QUFDSTs7QUFFckQsU0FBU08sSUFBSSxHQUNiOzs7SUFDSSxJQUFJQyxHQUFHLEdBQUc7QUFBQyxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxTQUFDO0FBQUMsU0FBQztLQUFDO0lBRXJCLElBQThCUCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBVjdDLE9BVWtCLEdBQWdCQSxHQUFXLEdBQTNCLEVBVmxCLFVBVThCLEdBQUlBLEdBQVcsR0FBZjtJQUUxQixxQkFDSSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUVOLGdGQUFnQjs7MEJBRTVCLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLCtFQUFlOzBCQUMzQiw0RUFBQ0Ysa0VBQVc7b0JBQUNXLE9BQU8sRUFBRSxFQUFFOzs7Ozt3QkFBSTs7Ozs7b0JBQzFCOzBCQUVOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLG9GQUFvQjswQkFDaEMsNEVBQUNLLEtBQUc7b0JBQUNDLFNBQVMsRUFBRU4sZ0ZBQWdCOzhCQUMzQkUsR0FBRyxDQUFDVSxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQ1Y7d0JBQ0kscUJBQ0ksOERBQUNqQiwwREFBZTtzQ0FDWCxDQUFJLEdBQUdNLE9BQU8sSUFBSyxDQUFDLElBQU0sQ0FBRSxHQUFHQSxPQUFPLEdBQUksQ0FBQyxrQkFDM0MsOERBQUNQLHFEQUFVO2dDQUNSVSxTQUFTLEVBQUVOLDJFQUFXO2dDQUN0QmdCLElBQUksRUFBRTtvQ0FBQ0MsQ0FBQyxFQUFDLFFBQVE7b0NBQUVDLE9BQU8sRUFBQyxDQUFDO2lDQUFDO2dDQUM3QkMsVUFBVSxFQUFFO29DQUFDQyxRQUFRLEVBQUMsQ0FBQztpQ0FBQztnQ0FFeEJDLEtBQUssRUFBRTtvQ0FDS0MsTUFBTSxFQUFFLEVBQUMsQ0FBOEIsT0FBNUIsR0FBRyxHQUFJLENBQUNSLENBQUMsR0FBR1gsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFHO29DQUN4Q29CLEtBQUssRUFBRSxFQUFDLENBQTRCLE1BQUMsQ0FBM0IsR0FBRyxHQUFJLENBQUNULENBQUMsR0FBR1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQztvQ0FDdENxQixHQUFHLEVBQUMsRUFBQyxDQUEyQixNQUFFLENBQTNCLENBQUMsR0FBSSxDQUFDVixDQUFDLEdBQUdYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFFLENBQUM7aUNBQ3RDOzBDQUNHLDRFQUFDSiwrREFBUTtvQ0FBQ0ksT0FBTyxFQUFJQSxPQUFPO29DQUFFQyxVQUFVLEVBQUVBLFVBQVU7Ozs7O3lDQUFJOytCQU4vRFUsQ0FBQzs7OztxQ0FPRzs7Ozs7aUNBRUMsQ0FBQztxQkFJdEIsQ0FBQzs7Ozs7d0JBSVI7Ozs7O29CQUNKOzBCQUVOLDhEQUFDVCxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLCtFQUFlOztrQ0FDM0IsOERBQUMwQixLQUFHO3dCQUFDQyxHQUFHLEVBQUMsZ0JBQWdCOzs7Ozs0QkFBRztrQ0FDNUIsOERBQUNELEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7d0JBQUNyQixTQUFTLEVBQUVOLDRFQUFZOzs7Ozs0QkFBSTs7Ozs7O29CQUN4RDs7Ozs7O1lBRUosQ0FDUjtDQUNMO0dBbkRRQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFxRGIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9RdWl6UGFubmVsLmpzP2JjYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Qcm9ncmVzc2Jhci5qcyc7XHJcbmltcG9ydCBRdWl6Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1F1aXpDYXJkLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUXVpelBhbm5lbC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFF1aXooKVxyXG57XHJcbiAgICBsZXQgYXJyID0gWzEsMiwzLDQsNV1cclxuXHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NiYXIgcGVyY2VudD17NjZ9IC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTdGFja30+XHJcbiAgICAgICAgICAgICAgICAgICAge2Fyci5tYXAoKGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKChpIC0gY3VycmVudCkgPj0gMCkgJiYgKChpIC0gY3VycmVudCkgPCAzKSkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7eDonLTEwMHZ3Jywgb3BhY2l0eTowfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjoxfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezMwMCAtICgoaSAtIGN1cnJlbnQpICogMTAwKX1gLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsxMDAgLSAoKGkgLSBjdXJyZW50KSAqIDQpfSVgLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDpgJHswICsgKChpIC0gY3VycmVudCkgKiAxMCl9cHhgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1aXpDYXJkIGN1cnJlbnQgPSB7Y3VycmVudH0gc2V0Q3VycmVudD17c2V0Q3VycmVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZWJ0bn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImNsb3NlTm90Y2guc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiY2xvc2VfYnRuX3doaXRlLnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUHJvZ3Jlc3NiYXIiLCJRdWl6Q2FyZCIsInN0eWxlcyIsIlF1aXoiLCJhcnIiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInByb2dyZXNzIiwicGVyY2VudCIsImNhcmRDb250YWluZXIiLCJjYXJkU3RhY2siLCJtYXAiLCJlIiwiaSIsImNhcmQiLCJleGl0IiwieCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzdHlsZSIsInpJbmRleCIsIndpZHRoIiwidG9wIiwiY2xvc2VidG4iLCJpbWciLCJzcmMiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/QuizPannel.js\n");

/***/ })

});