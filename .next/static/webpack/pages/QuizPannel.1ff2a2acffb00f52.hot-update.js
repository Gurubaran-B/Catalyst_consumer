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

/***/ "./pages/Reward.js":
/*!*************************!*\
  !*** ./pages/Reward.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_RewardCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/RewardCard.js */ \"./Components/RewardCard.js\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lottie */ \"./node_modules/react-lottie/dist/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _asset_Lottie_muscle_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/Lottie/muscle.json */ \"./asset/Lottie/muscle.json\");\n/* harmony import */ var _styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Reward.module.css */ \"./styles/Reward.module.css\");\n/* harmony import */ var _styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Reward() {\n    var badge = {\n        loop: true,\n        autoplay: true,\n        animationData: _asset_Lottie_muscle_json__WEBPACK_IMPORTED_MODULE_4__,\n        rendererSettings: {\n            preserveAspectRatio: \"xMidYMid slice\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().outer) + \" \" + (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().circle),\n                    initial: {\n                        scale: 0.9\n                    },\n                    animate: {\n                        scale: 1\n                    },\n                    transition: {\n                        duration: 1.2,\n                        scale: {\n                            type: \"spring\",\n                            stiffness: 250,\n                            mass: 3.5,\n                            bounce: 10\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().inner) + \" \" + (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().circle),\n                        initial: {\n                            scale: 1.2\n                        },\n                        animate: {\n                            scale: 1\n                        },\n                        transition: {\n                            duration: 1.2,\n                            scale: {\n                                type: \"spring\",\n                                stiffness: 250,\n                                mass: 3.5,\n                                bounce: 10\n                            },\n                            yoyo: yoyo\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().field),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().emoj),\n                                    initial: {\n                                        scale: 1.3\n                                    },\n                                    animate: {\n                                        scale: 1\n                                    },\n                                    transition: {\n                                        duration: 1.2,\n                                        scale: {\n                                            type: \"spring\",\n                                            stiffness: 250,\n                                            mass: 3.5,\n                                            bounce: 10\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_lottie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        options: badge,\n                                        height: 100,\n                                        width: 100\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().fieldElements),\n                                    animate: {\n                                        rotate: 360\n                                    },\n                                    transition: {\n                                        loop: Infinity,\n                                        duration: 15,\n                                        ease: \"linear\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                            className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().globe),\n                                            animate: {\n                                                rotate: -360\n                                            },\n                                            transition: {\n                                                loop: Infinity,\n                                                duration: 10,\n                                                ease: \"linear\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"Globe.svg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                            className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().cube),\n                                            animate: {\n                                                rotate: 360\n                                            },\n                                            transition: {\n                                                loop: Infinity,\n                                                duration: 10,\n                                                ease: \"linear\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"Cube.svg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Reward_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottom),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_RewardCard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\pages\\\\Reward.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c = Reward;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reward);\nvar _c;\n$RefreshReg$(_c, \"Reward\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCx3RUFBWTs0Q0FDdkJhLE9BQU8sRUFBRTtnREFBQ2UsTUFBTSxFQUFFLENBQUMsR0FBRzs2Q0FBQzs0Q0FDdkJkLFVBQVUsRUFBRTtnREFBQ1gsSUFBSSxFQUFFMEIsUUFBUTtnREFBRWQsUUFBUSxFQUFFLEVBQUU7Z0RBQUVlLElBQUksRUFBRSxRQUFROzZDQUFDO3NEQUUxRCw0RUFBQ0UsS0FBRztnREFBQ0MsR0FBRyxFQUFDLFdBQVc7Ozs7O29EQUFFOzs7OztnREFFYjtzREFFYiw4REFBQ25DLHFEQUFVOzRDQUNQVyxTQUFTLEVBQUVULHVFQUFXOzRDQUN0QmEsT0FBTyxFQUFFO2dEQUFDZSxNQUFNLEVBQUUsR0FBRzs2Q0FBQzs0Q0FDdEJkLFVBQVUsRUFBRTtnREFBQ1gsSUFBSSxFQUFFMEIsUUFBUTtnREFBRWQsUUFBUSxFQUFFLEVBQUU7Z0RBQUVlLElBQUksRUFBRSxRQUFROzZDQUFDO3NEQUUxRCw0RUFBQ0UsS0FBRztnREFBQ0MsR0FBRyxFQUFDLFVBQVU7Ozs7O29EQUFFOzs7OztnREFFWjs7Ozs7O3dDQUVKOzs7Ozs7Z0NBSVg7Ozs7OzRCQUVHOzs7Ozt3QkFFSjs7Ozs7b0JBRUo7MEJBRWIsOERBQUN6QixLQUFHO2dCQUFDQyxTQUFTLEVBQUVULHlFQUFhOzBCQUN6Qiw0RUFBQ0osaUVBQVU7Ozs7d0JBQUU7Ozs7O29CQUNYOzs7Ozs7WUFFSixDQUNSO0NBRUw7QUExRlFLLEtBQUFBLE1BQU07QUE0RmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SZXdhcmQuanM/MmFjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmV3YXJkQ2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1Jld2FyZENhcmQuanMnXHJcbmltcG9ydCBMb3R0aWUgZnJvbSAncmVhY3QtbG90dGllJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBtdXNjbGUgZnJvbSAnLi4vYXNzZXQvTG90dGllL211c2NsZS5qc29uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUmV3YXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gUmV3YXJkKCkge1xyXG5cclxuICAgIGNvbnN0IGJhZGdlID0ge1xyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogbXVzY2xlLFxyXG4gICAgICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIlxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDF9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuNX19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wib3V0ZXJcIl0gKyBcIiBcIiArIHN0eWxlc1tcImNpcmNsZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7c2NhbGU6IDAuOX19XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e3NjYWxlOiAxfX1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MS4yLCBzY2FsZTogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDI1MCwgbWFzczogMy41LCBib3VuY2U6IDEwIH19fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiaW5uZXJcIl0gKyBcIiBcIiArIHN0eWxlc1tcImNpcmNsZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e3NjYWxlOiAxLjJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7c2NhbGU6IDF9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MS4yLCBzY2FsZTogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDI1MCwgbWFzczogMy41LCBib3VuY2U6IDEwIH0sIHlveW99fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGxpcHNlfT48aW1nIHNyYz0nRWxsaXBzZS5zdmcnLz48L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lbW9qfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tzY2FsZTogMS4zfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7c2NhbGU6IDF9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjoxLjIsIHNjYWxlOiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMjUwLCBtYXNzOiAzLjUsIGJvdW5jZTogMTAgfX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb3R0aWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17YmFkZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7cm90YXRlOiAzNjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tsb29wOiBJbmZpbml0eSwgZHVyYXRpb246IDE1LCBlYXNlOiAnbGluZWFyJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ2xvYmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tyb3RhdGU6IC0zNjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7bG9vcDogSW5maW5pdHksIGR1cmF0aW9uOiAxMCwgZWFzZTogJ2xpbmVhcid9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdHbG9iZS5zdmcnLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3ViZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e3JvdGF0ZTogMzYwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2xvb3A6IEluZmluaXR5LCBkdXJhdGlvbjogMTAsIGVhc2U6ICdsaW5lYXInfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nQ3ViZS5zdmcnLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgPFJld2FyZENhcmQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJld2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZXdhcmRDYXJkIiwiTG90dGllIiwibW90aW9uIiwibXVzY2xlIiwic3R5bGVzIiwiUmV3YXJkIiwiYmFkZ2UiLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwicmVuZGVyZXJTZXR0aW5ncyIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzY2FsZSIsInR5cGUiLCJzdGlmZm5lc3MiLCJtYXNzIiwiYm91bmNlIiwieW95byIsImZpZWxkIiwiZW1vaiIsIm9wdGlvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImZpZWxkRWxlbWVudHMiLCJyb3RhdGUiLCJJbmZpbml0eSIsImVhc2UiLCJnbG9iZSIsImltZyIsInNyYyIsImN1YmUiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Reward.js\n");

/***/ })

});