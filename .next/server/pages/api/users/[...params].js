"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/[...params]";
exports.ids = ["pages/api/users/[...params]"];
exports.modules = {

/***/ "./src/pages/api/users/[...params].tsx":
/*!*********************************************!*\
  !*** ./src/pages/api/users/[...params].tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((request, response)=>{\n    const id = request.query;\n    console.log(id);\n    const users = [\n        {\n            id: 1,\n            name: 'Gustavo'\n        },\n        {\n            id: 2,\n            name: 'Matheus'\n        },\n        {\n            id: 3,\n            name: 'Guilherme'\n        }\n    ];\n    return response.json(users);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3VzZXJzL1suLi5wYXJhbXNdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsaUVBQWdCLENBQUFBLE9BQXNCLEVBQUVDLFFBQXdCLEdBQUcsQ0FBQztJQUNoRSxLQUFLLENBQUNDLEVBQUUsR0FBR0YsT0FBTyxDQUFDRyxLQUFLO0lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsRUFBRTtJQUVkLEtBQUssQ0FBQ0ksS0FBSyxHQUFHLENBQUM7UUFDWCxDQUFDO1lBQUNKLEVBQUUsRUFBRSxDQUFDO1lBQUVLLElBQUksRUFBRSxDQUFTO1FBQUEsQ0FBQztRQUN6QixDQUFDO1lBQUNMLEVBQUUsRUFBRSxDQUFDO1lBQUVLLElBQUksRUFBRSxDQUFTO1FBQUEsQ0FBQztRQUN6QixDQUFDO1lBQUNMLEVBQUUsRUFBRSxDQUFDO1lBQUVLLElBQUksRUFBRSxDQUFXO1FBQUEsQ0FBQztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDTixRQUFRLENBQUNPLElBQUksQ0FBQ0YsS0FBSztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS91c2Vycy9bLi4ucGFyYW1zXS50c3g/MTMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuXG5leHBvcnQgZGVmYXVsdCAocmVxdWVzdDpOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6TmV4dEFwaVJlc3BvbnNlKT0+e1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdC5xdWVyeVxuICAgIGNvbnNvbGUubG9nKGlkKVxuICAgIFxuICAgIGNvbnN0IHVzZXJzID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnR3VzdGF2byd9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnTWF0aGV1cyd9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnR3VpbGhlcm1lJ31cbiAgICBdXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbih1c2Vycylcbn1cbiJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwicmVzcG9uc2UiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInVzZXJzIiwibmFtZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/users/[...params].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/users/[...params].tsx"));
module.exports = __webpack_exports__;

})();