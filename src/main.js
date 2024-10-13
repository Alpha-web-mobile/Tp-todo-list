import './scss/main.scss';
window.addEventListener("load", (e) => {
  loadTask();
  e.preventDefault();
  const tasks = [];
  let newTask = {};
  let updateEdit = {}
  // GET ELEMENTS
  let form = document.getElementById("form");
  let inputTitle = document.getElementById("title");
  let description = document.getElementById("description");
  let submitted = document.getElementById("submit");
  // FORM SUBMIT
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(submitted.textContent === "Save modified"){
    if(inputTitle.value){
    updateEdit.title.innerText = inputTitle.value;
    if(description.value){
    updateEdit.description.innerText = description.value;
    } if(updateEdit){
       inputTitle.value = "";
       description.value = "";
       submitted.innerHTML= `<i class="material-icons">send</i>`;
    }
    }
    }
    if (inputTitle.value !== "" && description.value !== "") {
      newTask = {
        title: title.value,
        description: description.value,
      };
      tasks.push(newTask);
      saveTask(tasks);
    
      addTask(newTask);
      title.value = "";
      description.value = "";
     
    }
  });

  // FUNCTION TO ADD
  
  
  function addTask(task) {
  if(task){
 
    const  root = document.createElement("ul");
  root.classList.add("list");
  const item = document.createElement("li");
  item.classList.add("task--item");
  const taskTitle = document.createElement("h2");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = task.description;
  taskDescription.classList.add("task-description");
  const buttons = document.createElement("span");
  buttons.classList.add("buttons-container");
  const taskDeleted = document.createElement("button");
  taskDeleted.innerHTML= `<i class="material-icons">delete</i>`
  taskDeleted.setAttribute("id", "task--deleted");
  const taskEdited = document.createElement("button");
  taskEdited.innerHTML= `<i class="material-icons">edit</i>`;
  buttons.append(taskEdited, taskDeleted);
  item.append(taskTitle, taskDescription, buttons);
  root.append(item);
  document.body.append(root);
  // DELETE 
  taskDeleted.addEventListener('click', (e)=>{
  console.log(e);
  root.removeChild(item);
  });
  // EDIT 
  taskEdited.addEventListener('click', e =>{
  console.log("Edit text", e);
  title.value = task.title;
  description.value = task.description;
  submitted.textContent = "Save modified";
  updateEdit = {
  title:taskTitle,
  description:taskDescription
  }
  })
  }
  }
  
  function saveTask(tasks) {
  const saveData = localStorage.setItem("tasks", JSON.stringify(tasks));
  return saveData;
  }

  function loadTask() {
    let getLocaleStorage = localStorage.getItem("tasks");
     let arr = JSON.parse(getLocaleStorage);
     const uniq =  [...new Set(arr)];
     uniq.forEach(el =>{ 
      addTask(el);
     })
     
     
  }
});
