/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var world;
	world = __webpack_require__(1).world;
	module.exports = {
	  message: 'hello ' + world
	};
	//# sourceMappingURL=/home/haskell/projects/livescript-webpack-boilerplate/node_modules/livescript-loader/index.js!/home/haskell/projects/livescript-webpack-boilerplate/index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  world: 'world!'
	};
	//# sourceMappingURL=/home/haskell/projects/livescript-webpack-boilerplate/node_modules/livescript-loader/index.js!/home/haskell/projects/livescript-webpack-boilerplate/src/world.ls.map


/***/ }
/******/ ]);