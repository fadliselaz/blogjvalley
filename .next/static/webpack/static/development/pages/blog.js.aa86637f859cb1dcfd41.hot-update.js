webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/pages/blog/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.scss */ \"./src/pages/blog/blog.scss\");\n/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blog_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/navbar/Navbar */ \"./src/component/navbar/Navbar.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fadliselaz/next/nextApp/src/pages/blog/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var data = _ref.data;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(data);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Blog page\"), __jsx(\"meta\", {\n    charset: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Dapatkan Tutorial web programing gratis\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"HTML, CSS, JavaScript\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"fadliselaz\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  })), __jsx(_component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    active: \"blog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }), __jsx(\"h1\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Blog\"), __jsx(\"div\", {\n    className: \"containerBlog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, data.map(function (e) {\n    var image = e.image.formats.medium;\n    console.log(image);\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n      style: {\n        width: '48%'\n      },\n      key: e.id,\n      className: \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Img, {\n      variant: \"top\",\n      src: image.url,\n      alt: \"gambar jvalley\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Title, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }\n    }, e.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Text, {\n      className: \"cardText\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }\n    }, e.trigerText), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      variant: \"primary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }\n    }, \"selengkapnya\")));\n  })));\n};\n\n_s(Blog, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Blog;\nBlog.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res, data;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://admin.jvalleyschool.com/blog-contents');\n\n        case 2:\n          res = _context.sent;\n          _context.next = 5;\n          return res.json();\n\n        case 5:\n          data = _context.sent;\n          return _context.abrupt(\"return\", {\n            data: data\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmxvZy9pbmRleC5qc3g/NDQ5OSJdLCJuYW1lcyI6WyJCbG9nIiwiZGF0YSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlIiwiaW1hZ2UiLCJmb3JtYXRzIiwibWVkaXVtIiwid2lkdGgiLCJpZCIsInVybCIsInRpdGxlIiwidHJpZ2VyVGV4dCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3JCQyx5REFBUyxDQUFDLFlBQUk7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDSCxHQUZRLEVBRVAsRUFGTyxDQUFUO0FBR0YsU0FDRSxtRUFDQSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBQyx5Q0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUJBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBb0IsV0FBTyxFQUFDLFlBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FEQSxFQVNBLE1BQUMsZ0VBQUQ7QUFBUSxVQUFNLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEEsRUFVSTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixFQVdBO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLQSxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUs7QUFDWCxRQUFNQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCQyxNQUE5QjtBQUNBTixXQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNBLFdBRUksTUFBQyxvREFBRDtBQUFNLFdBQUssRUFBRTtBQUFFRyxhQUFLLEVBQUU7QUFBVCxPQUFiO0FBQStCLFNBQUcsRUFBRUosQ0FBQyxDQUFDSyxFQUF0QztBQUEwQyxlQUFTLEVBQUMsTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsYUFBTyxFQUFDLEtBQWxCO0FBQXdCLFNBQUcsRUFBRUosS0FBSyxDQUFDSyxHQUFuQztBQUF3QyxTQUFHLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEQSxFQUVBLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFOLENBQUMsQ0FBQ08sS0FBZixDQURKLEVBRUksTUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxlQUFTLEVBQUMsVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDUCxDQUFDLENBQUNRLFVBREgsQ0FGSixFQUtJLE1BQUMsc0RBQUQ7QUFBUSxhQUFPLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSixDQUZBLENBRko7QUFhSCxHQWhCQSxDQUZMLENBWEEsQ0FERjtBQW1DRCxDQXZDRDs7R0FBTWQsSTs7S0FBQUEsSTtBQXlDTkEsSUFBSSxDQUFDZSxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNEQyxLQUFLLENBQUMsK0NBQUQsQ0FESjs7QUFBQTtBQUNiQyxhQURhO0FBQUE7QUFBQSxpQkFFQUEsR0FBRyxDQUFDQyxJQUFKLEVBRkE7O0FBQUE7QUFFYmpCLGNBRmE7QUFBQSwyQ0FHYjtBQUNGQSxnQkFBSSxFQUFHQTtBQURMLFdBSGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFRZUQsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvZy5zY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnQvbmF2YmFyL05hdmJhcidcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDYXJkLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgQmxvZyA9ICh7ZGF0YX0pID0+IHtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZyBwYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRhcGF0a2FuIFR1dG9yaWFsIHdlYiBwcm9ncmFtaW5nIGdyYXRpc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJIVE1MLCBDU1MsIEphdmFTY3JpcHRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImZhZGxpc2VsYXpcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXZiYXIgYWN0aXZlPSdibG9nJy8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5CbG9nPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQmxvZyc+XG4gICAgXG4gICAgICAgIHtkYXRhLm1hcCgoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZS5pbWFnZS5mb3JtYXRzLm1lZGl1bVxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0OCUnIH19IGtleT17ZS5pZH0gY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17aW1hZ2UudXJsfSBhbHQ9J2dhbWJhciBqdmFsbGV5Jy8+XG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e2UudGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT0nY2FyZFRleHQnPlxuICAgICAgICAgICAgICAgICAgICB7ZS50cmlnZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPnNlbGVuZ2thcG55YTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSl9XG5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpPT57XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYWRtaW4uanZhbGxleXNjaG9vbC5jb20vYmxvZy1jb250ZW50cycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm57XG4gICAgICAgIGRhdGEgOiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/index.jsx\n");

/***/ })

})