webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// CommonJS Style
	var a = __webpack_require__(1);
	var b = __webpack_require__(3);
	var lib = __webpack_require__(2);

	console.log(a);
	console.log(b);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// CommonJS Style
	module.exports = 'I am A';
	document.write('<p>I am A</p>');

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// AMD Style
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  document.write('<p>I am B</p>');
	  return 'I am B';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
]);