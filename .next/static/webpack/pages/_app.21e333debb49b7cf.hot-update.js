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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Modal.module.css */ \"./styles/Modal.module.css\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Modal() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: \"100vh\"\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 1.2\n            },\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().closeBtn),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setShowModal(false);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"close_btn.svg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                                lineNumber: 21,\n                                columnNumber: 98\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                            lineNumber: 21,\n                            columnNumber: 54\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().message),\n                        children: showDataModal\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().okBtn),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Proceed\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                            lineNumber: 27,\n                            columnNumber: 51\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\Modal.js\",\n            lineNumber: 12,\n            columnNumber: 27\n        }, this)\n    }, void 0, false);\n}\n_c = Modal;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDYjtBQUVxQjtBQUUvQyxTQUFTRyxLQUFLLEdBQUc7SUFJYixxQkFDSTtrQkFDS0MsU0FBUyxrQkFBSSw4REFBQ0oscURBQVU7WUFDckJNLE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFDLENBQUM7Z0JBQUVDLENBQUMsRUFBRSxPQUFPO2FBQUM7WUFDakNDLE9BQU8sRUFBRTtnQkFBQ0YsT0FBTyxFQUFDLENBQUM7Z0JBQUVDLENBQUMsRUFBRSxDQUFDO2FBQUM7WUFDMUJFLElBQUksRUFBRTtnQkFBQ0gsT0FBTyxFQUFDLENBQUM7YUFBQztZQUNqQkksVUFBVSxFQUFFO2dCQUFDQyxRQUFRLEVBQUUsR0FBRzthQUFDO1lBQzNCQyxTQUFTLEVBQUVYLHVFQUFZO3NCQUV2Qiw0RUFBQ0csS0FBRztnQkFBQ1EsU0FBUyxFQUFFWCwyRUFBZ0I7O2tDQUU1Qiw4REFBQ0csS0FBRzt3QkFBQ1EsU0FBUyxFQUFFWCwwRUFBZTtrQ0FBRSw0RUFBQ2UsUUFBTTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNQyxZQUFZLENBQUMsS0FBSyxDQUFDOzZCQUFBO3NDQUFFLDRFQUFDQyxLQUFHO2dDQUFDQyxHQUFHLEVBQUMsZUFBZTs7Ozs7b0NBQUc7Ozs7O2dDQUFTOzs7Ozs0QkFBTTtrQ0FFdkgsOERBQUNoQixLQUFHO3dCQUFDUSxTQUFTLEVBQUVYLHVFQUFZO2tDQUFFLGFBQVc7Ozs7OzRCQUFNO2tDQUUvQyw4REFBQ0csS0FBRzt3QkFBQ1EsU0FBUyxFQUFFWCx5RUFBYztrQ0FBR3NCLGFBQWE7Ozs7OzRCQUFPO2tDQUVyRCw4REFBQ25CLEtBQUc7d0JBQUNRLFNBQVMsRUFBRVgsdUVBQVk7a0NBQUUsNEVBQUNlLFFBQU07c0NBQUMsU0FBTzs7Ozs7Z0NBQVM7Ozs7OzRCQUFNOzs7Ozs7b0JBRTFEOzs7OztnQkFDRztxQkFDZCxDQUNMO0NBRUw7QUE1QlFkLEtBQUFBLEtBQUs7O0FBOEJkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Nb2RhbC5qcz8xZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Nb2RhbC5tb2R1bGUuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIE1vZGFsKCkge1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dNb2RhbCAmJiA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTowLCB5OiAnMTAwdmgnfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OjEsIHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgZXhpdD17e29wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDEuMn19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ0bn0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT48aW1nIHNyYz0nY2xvc2VfYnRuLnN2ZycgLz48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5EZXNjcmlwdGlvbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PntzaG93RGF0YU1vZGFsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub2tCdG59PjxidXR0b24+UHJvY2VlZDwvYnV0dG9uPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+IH0gIFxyXG4gICAgICAgIDwvPiAgXHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsInN0eWxlcyIsIk1vZGFsIiwic2hvd01vZGFsIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJtb2RhbCIsImNvbnRhaW5lciIsImNsb3NlQnRuIiwiYnV0dG9uIiwib25DbGljayIsInNldFNob3dNb2RhbCIsImltZyIsInNyYyIsInRpdGxlIiwibWVzc2FnZSIsInNob3dEYXRhTW9kYWwiLCJva0J0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Modal.js\n");

/***/ })

});