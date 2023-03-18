
let local = localStorage

export function removeTask(el, id) {                  
    let data = local.getItem('tasklistApp') // Obtenemos los valores de la lista de Local Storage
    let dataArr = JSON.parse(data)
  
    let parentEl = el.parentElement   // Eliminamos el elemento li de la tarea del elemento padre
    parentEl.remove(el)

    dataArr[el.id].deleted = true   // Actualizamos los valores del Local Storage
    local.setItem('tasklistApp', JSON.stringify(dataArr))
}
