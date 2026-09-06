const todoList = [{
  name: 'make dinner',
  dueDate: '2026-6-2' 
}, {
  name: 'wash dishes',
  dueDate: '2026-6-2'
}];

renderTodoList();

function renderTodoList () {

  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;  // destructuring - shortcut for the 2 above code
    const html = ` 
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }


  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    })
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  })

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value

  todoList.push({
    // name:name,
    // dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

