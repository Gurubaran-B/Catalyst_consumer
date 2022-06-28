"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/ExplodeButton.js":
/*!*************************************!*\
  !*** ./Components/ExplodeButton.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ExplodeButton.module.css */ \"./styles/ExplodeButton.module.css\");\n/* harmony import */ var _styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Explode(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _use = _slicedToArray(use, 2), experience = _use[0], setExperience = _use[1];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), detonate = ref[0], setDetonate = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().exploder),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: !detonate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                    exit: {\n                        width: \"35px\",\n                        color: \"black\",\n                        overflow: \"hidden\"\n                    },\n                    transition: {\n                        duration: 0.3\n                    },\n                    className: (_styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().explore),\n                    onClick: function() {\n                        setDetonate(true);\n                        ;\n                        setTimeout(function() {\n                            return router.push(props.routeTo);\n                        }, 800);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: props.text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\ExplodeButton.js\",\n                            lineNumber: 22,\n                            columnNumber: 38\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: props.icon,\n                            className: (_styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().angle)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\ExplodeButton.js\",\n                            lineNumber: 23,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\ExplodeButton.js\",\n                    lineNumber: 18,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\ExplodeButton.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            detonate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    borderRadius: \"50%\"\n                },\n                animate: {\n                    backgroundColor: \"#F5F7F6\",\n                    scale: 100\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.7\n                },\n                className: (_styles_ExplodeButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().explode)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\ExplodeButton.js\",\n                lineNumber: 27,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Catalyst_consumer\\\\Components\\\\ExplodeButton.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Explode, \"kip7PLEoj5zu8mMumTu/W/gd4s8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Explode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explode);\nvar _c;\n$RefreshReg$(_c, \"Explode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0V4cGxvZGVCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRDtBQUNHO0FBQ2Q7QUFDZ0I7O0FBSXZELFNBQVNRLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFOztJQUVwQixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBcUNLLElBQUcsa0JBQUhBLEdBQUcsTUFBaENDLFVBQVUsR0FBbUJELElBQUcsR0FBdEIsRUFBRUUsYUFBYSxHQUFJRixJQUFHLEdBQVA7SUFDakMsSUFBZ0NWLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFabkQsUUFZbUIsR0FBaUJBLEdBQWUsR0FBaEMsRUFabkIsV0FZZ0MsR0FBSUEsR0FBZSxHQUFuQjtJQUU1QixxQkFDSSw4REFBQ2UsS0FBRztRQUFDQyxTQUFTLEVBQUVWLGtGQUFlOzswQkFDM0IsOERBQUNGLDBEQUFlOzBCQUNYLENBQUNTLFFBQVEsa0JBQUksOERBQUNWLHdEQUFhO29CQUNaZ0IsSUFBSSxFQUFFO3dCQUFDQyxLQUFLLEVBQUcsTUFBTTt3QkFBRUMsS0FBSyxFQUFDLE9BQU87d0JBQUVDLFFBQVEsRUFBRSxRQUFRO3FCQUFDO29CQUN6REMsVUFBVSxFQUFFO3dCQUFDQyxRQUFRLEVBQUMsR0FBRztxQkFBQztvQkFDMUJSLFNBQVMsRUFBRVYsaUZBQWM7b0JBQUVvQixPQUFPLEVBQUUsV0FBTTt3QkFBQ1osV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOzt3QkFBRWEsVUFBVSxDQUFFO21DQUFNbEIsTUFBTSxDQUFDbUIsSUFBSSxDQUFDcEIsS0FBSyxDQUFDcUIsT0FBTyxDQUFDO3lCQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQUM7O3NDQUM5Ryw4REFBQ2QsS0FBRztzQ0FBRVAsS0FBSyxDQUFDc0IsSUFBSTs7Ozs7Z0NBQU87c0NBQ3ZCLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUV4QixLQUFLLENBQUN5QixJQUFJOzRCQUFFakIsU0FBUyxFQUFFViwrRUFBWTs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDckM7Ozs7O29CQUNsQjtZQUVqQk8sUUFBUSxrQkFBSSw4REFBQ1YscURBQVU7Z0JBQ1JnQyxPQUFPLEVBQUU7b0JBQUNDLFlBQVksRUFBRSxLQUFLO2lCQUFDO2dCQUM5QkMsT0FBTyxFQUFFO29CQUFDQyxlQUFlLEVBQUUsU0FBUztvQkFBRUMsS0FBSyxFQUFDLEdBQUc7aUJBQUM7Z0JBQ2hEaEIsVUFBVSxFQUFFO29CQUFDaUIsS0FBSyxFQUFDLEdBQUc7b0JBQUVoQixRQUFRLEVBQUMsR0FBRztpQkFBQztnQkFDckNSLFNBQVMsRUFBRVYsaUZBQWM7Ozs7O29CQUNoQjs7Ozs7O1lBQ3RCLENBQ1Q7Q0FHTDtHQTVCUUMsT0FBTzs7UUFFR0Ysa0RBQVM7OztBQUZuQkUsS0FBQUEsT0FBTztBQThCaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0V4cGxvZGVCdXR0b24uanM/YWFlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFeHBlcmllbmNlQ29udGV4dCB9IGZyb20gXCIuLi9wYWdlcy9fYXBwXCI7XHJcbmltcG9ydCB7bW90aW9uLCBBbmltYXRlUHJlc2VuY2V9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0V4cGxvZGVCdXR0b24ubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRXhwbG9kZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgWyBleHBlcmllbmNlICxzZXRFeHBlcmllbmNlXSA9IHVzZVxyXG4gICAgY29uc3QgW2RldG9uYXRlLCBzZXREZXRvbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leHBsb2Rlcn0+ICAgXHJcbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgICAgICB7IWRldG9uYXRlICYmIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e3dpZHRoIDogJzM1cHgnLCBjb2xvcjpcImJsYWNrXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuM319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZX0gb25DbGljaz17KCkgPT4ge3NldERldG9uYXRlKHRydWUpOyA7c2V0VGltZW91dCggKCkgPT4gcm91dGVyLnB1c2gocHJvcHMucm91dGVUbyksIDgwMCk7fX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PGRpdj57cHJvcHMudGV4dH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8aW1nIHNyYz17cHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtzdHlsZXMuYW5nbGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPn1cclxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZGV0b25hdGUgJiYgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNGNUY3RjZcIiAsc2NhbGU6MTAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkZWxheTowLjIsIGR1cmF0aW9uOjAuN319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHBsb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2Pn1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9kZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJFeHBlcmllbmNlQ29udGV4dCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIkV4cGxvZGUiLCJwcm9wcyIsInJvdXRlciIsInVzZSIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwiZGV0b25hdGUiLCJzZXREZXRvbmF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImV4cGxvZGVyIiwiYnV0dG9uIiwiZXhpdCIsIndpZHRoIiwiY29sb3IiLCJvdmVyZmxvdyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4cGxvcmUiLCJvbkNsaWNrIiwic2V0VGltZW91dCIsInB1c2giLCJyb3V0ZVRvIiwidGV4dCIsImltZyIsInNyYyIsImljb24iLCJhbmdsZSIsImluaXRpYWwiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGUiLCJkZWxheSIsImV4cGxvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/ExplodeButton.js\n");

/***/ })

});