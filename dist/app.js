/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-cors */ "koa-cors");
/* harmony import */ var koa_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-body */ "koa-body");
/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _route_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/index */ "./route/index.ts");






const allRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(koa_body__WEBPACK_IMPORTED_MODULE_4___default()({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024
    }
}));
app.use(koa_cors__WEBPACK_IMPORTED_MODULE_2___default()());
allRouter.use('/test', _route_index__WEBPACK_IMPORTED_MODULE_5__["default"].routes());
app.use(allRouter.routes()).use(allRouter.allowedMethods());
app.listen(3333);


/***/ }),

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
    AK: 'azSrR1H1o5IMgtfdO7zA270C5Q3J9bHoe0-ftiYC',
    SK: 'fK0SYdSZ2QydWZQGMBPiD-WECUdk2Da0XChXo7Ms',
    bucket: 'dingding',
    sourceUrl: 'http://ss.purevivi.art/'
};
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./route/index.ts":
/*!************************!*\
  !*** ./route/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qiniu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qiniu */ "qiniu");
/* harmony import */ var qiniu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qiniu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config/index.ts");





const { AK, SK, bucket } = _config__WEBPACK_IMPORTED_MODULE_4__["default"];
const TestRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
TestRouter.get('/qiniuToken', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const mac = new qiniu__WEBPACK_IMPORTED_MODULE_3___default.a.auth.digest.Mac(AK, SK);
    var options = {
        scope: bucket
    };
    const putPolicy = new qiniu__WEBPACK_IMPORTED_MODULE_3___default.a.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    ctx.body = {
        token: uploadToken
    };
}));
TestRouter.get('/transform', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const startTime = new Date().valueOf();
    return new Promise((resolve, reject) => {
        const data = ctx.request.query;
        const mac = new qiniu__WEBPACK_IMPORTED_MODULE_3___default.a.auth.digest.Mac(AK, SK);
        const pipeline = '0Pure';
        const fops = ['avthumb/mp4/vcodec/libx264'];
        const qnconfig = new qiniu__WEBPACK_IMPORTED_MODULE_3___default.a.conf.Config();
        qnconfig.zone = qiniu__WEBPACK_IMPORTED_MODULE_3___default.a.zone.Zone_z2;
        var options = {
            force: false
        };
        const operManager = new qiniu__WEBPACK_IMPORTED_MODULE_3___default.a.fop.OperationManager(mac, qnconfig);
        operManager.pfop(bucket, data.key, fops, pipeline, options, function (err, respBody, respInfo) {
            if (err) {
                throw err;
            }
            if (respInfo.statusCode == 200) {
                const url = `http://api.qiniu.com/status/get/prefop?id=${respBody.persistentId}`;
                loop(url);
                function loop(url) {
                    axios__WEBPACK_IMPORTED_MODULE_2___default.a
                        .get(url)
                        .then(function (response) {
                        if (response.data.desc.indexOf('successfully') > 0) {
                            const endTime = new Date().valueOf();
                            ctx.body = {
                                key: response.data.items[0].key,
                                timeConsuming: (endTime - startTime) / 1000
                            };
                            resolve('success');
                        }
                        else {
                            const url = `http://api.qiniu.com/status/get/prefop?id=${response.data.id}`;
                            loop(url);
                        }
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                console.log(respInfo.statusCode);
                console.log(respBody);
            }
        });
    });
}));
/* harmony default export */ __webpack_exports__["default"] = (TestRouter);


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pure/Desktop/project/play-H.265-end/app.ts */"./app.ts");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-cors":
/*!***************************!*\
  !*** external "koa-cors" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-cors");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "qiniu":
/*!************************!*\
  !*** external "qiniu" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qiniu");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1ib2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJvZHlwYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxaW5pdVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzbGliXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDVTtBQUNKO0FBQ2M7QUFDWDtBQUNRO0FBQ3ZDLHNCQUFzQixpREFBTTtBQUM1QixnQkFBZ0IsMENBQUc7QUFDbkIsUUFBUSxxREFBWTtBQUNwQixRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsUUFBUSwrQ0FBSTtBQUNaLHVCQUF1QixvREFBVTtBQUNqQztBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ050QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNGO0FBQ047QUFDQTtBQUNLO0FBQy9CLE9BQU8saUJBQWlCLEdBQUcsK0NBQU07QUFDakMsdUJBQXVCLGlEQUFNO0FBQzdCLDZDQUE2Qyx1REFBUztBQUN0RCxvQkFBb0IsNENBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDRDQUE0Qyx1REFBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBSztBQUNsQyx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsc0JBQXNCO0FBQy9GO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixpQkFBaUI7QUFDdEc7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNjLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FMUIsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBjb3JzIGZyb20gJ2tvYS1jb3JzJztcbmltcG9ydCBrb2FCb2R5UGFyc2UgZnJvbSAna29hLWJvZHlwYXJzZXInO1xuaW1wb3J0IGtvYUJvZHkgZnJvbSAna29hLWJvZHknO1xuaW1wb3J0IFRlc3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZS9pbmRleCc7XG5jb25zdCBhbGxSb3V0ZXIgPSBuZXcgcm91dGVyKCk7XG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5hcHAudXNlKGtvYUJvZHlQYXJzZSgpKTtcbmFwcC51c2Uoa29hQm9keSh7XG4gICAgbXVsdGlwYXJ0OiB0cnVlLFxuICAgIGZvcm1pZGFibGU6IHtcbiAgICAgICAgbWF4RmlsZVNpemU6IDIwMCAqIDEwMjQgKiAxMDI0XG4gICAgfVxufSkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYWxsUm91dGVyLnVzZSgnL3Rlc3QnLCBUZXN0Um91dGVyLnJvdXRlcygpKTtcbmFwcC51c2UoYWxsUm91dGVyLnJvdXRlcygpKS51c2UoYWxsUm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuYXBwLmxpc3RlbigzMzMzKTtcbiIsImNvbnN0IGNvbmZpZyA9IHtcbiAgICBBSzogJ2F6U3JSMUgxbzVJTWd0ZmRPN3pBMjcwQzVRM0o5YkhvZTAtZnRpWUMnLFxuICAgIFNLOiAnZkswU1lkU1oyUXlkV1pRR01CUGlELVdFQ1VkazJEYTBYQ2hYbzdNcycsXG4gICAgYnVja2V0OiAnZGluZ2RpbmcnLFxuICAgIHNvdXJjZVVybDogJ2h0dHA6Ly9zcy5wdXJldml2aS5hcnQvJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcWluaXUgZnJvbSAncWluaXUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgeyBBSywgU0ssIGJ1Y2tldCB9ID0gY29uZmlnO1xuY29uc3QgVGVzdFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblRlc3RSb3V0ZXIuZ2V0KCcvcWluaXVUb2tlbicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IG1hYyA9IG5ldyBxaW5pdS5hdXRoLmRpZ2VzdC5NYWMoQUssIFNLKTtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc2NvcGU6IGJ1Y2tldFxuICAgIH07XG4gICAgY29uc3QgcHV0UG9saWN5ID0gbmV3IHFpbml1LnJzLlB1dFBvbGljeShvcHRpb25zKTtcbiAgICBjb25zdCB1cGxvYWRUb2tlbiA9IHB1dFBvbGljeS51cGxvYWRUb2tlbihtYWMpO1xuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICB0b2tlbjogdXBsb2FkVG9rZW5cbiAgICB9O1xufSkpO1xuVGVzdFJvdXRlci5nZXQoJy90cmFuc2Zvcm0nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gICAgICAgIGNvbnN0IG1hYyA9IG5ldyBxaW5pdS5hdXRoLmRpZ2VzdC5NYWMoQUssIFNLKTtcbiAgICAgICAgY29uc3QgcGlwZWxpbmUgPSAnMFB1cmUnO1xuICAgICAgICBjb25zdCBmb3BzID0gWydhdnRodW1iL21wNC92Y29kZWMvbGlieDI2NCddO1xuICAgICAgICBjb25zdCBxbmNvbmZpZyA9IG5ldyBxaW5pdS5jb25mLkNvbmZpZygpO1xuICAgICAgICBxbmNvbmZpZy56b25lID0gcWluaXUuem9uZS5ab25lX3oyO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZvcmNlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcGVyTWFuYWdlciA9IG5ldyBxaW5pdS5mb3AuT3BlcmF0aW9uTWFuYWdlcihtYWMsIHFuY29uZmlnKTtcbiAgICAgICAgb3Blck1hbmFnZXIucGZvcChidWNrZXQsIGRhdGEua2V5LCBmb3BzLCBwaXBlbGluZSwgb3B0aW9ucywgZnVuY3Rpb24gKGVyciwgcmVzcEJvZHksIHJlc3BJbmZvKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BJbmZvLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkucWluaXUuY29tL3N0YXR1cy9nZXQvcHJlZm9wP2lkPSR7cmVzcEJvZHkucGVyc2lzdGVudElkfWA7XG4gICAgICAgICAgICAgICAgbG9vcCh1cmwpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGxvb3AodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZGVzYy5pbmRleE9mKCdzdWNjZXNzZnVsbHknKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcmVzcG9uc2UuZGF0YS5pdGVtc1swXS5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDb25zdW1pbmc6IChlbmRUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLnFpbml1LmNvbS9zdGF0dXMvZ2V0L3ByZWZvcD9pZD0ke3Jlc3BvbnNlLmRhdGEuaWR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BJbmZvLnN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBUZXN0Um91dGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1ib2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1ib2R5cGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1jb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicWluaXVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHNsaWJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==