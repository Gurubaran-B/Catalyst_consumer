/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/Carousel.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/Carousel.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Carousel_section__X7Zqm {\\r\\n  position: relative;\\r\\n  display: ;\\r\\n}\\r\\n\\r\\n.Carousel_container__JTE_C {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  \\r\\n}\\r\\n\\r\\n.Carousel_slider__L8X9n {\\r\\n  width: 100%;\\r\\n  height: 40vh;\\r\\n  margin: 0 auto;\\r\\n  position: relative;\\r\\n  overflow: visible;\\r\\n  -o-object-fit: contain;\\r\\n     object-fit: contain;\\r\\n}\\r\\n\\r\\n.Carousel_slide__BmI4C {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  position: absolute;\\r\\n  top: 0; \\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  transition: transform 1s;\\r\\n}\\r\\n\\r\\n.Carousel_dots__LcdoQ {\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  grid-gap:10px;\\r\\n  gap:10px;\\r\\n  position: absolute;\\r\\n  bottom: 0px;\\r\\n}\\r\\n\\r\\n.Carousel_dot__meksL {\\r\\n  width: 7px;\\r\\n  height: 7px;\\r\\n  border-radius: 50%;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.Carousel_dotActive__lmuHg {\\r\\n  width: 28px;\\r\\n  height: 6px;\\r\\n  border-radius: 25%;\\r\\n  background-color: white;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Carousel.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;;AAErB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,sBAAmB;KAAnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAQ;EAAR,QAAQ;EACR,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB\",\"sourcesContent\":[\".section {\\r\\n  position: relative;\\r\\n  display: ;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  \\r\\n}\\r\\n\\r\\n.slider {\\r\\n  width: 100%;\\r\\n  height: 40vh;\\r\\n  margin: 0 auto;\\r\\n  position: relative;\\r\\n  overflow: visible;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n.slide {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  position: absolute;\\r\\n  top: 0; \\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  transition: transform 1s;\\r\\n}\\r\\n\\r\\n.dots {\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap:10px;\\r\\n  position: absolute;\\r\\n  bottom: 0px;\\r\\n}\\r\\n\\r\\n.dot {\\r\\n  width: 7px;\\r\\n  height: 7px;\\r\\n  border-radius: 50%;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.dotActive {\\r\\n  width: 28px;\\r\\n  height: 6px;\\r\\n  border-radius: 25%;\\r\\n  background-color: white;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section\": \"Carousel_section__X7Zqm\",\n\t\"container\": \"Carousel_container__JTE_C\",\n\t\"slider\": \"Carousel_slider__L8X9n\",\n\t\"slide\": \"Carousel_slide__BmI4C\",\n\t\"dots\": \"Carousel_dots__LcdoQ\",\n\t\"dot\": \"Carousel_dot__meksL\",\n\t\"dotActive\": \"Carousel_dotActive__lmuHg\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL0Nhcm91c2VsLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLG9FQUFvRSx5QkFBeUIsZ0JBQWdCLEtBQUssb0NBQW9DLG9CQUFvQixrQkFBa0IscUNBQXFDLDBCQUEwQixXQUFXLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHFCQUFxQix5QkFBeUIsd0JBQXdCLDZCQUE2Qiw2QkFBNkIsS0FBSyxnQ0FBZ0Msa0JBQWtCLG9CQUFvQix5QkFBeUIsY0FBYyxvQkFBb0IsMEJBQTBCLDhCQUE4QiwrQkFBK0IsS0FBSywrQkFBK0Isb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixlQUFlLHlCQUF5QixrQkFBa0IsS0FBSyw4QkFBOEIsaUJBQWlCLGtCQUFrQix5QkFBeUIsOEJBQThCLEtBQUssb0NBQW9DLGtCQUFrQixrQkFBa0IseUJBQXlCLDhCQUE4QixLQUFLLE9BQU8sMkZBQTJGLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsb0NBQW9DLHlCQUF5QixnQkFBZ0IsS0FBSyxvQkFBb0Isb0JBQW9CLGtCQUFrQixxQ0FBcUMsMEJBQTBCLFdBQVcsaUJBQWlCLGtCQUFrQixtQkFBbUIscUJBQXFCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLEtBQUssZ0JBQWdCLGtCQUFrQixvQkFBb0IseUJBQXlCLGNBQWMsb0JBQW9CLDBCQUEwQiw4QkFBOEIsK0JBQStCLEtBQUssZUFBZSxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZUFBZSx5QkFBeUIsa0JBQWtCLEtBQUssY0FBYyxpQkFBaUIsa0JBQWtCLHlCQUF5Qiw4QkFBOEIsS0FBSyxvQkFBb0Isa0JBQWtCLGtCQUFrQix5QkFBeUIsOEJBQThCLEtBQUssbUJBQW1CO0FBQzdxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9DYXJvdXNlbC5tb2R1bGUuY3NzP2Y3OWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5DYXJvdXNlbF9zZWN0aW9uX19YN1pxbSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiA7XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNlbF9jb250YWluZXJfX0pURV9DIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLkNhcm91c2VsX3NsaWRlcl9fTDhYOW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNlbF9zbGlkZV9fQm1JNEMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwOyBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNlbF9kb3RzX19MY2RvUSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdyaWQtZ2FwOjEwcHg7XFxyXFxuICBnYXA6MTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ2Fyb3VzZWxfZG90X19tZWtzTCB7XFxyXFxuICB3aWR0aDogN3B4O1xcclxcbiAgaGVpZ2h0OiA3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcm91c2VsX2RvdEFjdGl2ZV9fbG11SGcge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICBoZWlnaHQ6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0Nhcm91c2VsLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQW1CO0tBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBUTtFQUFSLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDsgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZG90cyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDoxMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kb3Qge1xcclxcbiAgd2lkdGg6IDdweDtcXHJcXG4gIGhlaWdodDogN3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kb3RBY3RpdmUge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICBoZWlnaHQ6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uXCI6IFwiQ2Fyb3VzZWxfc2VjdGlvbl9fWDdacW1cIixcblx0XCJjb250YWluZXJcIjogXCJDYXJvdXNlbF9jb250YWluZXJfX0pURV9DXCIsXG5cdFwic2xpZGVyXCI6IFwiQ2Fyb3VzZWxfc2xpZGVyX19MOFg5blwiLFxuXHRcInNsaWRlXCI6IFwiQ2Fyb3VzZWxfc2xpZGVfX0JtSTRDXCIsXG5cdFwiZG90c1wiOiBcIkNhcm91c2VsX2RvdHNfX0xjZG9RXCIsXG5cdFwiZG90XCI6IFwiQ2Fyb3VzZWxfZG90X19tZWtzTFwiLFxuXHRcImRvdEFjdGl2ZVwiOiBcIkNhcm91c2VsX2RvdEFjdGl2ZV9fbG11SGdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/Carousel.module.css\n");

/***/ })

});