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

/***/ "./Components/QuizCard.js":
/*!********************************!*\
  !*** ./Components/QuizCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_QuizCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/QuizCard.module.css */ \"./styles/QuizCard.module.css\");\n/* harmony import */ var _styles_QuizCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction QuizCard(param) {\n    var current = param.current, setCurrent = param.setCurrent;\n    var _this = this;\n    var options = [\n        \"One\",\n        \"Two\",\n        \"Three\",\n        \"Four\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: (_styles_QuizCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        initial: {\n            opacity: 0,\n            y: \"-100vh\"\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Select an answer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\QuizCard.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How many times a day you eat?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\QuizCard.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_QuizCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().options),\n                children: options.map(function(option, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return setCurrent(current + 1);\n                        },\n                        className: (_styles_QuizCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                        children: option\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\QuizCard.js\",\n                        lineNumber: 19,\n                        columnNumber: 46\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\QuizCard.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\React\\\\catalyst_consumer\\\\Components\\\\QuizCard.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = QuizCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizCard);\nvar _c;\n$RefreshReg$(_c, \"QuizCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXpDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDVztBQUNjO0FBR25ELFNBQVNHLFFBQVEsQ0FBQyxLQUFvQixFQUFFO1FBQXJCQyxPQUFPLEdBQVIsS0FBb0IsQ0FBbkJBLE9BQU8sRUFBQ0MsVUFBVSxHQUFuQixLQUFvQixDQUFYQSxVQUFVOztJQUVqQyxJQUFJQyxPQUFPLEdBQUc7UUFBQyxLQUFLO1FBQUMsS0FBSztRQUFDLE9BQU87UUFBQyxNQUFNO0tBQUM7SUFFMUMscUJBQ0ksOERBQUNMLHFEQUFVO1FBQ1BPLFNBQVMsRUFBRU4sOEVBQWdCO1FBQzNCUSxPQUFPLEVBQUU7WUFBQ0MsT0FBTyxFQUFDLENBQUM7WUFBRUMsQ0FBQyxFQUFDLFFBQVE7U0FBQztRQUNoQ0MsT0FBTyxFQUFFO1lBQUNGLE9BQU8sRUFBQyxDQUFDO1NBQUM7UUFDcEJHLFVBQVUsRUFBRTtZQUFDQyxRQUFRLEVBQUUsQ0FBQztTQUFDOzswQkFDekIsOERBQUNSLEtBQUc7MEJBQUMsa0JBQWdCOzs7OztvQkFBTTswQkFDM0IsOERBQUNTLElBQUU7MEJBQUMsK0JBQTZCOzs7OztvQkFBSzswQkFDdEMsOERBQUNULEtBQUc7Z0JBQUNDLFNBQVMsRUFBRU4sNEVBQWM7MEJBQ3pCSSxPQUFPLENBQUNXLEdBQUcsQ0FBQyxTQUFDQyxNQUFNLEVBQUVDLENBQUM7eUNBQU0sOERBQUNaLEtBQUc7d0JBQUNhLE9BQU8sRUFBRTttQ0FBTWYsVUFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBQyxDQUFDO3lCQUFBO3dCQUFFSSxTQUFTLEVBQUVOLDJFQUFhO2tDQUFXZ0IsTUFBTTt1QkFBVkMsQ0FBQzs7Ozs2QkFBZ0I7aUJBQUMsQ0FBQzs7Ozs7b0JBQzFIOzs7Ozs7WUFDRyxDQUNmO0NBQ0w7QUFqQlFoQixLQUFBQSxRQUFRO0FBbUJqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvUXVpekNhcmQuanM/YjZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9RdWl6Q2FyZC5tb2R1bGUuY3NzJztcclxuIFxyXG5cclxuZnVuY3Rpb24gUXVpekNhcmQoe2N1cnJlbnQsc2V0Q3VycmVudH0pIHtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IFsnT25lJywnVHdvJywnVGhyZWUnLCdGb3VyJ107XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTowLCB5OictMTAwdmgnfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6MX19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMX19PiBcclxuICAgICAgICAgICAgPGRpdj5TZWxlY3QgYW4gYW5zd2VyPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMT5Ib3cgbWFueSB0aW1lcyBhIGRheSB5b3UgZWF0PzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc30+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKDxkaXYgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudChjdXJyZW50ICsgMSl9IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0ga2V5PXtpfT57b3B0aW9ufTwvZGl2PikpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6Q2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJzdHlsZXMiLCJRdWl6Q2FyZCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwib3B0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMSIsIm1hcCIsIm9wdGlvbiIsImkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizCard.js\n");

/***/ })

});