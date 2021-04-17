"use strict"

const mainContainer = document.querySelector(".container");

let usersArray = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

// 1 CREATING A LIST
const list = createUserList(["User 1", "User 2", "User 3", "User 3", "User 4", "User 5"]); // -> 4

function createUserList(defaultUsers) {
    const inputFieldContainer = createInputField(); // 2
    const input = inputFieldContainer.input;
    const addButton = inputFieldContainer.addButton;

    const listContainer = createListContainer(); // 3

    // 4
    const defaultList = usersArray === null || usersArray.length === 0 ? createDefaultUserList(defaultUsers) : createDefaultUserList(usersArray);
    for (const user in defaultList) {
        listContainer.appendChild(defaultList[user]);
    }

    //Add Event
    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (input.value && !usersArray.includes(input.value)) {
            const newListItem = createListItem(input.value); // 5
            listContainer.appendChild(newListItem);
            input.value = "";
        } else {
            alert("Invalid name");
        }
    })

    return { inputFieldContainer, listContainer };
}

// 2 CREATING FORM AND INPUT
function createInputField() {
    const inputField = document.createElement("form");
    inputField.classList.add("input-field");

    const input = document.createElement("input");
    input.classList.add("input-field_input");
    input.type = "text";

    const addButton = document.createElement("button");
    addButton.classList.add("btn", "btn-add");
    addButton.type = "sumbit";
    addButton.innerText = "Add";

    inputField.appendChild(input);
    inputField.appendChild(addButton);

    return { inputField, input, addButton }
}

// 3 CREATING LIST CONTAINER
function createListContainer() {
    const list = document.createElement("section");
    list.classList.add("list");
    return list;
}

// 4 CREATING DEFAULT USER LIST
function createDefaultUserList(defaultUsers) {
    const defaultList = {};

    for (const user of defaultUsers) {
        defaultList[user] = createListItem(user); // -> 5
    }
    return defaultList;
}

// 5 CREATING LIST ITEMS
function createListItem(userName) {
    const listItem = document.createElement("article");
    listItem.classList.add("list_item");

    const listName = document.createElement("span");
    listName.classList.add("list_name");
    listName.innerText = userName;

    if (!usersArray.includes(userName)) { 
        usersArray.push(userName);
        localStorage.setItem('users', JSON.stringify(usersArray));
    }

    const listButtons = createListButtons(); // -> 6

    // Edit Event
    listButtons.editButton.addEventListener("click", function () {
        let newIndex = usersArray.indexOf(listName.innerText); 
        listName.innerText = createUserName(listName.innerText); // -> 7
        usersArray[newIndex] = listName.innerText; 
        localStorage.setItem('users', JSON.stringify(usersArray)); 
    });

    //Remove Event
    listButtons.removeButton.addEventListener("click", function () {
        if (confirm("Are you sure?")) {
            let newIndex = usersArray.indexOf(listName.innerText); 
            usersArray.splice(newIndex, 1);
            localStorage.setItem('users', JSON.stringify(usersArray));

            listItem.parentNode.removeChild(listItem);
        }
    });

    listItem.appendChild(listName);
    listItem.appendChild(listButtons.listButtons);

    return listItem;
}

// 6 CREATING EDIT AND REMOVE BUTTONS
function createListButtons() {
    const listButtons = document.createElement("div");
    listButtons.classList.add("buttons");

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-edit");
    editButton.type = "button";
    editButton.innerText = "Edit";

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-remove");
    removeButton.type = "button";
    removeButton.innerText = "Remove";

    listButtons.appendChild(editButton);
    listButtons.appendChild(removeButton);

    return { listButtons, editButton, removeButton };
}

// 7 EDIT USER NAME
function createUserName(name) {
    const userName = prompt("Create new name");
    if (userName && !usersArray.includes(userName)) {
        return userName;
    } else {
        alert("Invalid name");
        return name;
    }
}

mainContainer.appendChild(list.inputFieldContainer.inputField);
mainContainer.appendChild(list.listContainer);