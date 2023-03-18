
const tabTasks = document.getElementById('tabTasks')
const tabProfile = document.getElementById('tabProfile')
const profilePage = document.getElementById('profile')
const tasksPage = document.getElementById('tasks')

tabTasks.addEventListener('click', (e) => {
  let el = e.target

  if(!el.classList.contains('selected')) {
    el.classList.remove('unselected')
    el.classList.add('selected')

    tabProfile.classList.remove('selected')
    tabProfile.classList.add('unselected')

    
    profilePage.classList.add('hidden')
    tasksPage.classList.remove('hidden')
  }
})

tabProfile.addEventListener('click', (e) => {
  let el = e.target

  if(!el.classList.contains('selected')) {
    el.classList.remove('unselected')
    el.classList.add('selected')

    tabTasks.classList.remove('selected')
    tabTasks.classList.add('unselected')

    tasksPage.classList.add('hidden')
    profilePage.classList.remove('hidden')
  }
})