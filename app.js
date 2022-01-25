// Selectors
const btnMon = document.getElementById('btn-mon');
const btntues = document.getElementById('btn-tues');
const btnwed = document.getElementById('btn-wed');
const btnthurs = document.getElementById('btn-thurs');
const btnfri = document.getElementById('btn-fri');
const btnweekend = document.getElementById('btn-weekend');
const btnnotes = document.getElementById('btn-notes');
const btnhabit = document.getElementById('btn-habit');

const taskInputMon = document.querySelector('.mon-input');
const taskInputTues = document.querySelector('.tues-input');
const taskInputWed = document.querySelector('.wed-input');
const taskInputThurs = document.querySelector('.thurs-input');
const taskInputFri = document.querySelector('.fri-input');
const taskInputWeekend = document.querySelector('.weekend-input');

const todoListMon = document.querySelector('.mon-list');
const todoListTues = document.querySelector('.tues-list');
const todoListWed = document.querySelector('.wed-list');
const todoListThurs = document.querySelector('.thurs-list');
const todoListFri = document.querySelector('.fri-list');
const todoListWeekend = document.querySelector('.weekend-list');

// Functions
const addTask = (e) => {
  e.preventDefault();
  console.log(e.target.id);

  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('task');

  // Add complete button icon
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="far fa-circle"></i>';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);

  // Create task Li
  const newTodo = document.createElement('li');
  if (e.target.id === 'btn-mon') {
    newTodo.innerText = taskInputMon.value;
  } else if (e.target.id === 'btn-tues') {
    newTodo.innerText = taskInputTues.value;
  } else if (e.target.id === 'btn-wed') {
    newTodo.innerText = taskInputWed.value;
  } else if (e.target.id === 'btn-thurs') {
    newTodo.innerText = taskInputThurs.value;
  } else if (e.target.id === 'btn-fri') {
    newTodo.innerText = taskInputFri.value;
  } else if (e.target.id === 'btn-weekend') {
    newTodo.innerText = taskInputWeekend.value;
  }

  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  console.log(newTodo);

  //  Add delete button icon
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add('delete-btn');
  todoDiv.appendChild(deleteBtn);

  // Append task li to list
  if (e.target.id === 'btn-mon') {
    todoListMon.appendChild(todoDiv);
    taskInputMon.value = '';
  } else if (e.target.id === 'btn-tues') {
    todoListTues.appendChild(todoDiv);
    taskInputTues.value = '';
  } else if (e.target.id === 'btn-wed') {
    todoListWed.appendChild(todoDiv);
    taskInputWed.value = '';
  } else if (e.target.id === 'btn-thurs') {
    todoListThurs.appendChild(todoDiv);
    taskInputThurs.value = '';
  } else if (e.target.id === 'btn-fri') {
    todoListFri.appendChild(todoDiv);
    taskInputFri.value = '';
  } else if (e.target.id === 'btn-weekend') {
    todoListWeekend.appendChild(todoDiv);
    taskInputWeekend.value = '';
  }
};

const taskAction = (e) => {
  const action = e.target;
  console.log(action);
  if (action.classList[1] === 'fa-trash') {
    const task = action.parentElement.parentElement;
    console.log(task);
    task.remove();
  }
  if (action.classList[1] === 'fa-circle') {
    const task = action.parentElement.parentElement;
    task.classList.toggle('completed');
  }
};

// Event listeners //
btnMon.addEventListener('click', addTask);
btntues.addEventListener('click', addTask);
btnwed.addEventListener('click', addTask);
btnthurs.addEventListener('click', addTask);
btnfri.addEventListener('click', addTask);
btnweekend.addEventListener('click', addTask);

todoListMon.addEventListener('click', taskAction);
todoListTues.addEventListener('click', taskAction);
todoListWed.addEventListener('click', taskAction);
todoListThurs.addEventListener('click', taskAction);
todoListFri.addEventListener('click', taskAction);
todoListWeekend.addEventListener('click', taskAction);
