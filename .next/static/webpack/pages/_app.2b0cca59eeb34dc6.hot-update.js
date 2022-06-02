"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/Modal.js":
/*!*****************************!*\
  !*** ./Components/Modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ \"./Components/Layout.js\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Modal.module.css */ \"./styles/Modal.module.css\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Modal() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Layout__WEBPACK_IMPORTED_MODULE_2__.ModalContext), showModal = ref[0], setShowModal = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: \"100vh\"\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 1.2\n            },\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modal),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().backD)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                    lineNumber: 20,\n                    columnNumber: 29\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().closeBtn),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setShowModal(false);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"close_btn.svg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 110\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                                lineNumber: 24,\n                                columnNumber: 66\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                            lineNumber: 24,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"Description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                            lineNumber: 26,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().message),\n                            children: '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                            lineNumber: 28,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().okBtn),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Proceed\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                                lineNumber: 30,\n                                columnNumber: 63\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                            lineNumber: 30,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n                    lineNumber: 22,\n                    columnNumber: 29\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n            lineNumber: 13,\n            columnNumber: 27\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\Modal.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_s(Modal, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = Modal;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ0c7QUFDRjtBQUNPOztBQUUvQyxTQUFTSyxLQUFLLEdBQUc7O0lBRWIsSUFBa0NILEdBQXdCLEdBQXhCQSxpREFBVSxDQUFDQyxpREFBWSxDQUFDLEVBUDlELFNBT29CLEdBQWtCRCxHQUF3QixHQUExQyxFQVBwQixZQU9rQyxHQUFJQSxHQUF3QixHQUE1QjtJQUU5QixxQkFDSSw4REFBQ00sS0FBRztrQkFFQ0YsU0FBUyxrQkFBSSw4REFBQ04scURBQVU7WUFDVFMsT0FBTyxFQUFFO2dCQUFFQyxPQUFPLEVBQUMsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFLE9BQU87YUFBQztZQUNqQ0MsT0FBTyxFQUFFO2dCQUFDRixPQUFPLEVBQUMsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFLENBQUM7YUFBQztZQUMxQkUsSUFBSSxFQUFFO2dCQUFDSCxPQUFPLEVBQUMsQ0FBQzthQUFDO1lBQ2pCSSxVQUFVLEVBQUU7Z0JBQUNDLFFBQVEsRUFBRSxHQUFHO2FBQUM7WUFDM0JDLFNBQVMsRUFBRVosdUVBQVk7OzhCQUV2Qiw4REFBQ0ksS0FBRztvQkFBQ1EsU0FBUyxFQUFFWix1RUFBWTs7Ozs7d0JBQVE7OEJBRXBDLDhEQUFDSSxLQUFHO29CQUFDUSxTQUFTLEVBQUVaLDJFQUFnQjs7c0NBRTVCLDhEQUFDSSxLQUFHOzRCQUFDUSxTQUFTLEVBQUVaLDBFQUFlO3NDQUFFLDRFQUFDaUIsUUFBTTtnQ0FBQ0MsT0FBTyxFQUFFOzJDQUFNZixZQUFZLENBQUMsS0FBSyxDQUFDO2lDQUFBOzBDQUFFLDRFQUFDZ0IsS0FBRztvQ0FBQ0MsR0FBRyxFQUFDLGVBQWU7Ozs7O3dDQUFHOzs7OztvQ0FBUzs7Ozs7Z0NBQU07c0NBRXZILDhEQUFDaEIsS0FBRzs0QkFBQ1EsU0FBUyxFQUFFWix1RUFBWTtzQ0FBRSxhQUFXOzs7OztnQ0FBTTtzQ0FFL0MsOERBQUNJLEtBQUc7NEJBQUNRLFNBQVMsRUFBRVoseUVBQWM7c0NBQUUsaWNBQStiOzs7OztnQ0FBTTtzQ0FFcmUsOERBQUNJLEtBQUc7NEJBQUNRLFNBQVMsRUFBRVosdUVBQVk7c0NBQUUsNEVBQUNpQixRQUFNOzBDQUFDLFNBQU87Ozs7O29DQUFTOzs7OztnQ0FBTTs7Ozs7O3dCQUUxRDs7Ozs7O2dCQUVHOzs7OztZQUd2QixDQUVSO0NBRUw7R0FuQ1FoQixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7O0FBcUNkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Nb2RhbC5qcz8xZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTW9kYWwubW9kdWxlLmNzc1wiXHJcblxyXG5mdW5jdGlvbiBNb2RhbCgpIHtcclxuXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAge3Nob3dNb2RhbCAmJiA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTowLCB5OiAnMTAwdmgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OjEsIHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e29wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDEuMn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja0R9PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ0bn0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT48aW1nIHNyYz0nY2xvc2VfYnRuLnN2ZycgLz48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5EZXNjcmlwdGlvbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5va0J0bn0+PGJ1dHRvbj5Qcm9jZWVkPC9idXR0b24+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0Iiwic3R5bGVzIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsIm1vZGFsIiwiYmFja0QiLCJjb250YWluZXIiLCJjbG9zZUJ0biIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJva0J0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Modal.js\n");

/***/ })

});