document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  const tasksList = document.querySelector('#tasks')

  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const taskInput = document.getElementById('new-task-description').value
    console.log(taskInput)
    const task = document.createElement('li')
    task.textContent = taskInput
    // tasksList.appendChild(task)
    tasksList.innerHTML += `<li>${taskInput}</li>`
    document.querySelector('#new-task-description').value = ""
  })
});
