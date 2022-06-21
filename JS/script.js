function addToList() {
    // Load the list from the HTML
    let list = document.querySelector("#todo_list");
    // load the input text that the user has entered on the page
    let input_field = document.querySelector("#todo_text");

    // create a li element to be added onto the list
    let li = document.createElement("li");
    
    // save the value that the user entered into the 'li' 
    li.innerHTML = input_field.value;

    // append the newly created 'li' element to the list so it shows up on the HTML
    list.appendChild(li);
    input_field.value="";

    // todo: add an id to the 'li' elements -- Chris

    // todo: handle if user does not enter a value -- Louis

    // todo: clear the input text box once added to the list -- Dennis
}