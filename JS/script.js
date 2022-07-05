function addToList(e) {
    if(e.keyCode === 13){
        let inputField = document.querySelector("#todo_text");
        !inputField.value ? alert("Error!") : addNewListItem(inputField);
    }
}

function addNewListItem(inputField) {
    let todoList = document.querySelector(".todo_list");
    let newListItemElement = document.createElement("li");
    newListItemElement.innerHTML = `<input type="checkbox"/>
    <label class="tick js-tick">${inputField.value}</label>`
    todoList.appendChild(newListItemElement);
    inputField.value = "";
}


// todo: add an id to the 'li' elements -- Chris
// todo: add a key press to add an item instead of a button
// todo: create a check box to cross out items on the list