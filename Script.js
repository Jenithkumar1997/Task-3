document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';

            const todoTextNode = document.createTextNode(todoText);
            todoItem.appendChild(todoTextNode);

            const completeBtn = document.createElement('button');
            completeBtn.className = 'complete-btn';
            completeBtn.innerHTML = '✔';
            completeBtn.addEventListener('click', () => {
                todoItem.classList.toggle('completed');
            });

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-btn';
            editBtn.innerHTML = '✏';
            editBtn.addEventListener('click', () => {
                editTodo(todoItem, todoTextNode);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '✖';
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(completeBtn);
            todoItem.appendChild(editBtn);
            todoItem.appendChild(deleteBtn);

            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }

    function editTodo(todoItem, todoTextNode) {
        const newText = prompt('Edit your task:', todoTextNode.nodeValue);
        if (newText !== null && newText.trim() !== '') {
            todoTextNode.nodeValue = newText.trim();
        }
    }
});
