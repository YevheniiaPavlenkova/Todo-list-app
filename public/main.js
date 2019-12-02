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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: closeModal, openModal, saveTodoItem, showOneTodoItem, showAllTodoItems, statusSortion, prioritySortion, sortByPriority, sortByStatus, searchByTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModal\", function() { return openModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveTodoItem\", function() { return saveTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showOneTodoItem\", function() { return showOneTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAllTodoItems\", function() { return showAllTodoItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statusSortion\", function() { return statusSortion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prioritySortion\", function() { return prioritySortion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortByPriority\", function() { return sortByPriority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortByStatus\", function() { return sortByStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchByTitle\", function() { return searchByTitle; });\n/* harmony import */ var _localStorageInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageInterface */ \"./src/localStorageInterface.js\");\n\nvar GREETINGS = 'You have no tasks yet, so let\\'s change it. Press \"Add new task\" button to add a new task =)';\nvar closeModal = function closeModal(modal) {\n  document.getElementById('modalForm').reset();\n  document.getElementById('itemId').innerHTML = ''; // eslint-disable-next-line no-param-reassign\n\n  modal.style.display = 'none';\n};\nvar openModal = function openModal(modal) {\n  var todoItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (todoItem !== null) {\n    document.getElementById('itemId').innerHTML = String(todoItem.id);\n    document.getElementById('title').value = todoItem.title;\n    document.getElementById('description').value = todoItem.description;\n    var prioritySelection = document.getElementById('priority');\n    prioritySelection.value = todoItem.priorityNum;\n    prioritySelection.options[prioritySelection.selectedIndex].text = todoItem.priorityStr;\n    document.getElementById('deadline').value = todoItem.deadline;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  modal.style.display = 'block';\n};\nvar saveTodoItem = function saveTodoItem() {\n  var title = document.getElementById('title').value;\n  var description = document.getElementById('description').value;\n  var prioritySelection = document.getElementById('priority');\n  var priorityNum = prioritySelection.value;\n  var priorityStr = prioritySelection.options[prioritySelection.selectedIndex].text;\n  var deadline = document.getElementById('deadline').value;\n  var itemId = document.getElementById('itemId').innerHTML;\n  document.getElementById('itemId').innerHTML = '';\n  var todoItemObj = {\n    title: title,\n    description: description,\n    priorityNum: priorityNum,\n    priorityStr: priorityStr,\n    deadline: deadline,\n    done: false,\n    id: itemId ? Number(itemId) : Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"getId\"])()\n  };\n\n  if (itemId) {\n    Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"editTodoItem\"])(todoItemObj);\n  } else {\n    Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"addTodoItem\"])(todoItemObj);\n  }\n};\nvar showOneTodoItem = function showOneTodoItem(todoItem) {\n  var divForTodoItem = document.createElement('div');\n  divForTodoItem.className = todoItem.done ? 'done-todo-item' : 'undone-todo-item';\n  var divForTodoItemContent = document.createElement('div');\n  divForTodoItemContent.className = 'todo-item-content';\n  var divForTodoItemFooter = document.createElement('div');\n  divForTodoItemFooter.className = 'todo-item-footer';\n  var titleHeading = document.createElement('h2');\n  var titleHeadingText = document.createTextNode(\"Title: \".concat(todoItem.title));\n  titleHeading.appendChild(titleHeadingText);\n  divForTodoItemContent.appendChild(titleHeading);\n\n  if (todoItem.description) {\n    var descriptionParagraph = document.createElement('p');\n    var descriptionParagraphText = document.createTextNode(\"Description: \".concat(todoItem.description));\n    descriptionParagraph.appendChild(descriptionParagraphText);\n    divForTodoItemContent.appendChild(descriptionParagraph);\n  }\n\n  var priorityParagraph = document.createElement('p');\n  var priorityParagraphText = document.createTextNode(\"Priority: \".concat(todoItem.priorityStr));\n  priorityParagraph.appendChild(priorityParagraphText);\n  divForTodoItemContent.appendChild(priorityParagraph);\n\n  if (todoItem.deadline) {\n    var deadlineParagraph = document.createElement('p');\n    var deadlineParagraphText = document.createTextNode(\"Deadline: \".concat(todoItem.deadline));\n    deadlineParagraph.appendChild(deadlineParagraphText);\n    divForTodoItemContent.appendChild(deadlineParagraph);\n  }\n\n  var deleteBtn = document.createElement('button');\n  var deleteBtnText = document.createTextNode('Delete');\n  deleteBtn.appendChild(deleteBtnText);\n  deleteBtn.className = 'todo-item-button';\n\n  deleteBtn.onclick = function () {\n    var isItemsListEmpty = Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"deleteTodoItem\"])(todoItem.id);\n    divForTodoItem.remove();\n\n    if (isItemsListEmpty) {\n      document.getElementById('greetings').innerHTML = GREETINGS;\n    }\n  };\n\n  divForTodoItemFooter.appendChild(deleteBtn);\n  var editBtn = document.createElement('button');\n  var editBtnText = document.createTextNode('Edit');\n  editBtn.appendChild(editBtnText);\n  editBtn.className = 'todo-item-button'; // eslint-disable-next-line no-undef\n\n  editBtn.onclick = function () {\n    return openModal(modal, todoItem);\n  };\n\n  divForTodoItemFooter.appendChild(editBtn);\n  var doneBtn = document.createElement('button');\n  var doneBtnText = todoItem.done ? document.createTextNode('Undone') : document.createTextNode('Done');\n  doneBtn.appendChild(doneBtnText);\n  doneBtn.className = 'todo-item-button';\n  doneBtn.title = 'Click this button to change task status';\n\n  doneBtn.onclick = function () {\n    Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"doneTodoItem\"])(todoItem.id);\n\n    if (divForTodoItem.className === 'undone-todo-item') {\n      divForTodoItem.className = 'done-todo-item';\n      doneBtn.innerText = 'Undone';\n    } else {\n      divForTodoItem.className = 'undone-todo-item';\n      doneBtn.innerText = 'Done';\n    }\n  };\n\n  divForTodoItemFooter.appendChild(doneBtn);\n  divForTodoItem.appendChild(divForTodoItemContent);\n  divForTodoItem.appendChild(divForTodoItemFooter);\n  document.getElementById('todoListContent').appendChild(divForTodoItem);\n};\nvar showAllTodoItems = function showAllTodoItems() {\n  var itemsList = Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"getTodoItems\"])();\n\n  if (itemsList.length === 0) {\n    document.getElementById('greetings').innerHTML = GREETINGS;\n  } else {\n    // eslint-disable-next-line no-restricted-syntax\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = itemsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var todoItem = _step.value;\n        showOneTodoItem(todoItem);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }\n};\nvar statusSortion = function statusSortion(itemsList) {\n  return itemsList.sort(function (a, b) {\n    if (a.done > b.done) {\n      return 1;\n    }\n\n    if (a.done < b.done) {\n      return -1;\n    }\n\n    return 0;\n  });\n};\nvar prioritySortion = function prioritySortion(itemsList) {\n  return itemsList.sort(function (a, b) {\n    if (a.done === b.done && a.priorityNum > b.priorityNum) {\n      return -1;\n    }\n\n    if (a.done === b.done && a.priorityNum < b.priorityNum) {\n      return 1;\n    }\n\n    return 0;\n  });\n};\nvar sortByPriority = function sortByPriority() {\n  var itemsList = Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"getTodoItems\"])();\n  itemsList = statusSortion(itemsList);\n  itemsList = prioritySortion(itemsList);\n  Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoItems\"])(itemsList);\n  document.getElementById('todoListContent').innerHTML = '';\n  showAllTodoItems();\n};\nvar sortByStatus = function sortByStatus() {\n  var itemsList = Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"getTodoItems\"])();\n  itemsList = statusSortion(itemsList);\n  Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoItems\"])(itemsList);\n  document.getElementById('todoListContent').innerHTML = '';\n  showAllTodoItems();\n};\nvar searchByTitle = function searchByTitle() {\n  var searchText = document.getElementById('searchInput').value.toLowerCase();\n\n  if (searchText) {\n    var itemsList = Object(_localStorageInterface__WEBPACK_IMPORTED_MODULE_0__[\"getTodoItems\"])();\n    var foundItems = itemsList.filter(function (a) {\n      return a.title.toLowerCase().includes(searchText);\n    });\n    document.getElementById('todoListContent').innerHTML = '';\n\n    if (foundItems.length === 0) {\n      document.getElementById('greetings').innerHTML = 'Nothing found';\n    } else {\n      // eslint-disable-next-line no-restricted-syntax\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = foundItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var todoItem = _step2.value;\n          showOneTodoItem(todoItem);\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n            _iterator2[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n    }\n  } else {\n    document.getElementById('todoListContent').innerHTML = '';\n    showAllTodoItems();\n  }\n};\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nvar modal = document.getElementById('modal');\nvar addTaskBtn = document.getElementById('addTaskBtn');\nvar closeSign = document.getElementById('closeSign');\nvar cancelBtn = document.getElementById('cancel');\nvar modalForm = document.getElementById('modalForm');\nvar sortByPriorityBtn = document.getElementById('sortByPriorityBtn');\nvar sortByStatusBtn = document.getElementById('sortByStatusBtn');\nvar searchByTitleBtn = document.getElementById('searchByTitleBtn');\n\nif (!localStorage.getItem('todoList')) {\n  localStorage.setItem('todoList', JSON.stringify([]));\n}\n\nif (!localStorage.getItem('lastId')) {\n  localStorage.setItem('lastId', JSON.stringify(0));\n}\n\naddTaskBtn.onclick = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"openModal\"])(modal);\n};\n\ncloseSign.onclick = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"closeModal\"])(modal);\n};\n\ncancelBtn.onclick = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"closeModal\"])(modal);\n};\n\nwindow.onclick = function (event) {\n  if (event.target === modal) {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"closeModal\"])(modal);\n  }\n};\n\nmodalForm.onsubmit = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"saveTodoItem\"])();\n};\n\nsortByPriorityBtn.onclick = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"sortByPriority\"])();\n};\n\nsortByStatusBtn.onclick = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"sortByStatus\"])();\n};\n\nsearchByTitleBtn.onclick = function () {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"searchByTitle\"])();\n};\n\nObject(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"showAllTodoItems\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/localStorageInterface.js":
/*!**************************************!*\
  !*** ./src/localStorageInterface.js ***!
  \**************************************/
