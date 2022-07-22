class Todo {
    constructor(
        id,
        todoText,
        notes,
        date,
        check
    ) {
        this.id = id;
        this.todoText = todoText;
        this.notes = notes;
        this.date = date;
        this.check = check;
    }
}

let todoItems = [];
let selectedTodoId;

const listItemHTML = (todoItem) => {
    return `
    <label for="${todoItem.id}" class="tick" id="${todoItem.id}">
        ${todoItem.todoText}
    </label>
    <span class="material-symbols-outlined" onClick="deleteTodo(event)">
        Delete
    </span>
    `;
};
//onclick="updateItemCheckState(${todoItem.id}


const CreateListItemElement = (todoItem) => {
    let newListItemElement = document.createElement("li");
    newListItemElement.setAttribute("id", todoItem.id);
    newListItemElement.setAttribute("class", "todo-item");
    newListItemElement.setAttribute("data-key", todoItem.id);
    newListItemElement.setAttribute("onclick", "selectItem(this)");
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
        "",
        new Date(),
        false
    );
    
    todoItems.push(newTodo);
    selectedTodoId = id;
    renderTodoItems();
};

window.onload = function() {
    renderTodoItems();
};

const addToList = (event) => {
    if(event.keyCode === 13)
    {
        let inputField = document.querySelector("#todo-text");
        let notesContainer = document.querySelector("#notes-container");
        let notesField = document.querySelector("#todo-note");
        !inputField.value ? alert("Error!") : addNewListItem(inputField.value.trim());
        inputField.value = "";
        notesContainer.style.display = "block";
        notesField.value = "";
    }
};

const updateItemCheckState = (id) => {
    todoItems[id].check = !todoItems[id].check;
}

const deleteTodo = (event) => {
    let notesField = document.querySelector("#todo-note");
    const itemKey = event.target.parentElement.dataset.key;
    const index = todoItems.findIndex(todo => todo.id === Number(itemKey));
    todoItems.splice(index, 1);
    notesField.value = "";
    renderTodoItems();
};

const saveNoteToTodo = (event) => {
    let notesField = document.querySelector("#todo-note");
    todoItems[selectedTodoId].notes = notesField.value.trim();
};

const selectItem = (elm) => {
    selectedTodoId = elm.getAttribute("id");
    let notesField = document.querySelector("#todo-note");
    notesField.value = todoItems[selectedTodoId].notes;
    let test = document.querySelector(`.todo-item`);
    test.style.backgroundColor = 'red';
};


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
   ev.target.classList.toggle('checked');
  }
}, false);