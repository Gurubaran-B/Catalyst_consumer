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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Progressbar.js */ \"./Components/Progressbar.js\");\n/* harmony import */ var _Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/QuizCard.js */ \"./Components/QuizCard.js\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/QuizPannel.module.css */ \"./styles/QuizPannel.module.css\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var arr = [\n        1,\n        2,\n        3,\n        4\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    percent: 66\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardStack),\n                    children: arr.map(function(e, i) {\n                        return i - current >= 0 && i - current < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                            style: {\n                                zIndex: \"\".concat(300 - (i - current) * 100),\n                                width: \"\".concat(100 - (i - current) * 4, \"%\"),\n                                top: \"\".concat(0 + (i - current) * 10, \"px\")\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_QuizCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                current: current,\n                                setCurrent: setCurrent\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                                lineNumber: 28,\n                                columnNumber: 63\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                            lineNumber: 25,\n                            columnNumber: 88\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().closebtn),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"closeNotch.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"close_btn_white.svg\",\n                        className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\pages\\\\QuizPannel.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9RdWl6UGFubmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXNDO0FBQ2lCO0FBQ047QUFDSTs7QUFFckQsU0FBU0ssSUFBSSxHQUNiOzs7SUFDSSxJQUFJQyxHQUFHLEdBQUc7QUFBQyxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxTQUFDO0tBQUM7SUFFbkIsSUFBOEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFUN0MsT0FTa0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFUbEIsVUFTOEIsR0FBSUEsR0FBVyxHQUFmO0lBTTFCLHFCQUNJLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBRU4sZ0ZBQWdCOzswQkFFNUIsOERBQUNLLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sK0VBQWU7MEJBQzNCLDRFQUFDRixrRUFBVztvQkFBQ1csT0FBTyxFQUFFLEVBQUU7Ozs7O3dCQUFJOzs7OztvQkFDMUI7MEJBRU4sOERBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sb0ZBQW9COzBCQUNoQyw0RUFBQ0ssS0FBRztvQkFBQ0MsU0FBUyxFQUFFTixnRkFBZ0I7OEJBQzNCRSxHQUFHLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUM7K0JBQUssQ0FBRyxHQUFHWCxPQUFPLElBQUssQ0FBQyxJQUFNLENBQUUsR0FBR0EsT0FBTyxHQUFJLENBQUMsa0JBQU0sOERBQUNFLEtBQUc7NEJBQUNDLFNBQVMsRUFBRU4sMkVBQVc7NEJBQUVnQixLQUFLLEVBQUU7Z0NBQ25HQyxNQUFNLEVBQUUsRUFBQyxDQUE4QixPQUE1QixHQUFHLEdBQUksQ0FBQ0gsQ0FBQyxHQUFHWCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUc7Z0NBQ3hDZSxLQUFLLEVBQUUsRUFBQyxDQUE0QixNQUFDLENBQTNCLEdBQUcsR0FBSSxDQUFDSixDQUFDLEdBQUdYLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFDLENBQUM7Z0NBQ3RDZ0IsR0FBRyxFQUFDLEVBQUMsQ0FBMkIsTUFBRSxDQUEzQixDQUFDLEdBQUksQ0FBQ0wsQ0FBQyxHQUFHWCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBRSxDQUFDOzZCQUFDO3NDQUFFLDRFQUFDSiwrREFBUTtnQ0FBQ0ksT0FBTyxFQUFJQSxPQUFPO2dDQUFFQyxVQUFVLEVBQUVBLFVBQVU7Ozs7O3FDQUFJOzs7OztpQ0FBTTtxQkFBQyxDQUFDOzs7Ozt3QkFDeEc7Ozs7O29CQUNKOzBCQUVOLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLCtFQUFlOztrQ0FDM0IsOERBQUNxQixLQUFHO3dCQUFDQyxHQUFHLEVBQUMsZ0JBQWdCOzs7Ozs0QkFBRztrQ0FDNUIsOERBQUNELEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7d0JBQUNoQixTQUFTLEVBQUVOLDRFQUFZOzs7Ozs0QkFBSTs7Ozs7O29CQUN4RDs7Ozs7O1lBRUosQ0FDUjtDQUNMO0dBakNRQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFtQ2IsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9RdWl6UGFubmVsLmpzP2JjYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Qcm9ncmVzc2Jhci5qcyc7XHJcbmltcG9ydCBRdWl6Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1F1aXpDYXJkLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUXVpelBhbm5lbC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFF1aXooKVxyXG57XHJcbiAgICBsZXQgYXJyID0gWzEsMiwzLDRdXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIFxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc2JhciBwZXJjZW50PXs2Nn0gLz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFN0YWNrfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJyLm1hcCgoZSwgaSkgPT4gKChpIC0gY3VycmVudCkgPj0gMCkgJiYgKChpIC0gY3VycmVudCkgPCAzKSAmJiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBgJHszMDAgLSAoKGkgLSBjdXJyZW50KSAqIDEwMCl9YCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsxMDAgLSAoKGkgLSBjdXJyZW50KSAqIDQpfSVgLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOmAkezAgKyAoKGkgLSBjdXJyZW50KSAqIDEwKX1weGB9fT48UXVpekNhcmQgY3VycmVudCA9IHtjdXJyZW50fSBzZXRDdXJyZW50PXtzZXRDdXJyZW50fSAvPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZWJ0bn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImNsb3NlTm90Y2guc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiY2xvc2VfYnRuX3doaXRlLnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZ3Jlc3NiYXIiLCJRdWl6Q2FyZCIsInN0eWxlcyIsIlF1aXoiLCJhcnIiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInByb2dyZXNzIiwicGVyY2VudCIsImNhcmRDb250YWluZXIiLCJjYXJkU3RhY2siLCJtYXAiLCJlIiwiaSIsImNhcmQiLCJzdHlsZSIsInpJbmRleCIsIndpZHRoIiwidG9wIiwiY2xvc2VidG4iLCJpbWciLCJzcmMiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/QuizPannel.js\n");

/***/ })

});