const form = document.querySelector('form');
const deleteTask = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');
let tasks = document.querySelector('.tasks');

//? Event Handler
eventHandler();
function eventHandler() {
  form.addEventListener('submit', addTask);
  deleteTask.addEventListener('click', deleteTasks);
}

//? add tasks
function addTask(e) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const a2 = document.createElement('a');
  if (input.value === '') {
    alert('Add tasks');
  } else {
    li.textContent = input.value;
    li.className = 'task';
    a.className = 'doneTask';
    a2.className = 'delete';
    a.innerHTML = '<i class="fas fa-check"></i>';
    a2.innerHTML = '<i class="fas fa-trash"></i>';
    li.append(a, a2);
    // li.appendChild(a2);
    tasks.appendChild(li);
  }

  //* clear the field
  input.value = '';

  e.preventDefault();
}

//? delete tasks
function deleteTasks(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    if (confirm('are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  } else if (e.target.parentElement.classList.contains('doneTask')) {
    e.target.parentElement.parentElement.classList.toggle('done');
  }
}
