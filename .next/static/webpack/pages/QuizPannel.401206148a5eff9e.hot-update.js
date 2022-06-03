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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Progressbar.js */ \"./Components/Progressbar.js\");\n/* harmony import */ var _Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/QuizCard.js */ \"./Components/QuizCard.js\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/QuizPannel.module.css */ \"./styles/QuizPannel.module.css\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var arr = [\n        1,\n        2,\n        3,\n        4,\n        5\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    percent: 66\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardStack),\n                    children: arr.map(function(e, i) {\n                        return i - current >= 0 && i - current < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            exit: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 1.2\n                            },\n                            style: {\n                                zIndex: \"\".concat(300 - (i - current) * 100),\n                                width: \"\".concat(100 - (i - current) * 4, \"%\"),\n                                top: \"\".concat(0 + (i - current) * 10, \"px\")\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                current: current,\n                                setCurrent: setCurrent\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                lineNumber: 36,\n                                columnNumber: 45\n                            }, _this)\n                        }, i, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                            lineNumber: 24,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().closebtn),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"closeNotch.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"close_btn_white.svg\",\n                        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9RdWl6UGFubmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNDO0FBQ2dCO0FBQ047QUFDSTs7QUFFckQsU0FBU00sSUFBSSxHQUNiOzs7SUFDSSxJQUFJQyxHQUFHLEdBQUc7QUFBQyxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxTQUFDO0FBQUMsU0FBQztLQUFDO0lBRXJCLElBQThCTixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBVjdDLE9BVWtCLEdBQWdCQSxHQUFXLEdBQTNCLEVBVmxCLFVBVThCLEdBQUlBLEdBQVcsR0FBZjtJQUUxQixxQkFDSSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUVOLGdGQUFnQjs7MEJBRTVCLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLCtFQUFlOzBCQUMzQiw0RUFBQ0Ysa0VBQVc7b0JBQUNXLE9BQU8sRUFBRSxFQUFFOzs7Ozt3QkFBSTs7Ozs7b0JBQzFCOzBCQUVOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLG9GQUFvQjswQkFDaEMsNEVBQUNLLEtBQUc7b0JBQUNDLFNBQVMsRUFBRU4sZ0ZBQWdCOzhCQUMzQkUsR0FBRyxDQUFDVSxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDOytCQUNULENBQUcsR0FBR1gsT0FBTyxJQUFLLENBQUMsSUFBTSxDQUFFLEdBQUdBLE9BQU8sR0FBSSxDQUFDLGtCQUN2Qyw4REFBQ04scURBQVU7NEJBQ1BTLFNBQVMsRUFBRU4sMkVBQVc7NEJBQ3RCZ0IsT0FBTyxFQUFFO2dDQUFFQyxPQUFPLEVBQUMsQ0FBQzs2QkFBQzs0QkFDckJDLE9BQU8sRUFBRTtnQ0FBQ0QsT0FBTyxFQUFDLENBQUM7NkJBQUM7NEJBQ3BCRSxJQUFJLEVBQUU7Z0NBQUNGLE9BQU8sRUFBQyxDQUFDOzZCQUFDOzRCQUNqQkcsVUFBVSxFQUFFO2dDQUFDQyxRQUFRLEVBQUUsR0FBRzs2QkFBQzs0QkFFM0JDLEtBQUssRUFBRTtnQ0FDS0MsTUFBTSxFQUFFLEVBQUMsQ0FBOEIsT0FBNUIsR0FBRyxHQUFJLENBQUNULENBQUMsR0FBR1gsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFHO2dDQUN4Q3FCLEtBQUssRUFBRSxFQUFDLENBQTRCLE1BQUMsQ0FBM0IsR0FBRyxHQUFJLENBQUNWLENBQUMsR0FBR1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQztnQ0FDdENzQixHQUFHLEVBQUMsRUFBQyxDQUEyQixNQUFFLENBQTNCLENBQUMsR0FBSSxDQUFDWCxDQUFDLEdBQUdYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFFLENBQUM7NkJBQ3RDO3NDQUNHLDRFQUFDSiwrREFBUTtnQ0FBQ0ksT0FBTyxFQUFJQSxPQUFPO2dDQUFFQyxVQUFVLEVBQUVBLFVBQVU7Ozs7O3FDQUFJOzJCQU4vRFUsQ0FBQzs7OztpQ0FPRztxQkFDZixDQUFDOzs7Ozt3QkFFTDs7Ozs7b0JBQ0o7MEJBRU4sOERBQUNULEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sK0VBQWU7O2tDQUMzQiw4REFBQzJCLEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxnQkFBZ0I7Ozs7OzRCQUFHO2tDQUM1Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLHFCQUFxQjt3QkFBQ3RCLFNBQVMsRUFBRU4sNEVBQVk7Ozs7OzRCQUFJOzs7Ozs7b0JBQ3hEOzs7Ozs7WUFFSixDQUNSO0NBQ0w7R0EzQ1FDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTZDYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1F1aXpQYW5uZWwuanM/YmNiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBQcm9ncmVzc2JhciBmcm9tICcuLi9Db21wb25lbnRzL1Byb2dyZXNzYmFyLmpzJztcclxuaW1wb3J0IFF1aXpDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvUXVpekNhcmQuanMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9RdWl6UGFubmVsLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gUXVpeigpXHJcbntcclxuICAgIGxldCBhcnIgPSBbMSwyLDMsNCw1XVxyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc2JhciBwZXJjZW50PXs2Nn0gLz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFN0YWNrfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJyLm1hcCgoZSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoKGkgLSBjdXJyZW50KSA+PSAwKSAmJiAoKGkgLSBjdXJyZW50KSA8IDMpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6MX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e29wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxLjJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezMwMCAtICgoaSAtIGN1cnJlbnQpICogMTAwKX1gLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7MTAwIC0gKChpIC0gY3VycmVudCkgKiA0KX0lYCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOmAkezAgKyAoKGkgLSBjdXJyZW50KSAqIDEwKX1weGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWl6Q2FyZCBjdXJyZW50ID0ge2N1cnJlbnR9IHNldEN1cnJlbnQ9e3NldEN1cnJlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VidG59PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJjbG9zZU5vdGNoLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImNsb3NlX2J0bl93aGl0ZS5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlByb2dyZXNzYmFyIiwiUXVpekNhcmQiLCJzdHlsZXMiLCJRdWl6IiwiYXJyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwcm9ncmVzcyIsInBlcmNlbnQiLCJjYXJkQ29udGFpbmVyIiwiY2FyZFN0YWNrIiwibWFwIiwiZSIsImkiLCJjYXJkIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIiwiekluZGV4Iiwid2lkdGgiLCJ0b3AiLCJjbG9zZWJ0biIsImltZyIsInNyYyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/QuizPannel.js\n");

/***/ })

});