/*! exports provided: getTodoItems, updateTodoItems, addTodoItem, editTodoItem, deleteTodoItem, doneTodoItem, getId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoItems\", function() { return getTodoItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodoItems\", function() { return updateTodoItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodoItem\", function() { return addTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTodoItem\", function() { return editTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodoItem\", function() { return deleteTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doneTodoItem\", function() { return doneTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getId\", function() { return getId; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar getTodoItems = function getTodoItems() {\n  return JSON.parse(localStorage.getItem('todoList'));\n};\nvar updateTodoItems = function updateTodoItems(items) {\n  return localStorage.setItem('todoList', JSON.stringify(items));\n};\nvar addTodoItem = function addTodoItem(item) {\n  var itemsList = getTodoItems();\n  var newItemsList = [item].concat(_toConsumableArray(itemsList));\n  updateTodoItems(newItemsList);\n};\nvar editTodoItem = function editTodoItem(item) {\n  var itemsList = getTodoItems();\n  var newItemsList = itemsList.map(function (element) {\n    if (element.id === item.id) {\n      return _objectSpread({}, element, {\n        title: item.title,\n        description: item.description,\n        priorityNum: item.priorityNum,\n        priorityStr: item.priorityStr,\n        deadline: item.deadline\n      });\n    }\n\n    return element;\n  });\n  updateTodoItems(newItemsList);\n};\nvar deleteTodoItem = function deleteTodoItem(id) {\n  var itemsList = getTodoItems();\n  var newItemsList = itemsList.filter(function (item) {\n    return item.id !== id;\n  });\n  var isNewItemsListEmpty = false;\n  updateTodoItems(newItemsList);\n\n  if (newItemsList.length === 0) {\n    isNewItemsListEmpty = true;\n  }\n\n  return isNewItemsListEmpty;\n};\nvar doneTodoItem = function doneTodoItem(id) {\n  var itemsList = getTodoItems();\n  var newItemsList = itemsList.map(function (item) {\n    if (item.id === id) {\n      return _objectSpread({}, item, {\n        done: !item.done\n      });\n    }\n\n    return item;\n  });\n  updateTodoItems(newItemsList);\n};\nvar getId = function getId() {\n  var lastId = JSON.parse(localStorage.getItem('lastId'));\n  lastId += 1;\n  localStorage.setItem('lastId', lastId);\n  return lastId;\n};\n\n//# sourceURL=webpack:///./src/localStorageInterface.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });