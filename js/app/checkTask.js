const check = `assets/icons/circle-check-regular.svg`;
const unCheck = "assets/icons/circle-check.svg";
const lineThrough = "item-text--through";

let local = localStorage

export function checkTask(el, id, e) {       

    let data = local.getItem('tasklistApp')  // Obtenemos los valores de la lista de Local Storage
    let dataArr = JSON.parse(data)
  
    if(dataArr[id].done) {            // Comprueba si la tarea con el id dado está marcada como hecha o no. Si está 
        dataArr[id].done = false      // hecha, cambia su propiedad done a false y viceversa.

        local.setItem('tasklistApp', JSON.stringify(dataArr))  // Actualizamos los valores del Local Storage

    } else {
        dataArr[id].done = true
        // console.log(dataArr[id].done)
        local.setItem('tasklistApp', JSON.stringify(dataArr))

    }

    e.target.src.endsWith(check) ? e.target.src = unCheck : e.target.src = check  // Cambia el botón de check a uncheck y viceversa.

    el.nextElementSibling.classList.toggle(lineThrough) // Cambia el estilo del texto de la tarea a rayada si está completada.

    e.target.parentElement.classList.contains('task-done') ? e.target.parentElement.classList.remove('task-done') : e.target.parentElement.classList.add('task-done') // Cambia la opacidad de la tarea en función de si ya está completada.

}