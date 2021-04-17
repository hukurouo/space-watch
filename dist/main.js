/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("setInterval(function () {\r\n    // 現在時間の取得\r\n    var now = new Date();\r\n    var s = now.getSeconds() + now.getMilliseconds() / 1000;\r\n    var m = now.getMinutes() + s / 60;\r\n    var h = now.getHours();\r\n    var Hour = String(now.getHours());\r\n    var Min = String(now.getMinutes());\r\n    var Sec = String(now.getSeconds());\r\n    var Day = String(now.getDate());\r\n    var Month = String(now.getMonth() + 1);\r\n    function format(num) {\r\n        if (num.length == 1) {\r\n            return \"0\" + num;\r\n        }\r\n        else {\r\n            return num;\r\n        }\r\n    }\r\n    // 時、分、秒を元に角度を計算\r\n    var degH = h * (360 / 12) + m * (360 / 12 / 60);\r\n    var degM = m * (360 / 60);\r\n    var degS = s * (360 / 60);\r\n    // 各要素を取得\r\n    var elementH = document.querySelector(\".c-clock__hour\");\r\n    var elementM = document.querySelector(\".c-clock__min\");\r\n    var elementS = document.querySelector(\".c-clock__sec\");\r\n    var elementW = document.querySelector(\".watch\");\r\n    var elementD = document.querySelector(\".day\");\r\n    elementW.innerHTML = format(Hour) + \":\" + format(Min) + \":\" + format(Sec);\r\n    elementD.innerHTML = format(Month) + \"/\" + format(Day);\r\n    // styleを追加\r\n    elementH.style.transform = \"rotate(\" + degH + \"deg)\";\r\n    elementM.style.transform = \"rotate(\" + degM + \"deg)\";\r\n    elementS.style.transform = \"rotate(\" + degS + \"deg)\";\r\n}, 10);\r\n\n\n//# sourceURL=webpack://sandbox-animejs/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;