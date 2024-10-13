
// import { createMarkup } from "./utils/createTask.js";
// // LOAD CONTENTS
// window.addEventListener("load", (e) => {
//   e.preventDefault();
//   // ELEMENTS FROM DOM
//   let form = document.getElementById("form");
//   let title = document.getElementById("title");
//   let description = document.getElementById("description");
//   let actionSubmitted = document.getElementById("submit");
//   let editTaskUpdated = {};
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (actionSubmitted.textContent === "modify") {
//       if (title.value) {
//         editTaskUpdated.title.innerText = title.value;
//       }
//       if (description.value) {
//         editTaskUpdated.description.innerText = description.value;
//       }
//       if (editTaskUpdated) {
//         title.value = "";
//         description.value = "";
//       }
//     } else {
//       if (title.value && description.value) {
//         let newTask = {
//           title: title.value,
//           description: description.value,
//         };
//         if (newTask !== null) {
//           const root = createMarkup("ul", document.body);
//           root.classList.add("list");
//           const taskItem = createMarkup("li", root);
//           taskItem.classList.add("task--item");
//           const taskTitle = createMarkup("h3", taskItem, newTask.title);
//           taskTitle.classList.add("task-title");
//           const taskDescription = createMarkup(
//             "p",
//             taskItem,
//             newTask.description
//           );
//           taskDescription.classList.add("task-description");
//           // CREATE ITEM BUTTONS
//           const container = createMarkup("span", taskItem);
//           container.classList.add("container--buttons");
//           const taskDelete = createMarkup("button", container, "DELETE");
//           taskDelete.setAttribute("id", "task--delete");
//           const taskEdit = createMarkup("button", container, "EDIT");
//           taskEdit.setAttribute("id", "task--edit");
//           title.value = "";
//           description.value = "";
//           // ACTION TO DELETE
//           if (taskDelete.textContent === "DELETE") {
//             taskDelete.addEventListener("click", () => taskItem.remove());
//           }

//           //  ACTION EDIT
//           if (taskEdit.textContent === "EDIT") {
//             taskEdit.addEventListener("click", () => {
//               title.value = newTask.title;
//               description.value = newTask.description;
//               actionSubmitted.textContent = "Modify";
//               editTaskUpdated = {
//                 title: taskTitle,
//                 description: taskDescription,
//               };
//             });
//           }
//         }
//       }
//     }
//   });
// });
