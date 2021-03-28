"use strict"

const emailIsValid = /[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*@(?:[a-zA-Z0-9-]+?\.)+[a-zA-Z0-9-](?:[a-zA-Z0-9-]+)?/;

const passwordIsValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*[@$#!\?&])).{8,}/;

function createForm() {
    const form = document.createElement("form");
    form.classList.add("login-form");

    const emailField = createInputField("email", "text")
    const passwordField = createInputField("password", "password");

    const emailInput = emailField.input;
    const passwordInput = passwordField.input;

    emailInput.addEventListener("keyup", function () {
        if (!emailIsValid.test(emailInput.value)) {
            emailInput.classList.add("invalid");
        } else {
            emailInput.classList.remove("invalid");
        }

        toggleButton();
    })

    function toggleButton() {
        if (!emailIsValid.test(emailInput.value) || !passwordIsValid.test(passwordInput.value)) {
            login.disabled = true;
        } else {
            login.disabled = false;
        }
    }

    passwordInput.addEventListener("keyup", function () {
        if (!passwordIsValid.test(passwordInput.value)) {
            passwordInput.classList.add("invalid");
        } else {
            passwordInput.classList.remove("invalid");
        }

        toggleButton();
    })

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const login = createButton("Login", "submit");
    login.disabled = false;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!emailInput.value && !passwordInput.value) {
            emailInput.classList.add("invalid");
            passwordInput.classList.add("invalid");
            login.disabled = true;
            return;
        }

        const loginData = new FormData(event.target);
        const value = Object.fromEntries(loginData.entries());
        console.log(JSON.stringify(value));

        emailField.input.value = "";
        passwordField.input.value = "";
        login.disabled = true;
    })

    form.appendChild(emailField.inputField);
    form.appendChild(passwordField.inputField);
    form.appendChild(buttons);
    buttons.appendChild(login);

    return form;
}

function createInputField(name, type) {
    const inputField = document.createElement("div");
    inputField.classList.add("input-field");

    const span = document.createElement("span");
    span.innerText = name.toUpperCase();

    const input = document.createElement("input");
    input.name = name;
    input.type = type;

    inputField.appendChild(span);
    inputField.appendChild(input);

    return { inputField, span, input };
}

function createButton(name, type) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.type = type;
    button.innerText = name;

    return button;
}

const form = createForm();
document.body.appendChild(form);