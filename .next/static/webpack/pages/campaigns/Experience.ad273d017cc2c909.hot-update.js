"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/Experience",{

/***/ "./pages/campaigns/Experience.js":
/*!***************************************!*\
  !*** ./pages/campaigns/Experience.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_ExperienceCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/ExperienceCard.js */ \"./Components/ExperienceCard.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_app */ \"./pages/_app.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Experience() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.ExperienceContext), experience = ref[0], setExperience = ref[1];\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.HeaderContext), setShowHeader = ref1[1];\n    setShowHeader(true);\n    if (experience.length == 0) {\n        console.log(\"fuck\");\n    } else {\n        console.log(experience);\n    }\n    return(// (<motion.div\n    // initial={{opacity:0}}\n    // animate={{opacity:1}}\n    // transition={{duration:0.6}}\n    // className={styles.main_experience}>\n    //   <div className={styles.container_experience}>\n    //     <button className={styles.next}><img src='/Arrow 1.svg'/></button>\n    //     <div className={styles.halo_container}>\n    //       <div><img src='/Group 20.svg' className={styles.halo}/></div>\n    //       <div className={styles.svg_container}><img src='/emoj.svg' className={styles.svg} /></div>\n    //       <div><img src='/Group 19.svg' className={styles.halo}/></div>\n    //     </div>\n    //     <button className={styles.next}><img src='/Arrow 2.svg'/></button>\n    //   </div>\n    //   <div className={styles.title_display}>\n    //     <h1>{experience.campaign_setup.campaign_name}</h1>\n    //     <div className={styles.buttons}>\n    //       <button><img src='/score_board.svg' className={styles.score}/></button>\n    //       <button><img src='/award.svg' className={styles.award}/></button>\n    //     </div>\n    //     <div className={styles.container_description}>\n    //       <div><u>Description</u></div>\n    //       <div><u>Instructions</u></div>\n    //     </div>\n    //   </div>\n    //   <div className={styles.card_container1}>\n    //     <div className={styles.selector}>\n    //       <div><h2>Every</h2></div>\n    //       <div><h2>New</h2></div>\n    //       <div><h2>Featured</h2></div>\n    //     </div>\n    //     <div className={styles.experienceList}>\n    //          {experience.experiences.map(() => <div className={styles.experienceElement}><ExperienceCard /></div>)}\n    //     </div>\n    //   </div>\n    // </motion.div>) \n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n};\n_s(Experience, \"1dzHBL4b5wvoaVXJIlS1jrYdxdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvRXhwZXJpZW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNEO0FBQ1U7QUFDYztBQUNMO0FBQ0g7O0FBR3hDLFNBQVNTLFVBQVUsR0FBRzs7SUFFbkMsSUFBbUNILEdBQTZCLEdBQTdCQSxpREFBVSxDQUFDRCxtREFBaUIsQ0FBQyxFQVZsRSxVQVVrQixHQUFtQkMsR0FBNkIsR0FBaEQsRUFWbEIsYUFVaUMsR0FBSUEsR0FBNkIsR0FBakM7SUFDL0IsSUFBTSxLQUFPLEdBQUtOLHNEQUFTLEVBQUUsQ0FBckJZLEtBQUs7SUFDYixJQUEyQk4sSUFBeUIsR0FBekJBLGlEQUFVLENBQUNGLCtDQUFhLENBQUMsRUFadEQsYUFZeUIsR0FBSUUsSUFBeUIsR0FBN0I7SUFDdkJPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUlwQixJQUFJSCxVQUFVLENBQUNJLE1BQU0sSUFBSSxDQUFDLEVBQzFCO1FBQ0VDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUNwQixNQUVEO1FBQ0VELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixVQUFVLENBQUM7S0FDeEI7SUFPRCxPQUVFLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFFdEMsa0RBQWtEO0lBRWxELHlFQUF5RTtJQUV6RSw4Q0FBOEM7SUFFOUMsc0VBQXNFO0lBRXRFLG1HQUFtRztJQUVuRyxzRUFBc0U7SUFFdEUsYUFBYTtJQUViLHlFQUF5RTtJQUV6RSxXQUFXO0lBRVgsMkNBQTJDO0lBRTNDLHlEQUF5RDtJQUV6RCx1Q0FBdUM7SUFFdkMsZ0ZBQWdGO0lBRWhGLDBFQUEwRTtJQUUxRSxhQUFhO0lBRWIscURBQXFEO0lBRXJELHNDQUFzQztJQUV0Qyx1Q0FBdUM7SUFFdkMsYUFBYTtJQUViLFdBQVc7SUFFWCw2Q0FBNkM7SUFFN0Msd0NBQXdDO0lBQ3hDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMscUNBQXFDO0lBQ3JDLGFBQWE7SUFFYiw4Q0FBOEM7SUFDOUMsa0hBQWtIO0lBQ2xILGFBQWE7SUFFYixXQUFXO0lBRVgsa0JBQWtCO2tCQUNsQiw2SUFBSyxFQUNMO0NBQ0g7R0F4RnVCRCxVQUFVOztRQUdkVCxrREFBUzs7O0FBSExTLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL0V4cGVyaWVuY2UuanM/ODEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBFeHBlcmllbmNlQ2FyZCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLmpzJ1xyXG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0LCBFeHBlcmllbmNlQ29udGV4dH0gZnJvbSBcIi4uL19hcHBcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhwZXJpZW5jZSgpIHtcclxuXHJcbiAgY29uc3RbZXhwZXJpZW5jZSwgc2V0RXhwZXJpZW5jZV0gPSB1c2VDb250ZXh0KEV4cGVyaWVuY2VDb250ZXh0KTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbICwgc2V0U2hvd0hlYWRlcl0gPSB1c2VDb250ZXh0KEhlYWRlckNvbnRleHQpO1xyXG4gIHNldFNob3dIZWFkZXIodHJ1ZSk7XHJcblxyXG4gIFxyXG5cclxuICBpZiAoZXhwZXJpZW5jZS5sZW5ndGggPT0gMClcclxuICB7XHJcbiAgICBjb25zb2xlLmxvZygnZnVjaycpXHJcbiAgfVxyXG4gIGVsc2UgXHJcbiAge1xyXG4gICAgY29uc29sZS5sb2coZXhwZXJpZW5jZSlcclxuICB9XHJcbiAgXHJcblxyXG5cclxuIFxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG5cclxuICAgIC8vICg8bW90aW9uLmRpdlxyXG4gICAgLy8gaW5pdGlhbD17e29wYWNpdHk6MH19XHJcbiAgICAvLyBhbmltYXRlPXt7b3BhY2l0eToxfX1cclxuICAgIC8vIHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjZ9fVxyXG4gICAgLy8gY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9leHBlcmllbmNlfT5cclxuXHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2V4cGVyaWVuY2V9PlxyXG5cclxuICAgIC8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9PjxpbWcgc3JjPScvQXJyb3cgMS5zdmcnLz48L2J1dHRvbj5cclxuXHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oYWxvX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgLy8gICAgICAgPGRpdj48aW1nIHNyYz0nL0dyb3VwIDIwLnN2ZycgY2xhc3NOYW1lPXtzdHlsZXMuaGFsb30vPjwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnX2NvbnRhaW5lcn0+PGltZyBzcmM9Jy9lbW9qLnN2ZycgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfSAvPjwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgIDxkaXY+PGltZyBzcmM9Jy9Hcm91cCAxOS5zdmcnIGNsYXNzTmFtZT17c3R5bGVzLmhhbG99Lz48L2Rpdj5cclxuXHJcbiAgICAvLyAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dH0+PGltZyBzcmM9Jy9BcnJvdyAyLnN2ZycvPjwvYnV0dG9uPlxyXG5cclxuICAgIC8vICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX2Rpc3BsYXl9PlxyXG5cclxuICAgIC8vICAgICA8aDE+e2V4cGVyaWVuY2UuY2FtcGFpZ25fc2V0dXAuY2FtcGFpZ25fbmFtZX08L2gxPlxyXG5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG5cclxuICAgIC8vICAgICAgIDxidXR0b24+PGltZyBzcmM9Jy9zY29yZV9ib2FyZC5zdmcnIGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfS8+PC9idXR0b24+XHJcblxyXG4gICAgLy8gICAgICAgPGJ1dHRvbj48aW1nIHNyYz0nL2F3YXJkLnN2ZycgY2xhc3NOYW1lPXtzdHlsZXMuYXdhcmR9Lz48L2J1dHRvbj5cclxuXHJcbiAgICAvLyAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2Rlc2NyaXB0aW9ufT5cclxuXHJcbiAgICAvLyAgICAgICA8ZGl2Pjx1PkRlc2NyaXB0aW9uPC91PjwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgIDxkaXY+PHU+SW5zdHJ1Y3Rpb25zPC91PjwvZGl2PlxyXG5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuXHJcbiAgICAvLyAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2NvbnRhaW5lcjF9PlxyXG5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdG9yfT5cclxuICAgIC8vICAgICAgIDxkaXY+PGgyPkV2ZXJ5PC9oMj48L2Rpdj5cclxuICAgIC8vICAgICAgIDxkaXY+PGgyPk5ldzwvaDI+PC9kaXY+XHJcbiAgICAvLyAgICAgICA8ZGl2PjxoMj5GZWF0dXJlZDwvaDI+PC9kaXY+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUxpc3R9PlxyXG4gICAgLy8gICAgICAgICAge2V4cGVyaWVuY2UuZXhwZXJpZW5jZXMubWFwKCgpID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUVsZW1lbnR9PjxFeHBlcmllbmNlQ2FyZCAvPjwvZGl2Pil9XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICA8L2Rpdj5cclxuXHJcbiAgICAvLyA8L21vdGlvbi5kaXY+KSBcclxuICAgIDw+PC8+XHJcbiAgKTtcclxufTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwibW90aW9uIiwic3R5bGVzIiwiRXhwZXJpZW5jZUNhcmQiLCJIZWFkZXJDb250ZXh0IiwiRXhwZXJpZW5jZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJFeHBlcmllbmNlIiwiZXhwZXJpZW5jZSIsInNldEV4cGVyaWVuY2UiLCJxdWVyeSIsInNldFNob3dIZWFkZXIiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/Experience.js\n");

/***/ })

});