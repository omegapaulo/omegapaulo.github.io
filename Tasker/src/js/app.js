const form = document.querySelector('form');
const input = document.querySelector('form input[type="text');
const footerBtn = document.querySelector('.footerImg');
const deleteTasks = document.querySelector('.container');

eventHandler();
function eventHandler() {
  form.addEventListener('submit', addTasks);
  footerBtn.addEventListener('click', (e) => form.classList.add('display'));
  deleteTasks.addEventListener('click', deleteTask);
}

//? ADD TASKS FUNCTION
function addTasks(e) {
  if (input.value === '') {
    console.log('enter task!');
  } else {
    let inputValue = input.value;

    const div = document.createElement('div');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const p = document.createElement('p');

    a1.classList.add('doneTask');
    a2.classList.add('deleteTask');

    a1.innerHTML = '<i class="fas fa-check"></i>';
    a2.innerHTML = '<i class="fas fa-trash"></i>';
    p.textContent = inputValue;

    div.className = 'content';

    div.append(a1, p, a2);

    document.querySelector('.container').appendChild(div);

    input.value = '';

    form.classList.remove('display');
  }

  e.preventDefault();
}

//? DELETE TASKS
function deleteTask(e) {
  if (e.target.parentElement.classList.contains('doneTask')) {
    e.target.parentElement.parentElement.children[1].classList.add('done');
  } else if (e.target.parentElement.classList.contains('deleteTask')) {
    e.target.parentElement.parentElement.remove();
  }
}
