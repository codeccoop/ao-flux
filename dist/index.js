/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Todos */ \"./src/components/Todos.js\");\n\n\nfunction App({ el, store }) {\n  function addTask(ev) {\n    const value = ev.target.value;\n    if (value) {\n      store.dispatch({\n        type: \"ADD_TODO\",\n        payload: value,\n      });\n    }\n  }\n\n  function dropTask(ev) {\n    const el = ev.currentTarget;\n    const index = Array.from(el.parentElement.children).indexOf(el);\n    store.dispatch({\n      type: \"DROP_TODO\",\n      payload: index,\n    });\n  }\n\n  function render(todos) {\n    el.innerHTML = (0,_components_Todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos);\n    document.getElementById(\"input\").addEventListener(\"change\", addTask);\n    Array.from(document.getElementsByClassName(\"todo\")).forEach((todo) =>\n      todo.addEventListener(\"click\", dropTask)\n    );\n  }\n\n  store.subscribe(render);\n\n  return () => render(store.getState());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://ao-flux/./src/App.js?");

/***/ }),

/***/ "./src/components/List.js":
/*!********************************!*\
  !*** ./src/components/List.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ \"./src/components/ListItem.js\");\n\n\nfunction List(items) {\n  return \"<ol class='list'>\" + items.map(_ListItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) + \"</ol>\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n\n//# sourceURL=webpack://ao-flux/./src/components/List.js?");

/***/ }),

/***/ "./src/components/ListItem.js":
/*!************************************!*\
  !*** ./src/components/ListItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ListItem(item) {\n  return '<li id=\"todo-' + item.id + '\" class=\"todo\">' + item.text + \"</li>\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);\n\n\n//# sourceURL=webpack://ao-flux/./src/components/ListItem.js?");

/***/ }),

/***/ "./src/components/Todos.js":
/*!*********************************!*\
  !*** ./src/components/Todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/components/List.js\");\n\n\nfunction Todos(todos) {\n  return \"<h1>TODO List</h1>\" + '<input id=\"input\" type=\"text\" />' + \"<hr>\" + (0,_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);\n\n\n//# sourceURL=webpack://ao-flux/./src/components/Todos.js?");

/***/ }),

/***/ "./src/data/todos.js":
/*!***************************!*\
  !*** ./src/data/todos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todos = [\n  { id: 0, text: \"Learn flux\" },\n  { id: 1, text: \"Learn react\" },\n  { id: 2, text: \"Become a developer\" },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);\n\n\n//# sourceURL=webpack://ao-flux/./src/data/todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ \"./src/store/actions.js\");\n/* harmony import */ var _data_todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/todos */ \"./src/data/todos.js\");\n\n\n\n\n\nconst store = (0,_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_data_todos__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nfor (let action in _store_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n  store.registerAction(action, _store_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"][action]);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const el = document.getElementById(\"app\");\n  const app = (0,_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ el, store });\n  app();\n});\n\n\n//# sourceURL=webpack://ao-flux/./src/index.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst actions = {\n  \"ADD_TODO\": function (state, todo) {\n    return state.concat({ id: state.length, text: todo });\n  },\n  \"DROP_TODO\": function (state, index) {\n    return state.slice(0, index).concat(state.slice(index + 1, state.length));\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actions);\n\n\n//# sourceURL=webpack://ao-flux/./src/store/actions.js?");

/***/ }),

/***/ "./src/store/dispatcher.js":
/*!*********************************!*\
  !*** ./src/store/dispatcher.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Dispatcher() {\n  const actions = {};\n\n  return {\n    dispatch: (state, action) => {\n      return new Promise((res) => {\n        if (actions[action.type]) res(actions[action.type](state, action.payload));\n      });\n    },\n    register: (type, handler) => {\n      actions[type] = handler;\n    },\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dispatcher);\n\n\n//# sourceURL=webpack://ao-flux/./src/store/dispatcher.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ \"./src/store/dispatcher.js\");\n\n\nfunction Store(initialState) {\n  let state = initialState || [];\n  const dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const consumers = [];\n\n  return {\n    getState: () => Object.freeze(state),\n    registerAction: (type, handler) => dispatcher.register(type, handler),\n    subscribe: (consumer) => consumers.push(consumer),\n    dispatch: (action) =>\n      dispatcher.dispatch(state, action).then((newState) => {\n        if (newState) {\n          state = newState;\n          consumers.forEach((consumer) => consumer(newState));\n        }\n      }),\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);\n\n\n//# sourceURL=webpack://ao-flux/./src/store/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;