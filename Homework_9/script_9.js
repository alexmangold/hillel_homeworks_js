"use strict"

const mainContainer = document.querySelector(".container");

// Input + Add button
function createInputField() {
    const inputField = document.createElement("form");
    inputField.classList.add("input-field");

    const input = document.createElement("input");
    input.classList.add("input-field_input");
    input.type = "text";

    const inputButton = document.createElement("button");
    inputButton.classList.add("btn", "btn-add");
    inputButton.type = "sumbit"; //
    inputButton.innerText = "Add";

    inputField.appendChild(input);
    inputField.appendChild(inputButton);

    return { inputField, input, inputButton }
}

// User list container
function createListContainer() {
    const list = document.createElement("section");
    list.classList.add("list");
    return list;
}

//Edit user name
function createUserName(name) {
    const userName = prompt("Create new name");
    if (userName) {
        return userName;
    } else {
        alert("Invalid name");
        return name;
    }
}

// New list item + edit/remove events
function createListItem(userName) {
    const listItem = document.createElement("article");
    listItem.classList.add("list_item");

    const listName = document.createElement("span");
    listName.classList.add("list_name");
    listName.innerText = userName;

    const listButtons = createListButtons();

    listButtons.editButton.addEventListener("click", function () {
        listName.innerText = createUserName(listName.innerText);
    });

    listButtons.removeButton.addEventListener("click", function () {
        if (confirm("Are you sure?")) {
            listItem.parentNode.removeChild(listItem);
        }
    });

    listItem.appendChild(listName);
    listItem.appendChild(listButtons.listButtons);

    return listItem;
}

// Edit/Remove Buttons
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

// Default users list
function createDefaultUserList() {
    const defaultList = {};
    const defaultUsers = ["User 1", "User 2", "User 3", "User 3", "User 4", "User 5"];
    for (const user of defaultUsers) {
        defaultList[user] = createListItem(user);
    }
    return defaultList;
}

//Final stage
function createUserList() {
    const inputFieldContainer = createInputField();
    const input = inputFieldContainer.input;
    const addButton = inputFieldContainer.inputButton;

    const listContainer = createListContainer();
    // Create default list
    const defaultList = createDefaultUserList();
    for (const user in defaultList) {
        listContainer.appendChild(defaultList[user]);
    }
    //Button Add Event
    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (input.value) {
            const newListItem = createListItem(input.value);
            listContainer.appendChild(newListItem);
            input.value = "";
        } else {
            alert("Invalid name");
        }
    })

    return { inputFieldContainer, listContainer };
}

const list = createUserList();

mainContainer.appendChild(list.inputFieldContainer.inputField);
mainContainer.appendChild(list.listContainer);
