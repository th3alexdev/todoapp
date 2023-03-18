
import { removeTask } from "./app/removeTask.js";
import { checkTask } from "./app/checkTask.js";

let createdTskCounter = 0
const createdTasks = document.getElementById("createdTasks")

let doneTskCounter = 0
const doneTasks = document.getElementById("doneTasks")
doneTasks.innerHTML = 0


const tasksInfo = document.getElementById('tasksInfo')
const tasks = document.getElementById("tasksList");
const btnAddTask = document.getElementById("addTask");
const input = document.getElementById("taskInput");
let id = 0;
let array = [] // contains all tasks 


const check = `assets/icons/circle-check-regular.svg`;
const unCheck = "assets/icons/circle-check.svg";
const lineThrough = "item-text--through";

let local = localStorage

function addTask(task, id, done, deleted) { // Function that add li elements to list box
  if(deleted) return 

  let icon
  let dashed
  let tskDone

  done ? icon = check : icon = unCheck
  done ? dashed = lineThrough : dashed = ""
  done ? tskDone = "task-done" : tskDone = ""


  const element = 
  `
  <li class="task-list__item ${tskDone}">
    <img id="${id}" src="${icon}" alt="check box" class="btn btn-li">
    <p class="item-text ${dashed}">${task}</p>
    <img id="${id}" src="assets/icons/trash.svg" alt="check box" class="btn btn-li btn--del-task">
  </li>
  `;

  tasks.innerHTML += element;
  

}

function addTaskHandler() {   // Función que añade la tarea ingresada por el usuario al Local 
  let taskTxt = input.value;  // Storage y muestra dicha tarea en la caja de tareas.

  if (taskTxt) {
    addTask(taskTxt, id, false, false);    
    array.push({
      name: taskTxt,
      id,
      done: false,
      deleted: false
    })

    localStorage.setItem('tasklistApp', JSON.stringify(array)) // set taskListApp in localStorage
    input.value = "";
    id++;
    listIsEmpty()
    createdTskCounter++;
    createdTasks.innerHTML = createdTskCounter
  }
} 

btnAddTask.addEventListener("click", () => addTaskHandler()); // 
document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    addTaskHandler()
  }
});





// * --
tasks.addEventListener("click", (e) => {   
    if(e.target && e.target.tagName === 'IMG' && !e.target.classList.contains('btn--del-task')) { // Si el usuario da clic al 
      checkTask(e.target, Number(e.target.id), e)                                                // checkbox de tarea finalizada
      doneTskCounter++;
      doneTasks.innerHTML = doneTskCounter

    } else{
        if(e.target && e.target.tagName === 'IMG') {    // Si el usuario da click a eliminar tarea
            removeTask(e.target)
            listIsEmpty()
            createdTskCounter--;
            createdTasks.innerHTML = createdTskCounter

            doneTskCounter--;
            doneTasks.innerHTML = doneTskCounter
        }
    }
})
// * -- 





// * --
let data = local.getItem('tasklistApp') // Obtenemos los valores de la lista de Local Storage
let dataArr = JSON.parse(data)          // Convertimos valores a objeto de arreglo JSON

if(data) {
  array = dataArr

  // array.forEach((el) => {
  //     console.log(`${el.name} -> ${el.done}`)
  // })

  id = array.length
  loadTaskList(array)
} else {
  array = []
  id = 0
  createdTasks.innerHTML = 0
  doneTasks.innerHTML = 0
}
listIsEmpty()



function loadTaskList(arr) {
  arr.forEach((el) => {
      if(!el.deleted){ 
        addTask(el.name, el.id, el.done, el.deleted)
        // console.log(el)
        createdTskCounter++;
      } 
      if(!el.deleted && el.done) {
        doneTskCounter++;

      }
  })
  createdTasks.innerHTML = createdTskCounter
  doneTasks.innerHTML = doneTskCounter
}

// * --


function listIsEmpty() {
    if(tasks.children.length == 0) {
      tasks.classList.add('hidden')
      tasksInfo.classList.remove('hidden')

    } else {
      tasks.classList.remove('hidden')
      tasksInfo.classList.add('hidden')
    }
}
