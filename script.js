let addButton = document.querySelector("button[type='submit']");
let inputText = document.querySelector("input[type='text']");
let checkboxButton = document.getElementsByClassName("input[type='checkbox']");
let parent = document.querySelector("div.tasks");

addButton.addEventListener("click", () => {
    let text = inputText.value.trim();
    if (text.length == 0) {
        alert("Please write something");
    }
    else {
        let value = inputText.value;
        let div = document.createElement("div");
        div.classList.add("todo-list", "d-flex", "align-items-center");
        let checkbox = createCheckbox();
        let task = createTaskElement(value);
        let action = createActionElement();
        div.appendChild(checkbox);
        div.appendChild(task);
        div.appendChild(action);
        parent.appendChild(div);
        inputText.value = "";
    }
})

parent.addEventListener("click", (event) => {
    if (event.target.matches("h3") || event.target.matches("input")) {
        let todoList = event.target.closest("div.todo-list");
        let h3 = todoList.querySelector("div.task h3");
        let checkbox = todoList.querySelector("div.checkbox input");
        h3.classList.toggle("delete");
        if (checkbox.hasAttribute("checked")) {
            console.log("unchecked");
            checkbox.removeAttribute("checked");
        }
        else {
            checkbox.setAttribute("checked", "true");
            console.log("checked");
        }
    }
    if (event.target.matches("i")) {
        let todoList = event.target.closest("div.todo-list");
        todoList.remove();
    }
})

function createCheckbox() {
    let div = document.createElement("div");
    div.classList.add("checkbox", "me-3");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("form-control-check", "forn-control-lg");
    div.appendChild(input);
    return div;
}

function createTaskElement(value) {
    let div = document.createElement("div");
    div.classList.add("task");
    let h3 = document.createElement("h3");
    h3.innerHTML = value;
    div.appendChild(h3);
    return div;
}

function createActionElement() {
    let div = document.createElement("div");
    div.classList.add("action");
    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-trash-can", "text-danger");
    div.appendChild(i);
    return div;
}