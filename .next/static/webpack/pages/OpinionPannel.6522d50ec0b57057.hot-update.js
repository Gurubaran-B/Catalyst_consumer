"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/OpinionPannel",{

/***/ "./pages/OpinionPannel.js":
/*!********************************!*\
  !*** ./pages/OpinionPannel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Layout */ \"./Components/Layout.js\");\n/* harmony import */ var _Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Progressbar.js */ \"./Components/Progressbar.js\");\n/* harmony import */ var _Components_OpinionCard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/OpinionCard.js */ \"./Components/OpinionCard.js\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/QuizPannel.module.css */ \"./styles/QuizPannel.module.css\");\n/* harmony import */ var _styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Components_Timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Timer.js */ \"./Components/Timer.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Opinion() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__.HeaderContext), setShowHeader = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    setShowHeader(false);\n    var testData = {\n        question_and_options: [\n            {\n                question: \"Question 1\",\n                question_asset: \"https://adasdsad.com/asdas\",\n                question_asset_type: \"IMAGE\",\n                options: [\n                    {\n                        option_text: \"option 1\",\n                        option_asset: \"https://adasdsad.com/asdas\",\n                        option_asset_type: \"IMAGE\",\n                        correct_option: true,\n                        _id: \"62720860383a33b721278705\"\n                    }\n                ],\n                _id: \"62720860383a33b721278704\"\n            },\n            {\n                question: \"Question 2\",\n                question_asset: \"https://adasdsad.com/asdas\",\n                question_asset_type: \"IMAGE\",\n                options: [\n                    {\n                        option_text: \"option 1\",\n                        option_asset: \"https://adasdsad.com/asdas\",\n                        option_asset_type: \"IMAGE\",\n                        correct_option: false,\n                        _id: \"62720860383a33b721278707\"\n                    },\n                    {\n                        option_text: \"option 2\",\n                        option_asset: \"https://adasdsad.com/asdas\",\n                        option_asset_type: \"IMAGE\",\n                        correct_option: false,\n                        _id: \"62720860383a33b721278708\"\n                    },\n                    {\n                        option_text: \"option 3\",\n                        option_asset: \"https://adasdsad.com/asdas\",\n                        option_asset_type: \"IMAGE\",\n                        correct_option: true,\n                        _id: \"62720860383a33b721278709\"\n                    }\n                ],\n                _id: \"62720860383a33b721278706\"\n            }\n        ]\n    };\n    var arr = testData.question_and_options;\n    var loc = 100 / arr.length;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref1[0], setCurrent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), percent = ref2[0], setPercent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref3[0], setScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), gameStatus = ref4[0], setGameStatus = ref4[1];\n    if (gameStatus) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Progressbar_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        percent: percent,\n                        setGameStatus: setGameStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                        lineNumber: 81,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                    lineNumber: 80,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().focus),\n                    initial: {\n                        opacity: 0,\n                        y: \"100vh\"\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    transition: {\n                        duration: 0.8\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().timer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Timer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                minutes: minutes,\n                                seconds: seconds,\n                                setMinutes: setMinutes,\n                                setSeconds: setSeconds,\n                                setGameStatus: setGameStatus\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                                lineNumber: 91,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                            lineNumber: 90,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardStack),\n                                children: arr.map(function(e, i) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                                        children: i - current >= 0 && i - current < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                            initial: {\n                                                opacity: 0,\n                                                y: \"100vh\"\n                                            },\n                                            animate: {\n                                                opacity: 1,\n                                                y: 0\n                                            },\n                                            exit: {\n                                                rotate: -60,\n                                                x: \"-100vw\",\n                                                opacity: 0\n                                            },\n                                            transition: {\n                                                duration: 0.8\n                                            },\n                                            style: {\n                                                zIndex: \"\".concat(300 - (i - current) * 100),\n                                                width: \"\".concat(100 - (i - current) * 4, \"%\"),\n                                                top: \"\".concat(0 + (i - current) * 10, \"px\")\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_OpinionCard_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                loc: loc,\n                                                cross: i - current,\n                                                current: current,\n                                                setCurrent: setCurrent,\n                                                percent: percent,\n                                                setPercent: setPercent,\n                                                question: e.question,\n                                                options: e.options\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                                                lineNumber: 120,\n                                                columnNumber: 69\n                                            }, _this)\n                                        }, e, false, {\n                                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 54\n                                        }, _this)\n                                    }, e._id, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 45\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                                lineNumber: 102,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                    lineNumber: 84,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().closebtn),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"closeNotch.svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                            lineNumber: 143,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"close_btn_white.svg\",\n                            className: (_styles_QuizPannel_module_css__WEBPACK_IMPORTED_MODULE_7___default().close)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                            lineNumber: 144,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n                    lineNumber: 142,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\OpinionPannel.js\",\n            lineNumber: 79,\n            columnNumber: 17\n        }, this);\n    } else {\n        router.push(\"/Reward\");\n    }\n    ;\n}\n_s(Opinion, \"/M6Q4353WCFfqueNxIHpf8c2y8E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Opinion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Opinion);\nvar _c;\n$RefreshReg$(_c, \"Opinion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMEQsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLGdCQUFnQjs7Ozs7Z0NBQUc7c0NBQzVCLDhEQUFDRCxLQUFHOzRCQUFDQyxHQUFHLEVBQUMscUJBQXFCOzRCQUFDL0IsU0FBUyxFQUFFNUIsNEVBQVk7Ozs7O2dDQUFJOzs7Ozs7d0JBQ3hEOzs7Ozs7Z0JBRUosQ0FDUjtLQUNMLE1BRUQ7UUFDSUksTUFBTSxDQUFDeUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFCOztDQUNSO0dBaEpRM0QsT0FBTzs7UUFJR1Isa0RBQVM7OztBQUpuQlEsS0FBQUEsT0FBTztBQWtKaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9PcGluaW9uUGFubmVsLmpzPzliY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb3Rpb24sIEFuaW1hdGVQcmVzZW5jZX0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gXCIuLi9Db21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Qcm9ncmVzc2Jhci5qcyc7XHJcbmltcG9ydCBPcGluaW9uQ2FyZCBmcm9tICcuLi9Db21wb25lbnRzL09waW5pb25DYXJkLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUXVpelBhbm5lbC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFRpbWVyIGZyb20gXCIuLi9Db21wb25lbnRzL1RpbWVyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBPcGluaW9uKClcclxue1xyXG4gICAgY29uc3QgWyAsIHNldFNob3dIZWFkZXJdID0gdXNlQ29udGV4dChIZWFkZXJDb250ZXh0KTtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBzZXRTaG93SGVhZGVyKGZhbHNlKTtcclxuXHJcbiAgICBsZXQgdGVzdERhdGEgPSB7XHJcbiAgICAgICAgcXVlc3Rpb25fYW5kX29wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IFwiUXVlc3Rpb24gMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25fYXNzZXQ6IFwiaHR0cHM6Ly9hZGFzZHNhZC5jb20vYXNkYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uX2Fzc2V0X3R5cGU6IFwiSU1BR0VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl90ZXh0OiBcIm9wdGlvbiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl9hc3NldDogXCJodHRwczovL2FkYXNkc2FkLmNvbS9hc2Rhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25fYXNzZXRfdHlwZTogXCJJTUFHRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0X29wdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBcIjYyNzIwODYwMzgzYTMzYjcyMTI3ODcwNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogXCI2MjcyMDg2MDM4M2EzM2I3MjEyNzg3MDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogXCJRdWVzdGlvbiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbl9hc3NldDogXCJodHRwczovL2FkYXNkc2FkLmNvbS9hc2Rhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25fYXNzZXRfdHlwZTogXCJJTUFHRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uX3RleHQ6IFwib3B0aW9uIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uX2Fzc2V0OiBcImh0dHBzOi8vYWRhc2RzYWQuY29tL2FzZGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl9hc3NldF90eXBlOiBcIklNQUdFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3Rfb3B0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBcIjYyNzIwODYwMzgzYTMzYjcyMTI3ODcwN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl90ZXh0OiBcIm9wdGlvbiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl9hc3NldDogXCJodHRwczovL2FkYXNkc2FkLmNvbS9hc2Rhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25fYXNzZXRfdHlwZTogXCJJTUFHRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0X29wdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogXCI2MjcyMDg2MDM4M2EzM2I3MjEyNzg3MDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25fdGV4dDogXCJvcHRpb24gM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25fYXNzZXQ6IFwiaHR0cHM6Ly9hZGFzZHNhZC5jb20vYXNkYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uX2Fzc2V0X3R5cGU6IFwiSU1BR0VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdF9vcHRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogXCI2MjcyMDg2MDM4M2EzM2I3MjEyNzg3MDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFwiNjI3MjA4NjAzODNhMzNiNzIxMjc4NzA2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGFyciA9IHRlc3REYXRhLnF1ZXN0aW9uX2FuZF9vcHRpb25zO1xyXG4gICAgbGV0IGxvYyA9IDEwMCAvIGFyci5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGVyY2VudCwgc2V0UGVyY2VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZ2FtZVN0YXR1cywgc2V0R2FtZVN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgaWYgKGdhbWVTdGF0dXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NiYXIgcGVyY2VudD17cGVyY2VudH0gc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c30vPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjAsIHk6JzEwMHZoJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OjEsIHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjh9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM9IHttaW51dGVzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzPSB7c2Vjb25kc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzPXtzZXRNaW51dGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHM9e3NldFNlY29uZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFN0YWNrfT4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJyLm1hcCgoZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBrZXk9e2UuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKGkgLSBjdXJyZW50KSA+PSAwKSAmJiAoKGkgLSBjdXJyZW50KSA8IDMpKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjAsIHk6JzEwMHZoJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6MSwgeTowfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7cm90YXRlOiAtNjAgLHg6Jy0xMDB2dycsIG9wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuOH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBgJHszMDAgLSAoKGkgLSBjdXJyZW50KSAqIDEwMCl9YCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkezEwMCAtICgoaSAtIGN1cnJlbnQpICogNCl9JWAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDpgJHswICsgKChpIC0gY3VycmVudCkgKiAxMCl9cHhgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3BpbmlvbkNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYyA9IHtsb2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzID0geyhpIC0gY3VycmVudCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0ge2N1cnJlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50PXtzZXRDdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0ge3BlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnQ9IHtzZXRQZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbiA9IHtlLnF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge2Uub3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJjbG9zZU5vdGNoLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiY2xvc2VfYnRuX3doaXRlLnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvUmV3YXJkJyk7XHJcbiAgICAgICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BpbmlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJIZWFkZXJDb250ZXh0IiwiUHJvZ3Jlc3NiYXIiLCJPcGluaW9uQ2FyZCIsInN0eWxlcyIsIlRpbWVyIiwiT3BpbmlvbiIsInNldFNob3dIZWFkZXIiLCJyb3V0ZXIiLCJ0ZXN0RGF0YSIsInF1ZXN0aW9uX2FuZF9vcHRpb25zIiwicXVlc3Rpb24iLCJxdWVzdGlvbl9hc3NldCIsInF1ZXN0aW9uX2Fzc2V0X3R5cGUiLCJvcHRpb25zIiwib3B0aW9uX3RleHQiLCJvcHRpb25fYXNzZXQiLCJvcHRpb25fYXNzZXRfdHlwZSIsImNvcnJlY3Rfb3B0aW9uIiwiX2lkIiwiYXJyIiwibG9jIiwibGVuZ3RoIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJwZXJjZW50Iiwic2V0UGVyY2VudCIsInNjb3JlIiwic2V0U2NvcmUiLCJnYW1lU3RhdHVzIiwic2V0R2FtZVN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInByb2dyZXNzIiwiZm9jdXMiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidGltZXIiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwiY2FyZENvbnRhaW5lciIsImNhcmRTdGFjayIsIm1hcCIsImUiLCJpIiwiY2FyZCIsImV4aXQiLCJyb3RhdGUiLCJ4Iiwic3R5bGUiLCJ6SW5kZXgiLCJ3aWR0aCIsInRvcCIsImNyb3NzIiwiY2xvc2VidG4iLCJpbWciLCJzcmMiLCJjbG9zZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/OpinionPannel.js\n");

/***/ })

});