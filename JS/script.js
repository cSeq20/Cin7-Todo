let todoItems = [];
//1. Render todo items on page load
//2. Delete function to remove item from the array list
//3. Relaod the item list

function addToList(e) {
    if(e.keyCode === 13){
        let inputField = document.querySelector("#todo_text");
        !inputField.value ? alert("Error!") : addNewListItem(inputField);
    }
}

function deleteItem(b){
    let key = b.target.parentElement.dataset.key;
    let index = todoItems.findIndex(i => i.id === Number(key));
    //
}

function addNewListItem(inputField) {
    let newItem = {
text: inputField.value,
id: todoItems.length
    }
    let todoList = document.querySelector(".todo_list");
    let newListItemElement = document.createElement("li");
    newListItemElement.setAttribute('id',newItem.id);
    newListItemElement.innerHTML = `<input type="checkbox"/>
    <label class="tick js-tick">${inputField.value}</label>
    <button type="button" onClick="deleteItem(b)">x</button>`
    todoList.appendChild(newListItemElement);
    inputField.value = "";
    todoItems.push(newItem);
}




// todo: add an id to the 'li' elements -- Chris
