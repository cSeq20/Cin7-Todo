class Todo {
    constructor(
        id,
        todoText,
        date
    ) {
        this.id = id;
        this.todoText = todoText;
        this.date = date;
    }
}

let todoItems = [];

const listItemHTML = (todoItem) => {
    return `
    <input class="todo-item" type="checkbox" id="${todoItem.id}" />
    <label for="${todoItem.id}" class="tick" id="${todoItem.id}">
        ${todoItem.todoText}
    </label>
    <span class="material-symbols-outlined" onClick="deleteTodo(event)">
        Delete
    </span>
    `;
};

const CreateListItemElement = (todoItem) => {
    let newListItemElement = document.createElement("li");
    newListItemElement.setAttribute("id", todoItem.id);
    newListItemElement.setAttribute("class", "todo-item");
    newListItemElement.setAttribute("data-key", todoItem.id);
    newListItemElement.innerHTML = listItemHTML(todoItem);
    return newListItemElement;
};

const renderTodoItems = () => {
    let todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";    
    todoItems.map((todoItem) => {
        todoList.append(CreateListItemElement(todoItem));
    });
};

const addNewListItem = (inputText) => {
    let id = todoItems.length;    
    const newTodo = new Todo(
        id,
        inputText,
        new Date()
    );
    
    todoItems.push(newTodo);
    renderTodoItems();
};

window.onload = function() {
    renderTodoItems();
};

const addToList = (event) => {
    if(event.keyCode === 13)
    {
        let inputField = document.querySelector("#todo-text");
        !inputField.value ? alert("Error!") : addNewListItem(inputField.value.trim());
        inputField.value = "";
    }
};

const deleteTodo = (event) => {
    const itemKey = event.target.parentElement.dataset.key;
    const index = todoItems.findIndex(todo => todo.id === Number(itemKey));
    todoItems.splice(index, 1);
    renderTodoItems();
}