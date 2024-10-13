/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("window.addEventListener(\"load\", (e) => {\r\n  loadTask();\r\n  e.preventDefault();\r\n  const tasks = [];\r\n  let newTask = {};\r\n  let updateEdit = {}\r\n  // GET ELEMENTS\r\n  let form = document.getElementById(\"form\");\r\n  let inputTitle = document.getElementById(\"title\");\r\n  let description = document.getElementById(\"description\");\r\n  let submitted = document.getElementById(\"submit\");\r\n  // FORM SUBMIT\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    if(submitted.textContent === \"Save modified\"){\r\n    if(inputTitle.value){\r\n    updateEdit.title.innerText = inputTitle.value;\r\n    if(description.value){\r\n    updateEdit.description.innerText = description.value;\r\n    } if(updateEdit){\r\n       inputTitle.value = \"\";\r\n       description.value = \"\";\r\n       submitted.innerHTML= `<i class=\"material-icons\">send</i>`;\r\n    }\r\n    }\r\n    }\r\n    if (inputTitle.value !== \"\" && description.value !== \"\") {\r\n      newTask = {\r\n        title: title.value,\r\n        description: description.value,\r\n      };\r\n      tasks.push(newTask);\r\n      saveTask(tasks);\r\n    \r\n      addTask(newTask);\r\n      title.value = \"\";\r\n      description.value = \"\";\r\n     \r\n    }\r\n  });\r\n\r\n  // FUNCTION TO ADD\r\n  \r\n  \r\n  function addTask(task) {\r\n  if(task){\r\n \r\n    const  root = document.createElement(\"ul\");\r\n  root.classList.add(\"list\");\r\n  const item = document.createElement(\"li\");\r\n  item.classList.add(\"task--item\");\r\n  const taskTitle = document.createElement(\"h2\");\r\n  taskTitle.classList.add(\"task-title\");\r\n  taskTitle.textContent = task.title;\r\n  const taskDescription = document.createElement(\"p\");\r\n  taskDescription.textContent = task.description;\r\n  taskDescription.classList.add(\"task-description\");\r\n  const buttons = document.createElement(\"span\");\r\n  buttons.classList.add(\"buttons-container\");\r\n  const taskDeleted = document.createElement(\"button\");\r\n  taskDeleted.innerHTML= `<i class=\"material-icons\">delete</i>`\r\n  taskDeleted.setAttribute(\"id\", \"task--deleted\");\r\n  const taskEdited = document.createElement(\"button\");\r\n  taskEdited.innerHTML= `<i class=\"material-icons\">edit</i>`;\r\n  buttons.append(taskEdited, taskDeleted);\r\n  item.append(taskTitle, taskDescription, buttons);\r\n  root.append(item);\r\n  document.body.append(root);\r\n  // DELETE \r\n  taskDeleted.addEventListener('click', (e)=>{\r\n  console.log(e);\r\n  root.removeChild(item);\r\n  });\r\n  // EDIT \r\n  taskEdited.addEventListener('click', e =>{\r\n  console.log(\"Edit text\", e);\r\n  title.value = task.title;\r\n  description.value = task.description;\r\n  submitted.textContent = \"Save modified\";\r\n  updateEdit = {\r\n  title:taskTitle,\r\n  description:taskDescription\r\n  }\r\n  })\r\n  }\r\n  }\r\n  \r\n  function saveTask(tasks) {\r\n  const saveData = localStorage.setItem(\"tasks\", JSON.stringify(tasks));\r\n  return saveData;\r\n  }\r\n\r\n  function loadTask() {\r\n    let getLocaleStorage = localStorage.getItem(\"tasks\");\r\n     let arr = JSON.parse(getLocaleStorage);\r\n     const uniq =  [...new Set(arr)];\r\n     uniq.forEach(el =>{ \r\n      addTask(el);\r\n     })\r\n     \r\n     \r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://task-app/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;