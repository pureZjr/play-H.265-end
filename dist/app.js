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
/* harmony import */ var _utils_ffmpeg_handle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ffmpeg-handle */ "./utils/ffmpeg-handle.ts");






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
TestRouter.get('/ffmpegTransform', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    Object(_utils_ffmpeg_handle__WEBPACK_IMPORTED_MODULE_5__["default"])();
}));
/* harmony default export */ __webpack_exports__["default"] = (TestRouter);


/***/ }),

/***/ "./utils/ffmpeg-handle.ts":
/*!********************************!*\
  !*** ./utils/ffmpeg-handle.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return run; });
function run() {
    return new Promise((resolve, reject) => {
        const ffmpeg = __webpack_require__(/*! fluent-ffmpeg */ "fluent-ffmpeg");
        let startTime;
        const proc = new ffmpeg();
        proc.addInput(__webpack_require__(/*! path */ "path").join(__dirname, '../videos/h.265.mp4'))
            .on('start', function (ffmpegCommand) {
            startTime = new Date().valueOf();
            console.log(ffmpegCommand);
        })
            .on('progress', function (data) {
            console.log(data);
        })
            .on('end', function () {
            const timeConsuming = (new Date().valueOf() - startTime) / 1000;
            console.log('end', timeConsuming);
            resolve({
                timeConsuming
            });
        })
            .on('error', function (error) {
            console.log(error);
            reject(error);
        })
            .outputOptions(['-c:v libx264'])
            .addOptions(['-preset ultrafast', '-crf 23', '-profile Baseline', '-tune fastdecode'])
            .output(__webpack_require__(/*! path */ "path").join(__dirname, '../videosOuput/out.mp4'))
            .run();
    });
}

/* WEBPACK VAR INJECTION */}.call(this, "utils"))

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

/***/ "fluent-ffmpeg":
/*!********************************!*\
  !*** external "fluent-ffmpeg" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fluent-ffmpeg");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZm1wZWctaGFuZGxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmx1ZW50LWZmbXBlZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1ib2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJvZHlwYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicWluaXVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQ1U7QUFDSjtBQUNjO0FBQ1g7QUFDUTtBQUN2QyxzQkFBc0IsaURBQU07QUFDNUIsZ0JBQWdCLDBDQUFHO0FBQ25CLFFBQVEscURBQVk7QUFDcEIsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFFBQVEsK0NBQUk7QUFDWix1QkFBdUIsb0RBQVU7QUFDakM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNOdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNGO0FBQ047QUFDQTtBQUNLO0FBQ21CO0FBQ2xELE9BQU8saUJBQWlCLEdBQUcsK0NBQU07QUFDakMsdUJBQXVCLGlEQUFNO0FBQzdCLDZDQUE2Qyx1REFBUztBQUN0RCxvQkFBb0IsNENBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDRDQUE0Qyx1REFBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBSztBQUNsQyx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsc0JBQXNCO0FBQy9GO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixpQkFBaUI7QUFDdEc7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNELGtEQUFrRCx1REFBUztBQUMzRCxJQUFJLG9FQUFZO0FBQ2hCLENBQUM7QUFDYyx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkUxQjtBQUFBO0FBQWU7QUFDZjtBQUNBLHVCQUF1QixtQkFBTyxDQUFDLG9DQUFlO0FBQzlDO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxrQkFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLGtCQUFNO0FBQ2xDO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCByb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgY29ycyBmcm9tICdrb2EtY29ycyc7XG5pbXBvcnQga29hQm9keVBhcnNlIGZyb20gJ2tvYS1ib2R5cGFyc2VyJztcbmltcG9ydCBrb2FCb2R5IGZyb20gJ2tvYS1ib2R5JztcbmltcG9ydCBUZXN0Um91dGVyIGZyb20gJy4vcm91dGUvaW5kZXgnO1xuY29uc3QgYWxsUm91dGVyID0gbmV3IHJvdXRlcigpO1xuY29uc3QgYXBwID0gbmV3IEtvYSgpO1xuYXBwLnVzZShrb2FCb2R5UGFyc2UoKSk7XG5hcHAudXNlKGtvYUJvZHkoe1xuICAgIG11bHRpcGFydDogdHJ1ZSxcbiAgICBmb3JtaWRhYmxlOiB7XG4gICAgICAgIG1heEZpbGVTaXplOiAyMDAgKiAxMDI0ICogMTAyNFxuICAgIH1cbn0pKTtcbmFwcC51c2UoY29ycygpKTtcbmFsbFJvdXRlci51c2UoJy90ZXN0JywgVGVzdFJvdXRlci5yb3V0ZXMoKSk7XG5hcHAudXNlKGFsbFJvdXRlci5yb3V0ZXMoKSkudXNlKGFsbFJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcbmFwcC5saXN0ZW4oMzMzMyk7XG4iLCJjb25zdCBjb25maWcgPSB7XG4gICAgQUs6ICdhelNyUjFIMW81SU1ndGZkTzd6QTI3MEM1UTNKOWJIb2UwLWZ0aVlDJyxcbiAgICBTSzogJ2ZLMFNZZFNaMlF5ZFdaUUdNQlBpRC1XRUNVZGsyRGEwWENoWG83TXMnLFxuICAgIGJ1Y2tldDogJ2RpbmdkaW5nJyxcbiAgICBzb3VyY2VVcmw6ICdodHRwOi8vc3MucHVyZXZpdmkuYXJ0Lydcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHFpbml1IGZyb20gJ3Fpbml1JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBmZm1wZWdIYW5kbGUgZnJvbSAnLi4vdXRpbHMvZmZtcGVnLWhhbmRsZSc7XG5jb25zdCB7IEFLLCBTSywgYnVja2V0IH0gPSBjb25maWc7XG5jb25zdCBUZXN0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuVGVzdFJvdXRlci5nZXQoJy9xaW5pdVRva2VuJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgbWFjID0gbmV3IHFpbml1LmF1dGguZGlnZXN0Lk1hYyhBSywgU0spO1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzY29wZTogYnVja2V0XG4gICAgfTtcbiAgICBjb25zdCBwdXRQb2xpY3kgPSBuZXcgcWluaXUucnMuUHV0UG9saWN5KG9wdGlvbnMpO1xuICAgIGNvbnN0IHVwbG9hZFRva2VuID0gcHV0UG9saWN5LnVwbG9hZFRva2VuKG1hYyk7XG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIHRva2VuOiB1cGxvYWRUb2tlblxuICAgIH07XG59KSk7XG5UZXN0Um91dGVyLmdldCgnL3RyYW5zZm9ybScsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5xdWVyeTtcbiAgICAgICAgY29uc3QgbWFjID0gbmV3IHFpbml1LmF1dGguZGlnZXN0Lk1hYyhBSywgU0spO1xuICAgICAgICBjb25zdCBwaXBlbGluZSA9ICcwUHVyZSc7XG4gICAgICAgIGNvbnN0IGZvcHMgPSBbJ2F2dGh1bWIvbXA0L3Zjb2RlYy9saWJ4MjY0J107XG4gICAgICAgIGNvbnN0IHFuY29uZmlnID0gbmV3IHFpbml1LmNvbmYuQ29uZmlnKCk7XG4gICAgICAgIHFuY29uZmlnLnpvbmUgPSBxaW5pdS56b25lLlpvbmVfejI7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgZm9yY2U6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wZXJNYW5hZ2VyID0gbmV3IHFpbml1LmZvcC5PcGVyYXRpb25NYW5hZ2VyKG1hYywgcW5jb25maWcpO1xuICAgICAgICBvcGVyTWFuYWdlci5wZm9wKGJ1Y2tldCwgZGF0YS5rZXksIGZvcHMsIHBpcGVsaW5lLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyLCByZXNwQm9keSwgcmVzcEluZm8pIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcEluZm8uc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5xaW5pdS5jb20vc3RhdHVzL2dldC9wcmVmb3A/aWQ9JHtyZXNwQm9keS5wZXJzaXN0ZW50SWR9YDtcbiAgICAgICAgICAgICAgICBsb29wKHVybCk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbG9vcCh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kZXNjLmluZGV4T2YoJ3N1Y2Nlc3NmdWxseScpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiByZXNwb25zZS5kYXRhLml0ZW1zWzBdLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNvbnN1bWluZzogKGVuZFRpbWUgLSBzdGFydFRpbWUpIC8gMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkucWluaXUuY29tL3N0YXR1cy9nZXQvcHJlZm9wP2lkPSR7cmVzcG9uc2UuZGF0YS5pZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3AodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcEluZm8uc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcEJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pKTtcblRlc3RSb3V0ZXIuZ2V0KCcvZmZtcGVnVHJhbnNmb3JtJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgZmZtcGVnSGFuZGxlKCk7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBUZXN0Um91dGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZmbXBlZyA9IHJlcXVpcmUoJ2ZsdWVudC1mZm1wZWcnKTtcbiAgICAgICAgbGV0IHN0YXJ0VGltZTtcbiAgICAgICAgY29uc3QgcHJvYyA9IG5ldyBmZm1wZWcoKTtcbiAgICAgICAgcHJvYy5hZGRJbnB1dChyZXF1aXJlKCdwYXRoJykuam9pbihfX2Rpcm5hbWUsICcuLi92aWRlb3MvaC4yNjUubXA0JykpXG4gICAgICAgICAgICAub24oJ3N0YXJ0JywgZnVuY3Rpb24gKGZmbXBlZ0NvbW1hbmQpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmZtcGVnQ29tbWFuZCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lQ29uc3VtaW5nID0gKG5ldyBEYXRlKCkudmFsdWVPZigpIC0gc3RhcnRUaW1lKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kJywgdGltZUNvbnN1bWluZyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICB0aW1lQ29uc3VtaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAub3V0cHV0T3B0aW9ucyhbJy1jOnYgbGlieDI2NCddKVxuICAgICAgICAgICAgLmFkZE9wdGlvbnMoWyctcHJlc2V0IHVsdHJhZmFzdCcsICctY3JmIDIzJywgJy1wcm9maWxlIEJhc2VsaW5lJywgJy10dW5lIGZhc3RkZWNvZGUnXSlcbiAgICAgICAgICAgIC5vdXRwdXQocmVxdWlyZSgncGF0aCcpLmpvaW4oX19kaXJuYW1lLCAnLi4vdmlkZW9zT3VwdXQvb3V0Lm1wNCcpKVxuICAgICAgICAgICAgLnJ1bigpO1xuICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmx1ZW50LWZmbXBlZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJvZHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJvZHlwYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFpbml1XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=