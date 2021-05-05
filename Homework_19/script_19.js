"use strict"

const botTriggers = [
    //0 
    ["hi", "hey", "hello", "hi!", "hey!", "hello!"],
    //1
    ["how are you", "how are things", "how are you?", "how are things?"],
    //2
    ["what is going on", "what is up", "what's going on", "what's up", "what is going on?", "what is up?", "what's going on?", "what's up?"],
    //3
    ["happy", "good", "well", "fantastic", "cool"],
    //4
    ["bad", "bored", "tired", "sad"],
    //5
    ["tell me a story", "tell me a joke", "tell me story", "tell me joke"],
    //6
    ["thanks", "thank you", "thanks!", "thank you!"],
    //7
    ["bye", "good bye", "goodbye", "bye!", "good bye!", "goodbye!"]
];
const botTriggersEnd = ["bye", "good bye", "goodbye", "bye!", "good bye!", "goodbye!"];

const botResponses = [
    //0 
    ["Hello, Human!", "Hi!", "Hey!", "Hi there!"],
    //1
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    //2
    ["Nothing much", "Exciting things!"],
    //3
    ["Glad to hear it"],
    //4
    ["Why?", "Cheer up buddy"],
    //5
    ["What about?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    ["Goodbye", "See you later"],
];
const botResponsesEnd = ["Goodbye", "See you later"];

const botExtra = ["Whatever", "Huh?", "What do you mean?", "I don't know", "Yeah...", "404", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]

class ChatContainer {
    #container;
    constructor() {
        this.#container = document.createElement("div");
        this.#container.className = "chat_container";
    }

    render() {
        return this.#container;
    }
}

class Button {
    #button;
    constructor({ text, className, type, onClick }) {
        this.#button = document.createElement("button");
        this.#button.innerText = text;
        this.#button.className = className;
        this.#button.type = type;

        this.disabled(true);

        this.#button.addEventListener("click", (event) => {
            event.preventDefault();
            onClick();
        });
    }

    disabled(bool) {
        this.#button.disabled = bool;

        if (bool) {
            this.#button.style.border = "2px solid gray";
        } else {
            this.#button.style = "";
        }
    }

    render() {
        return this.#button;
    }
}

class InputElement {
    #input;
    #button;
    #STOP = false;
    #IS_PROCESSING = false;
    constructor({ text, name, className, chatContainer }) {
        this.#input = document.createElement("input");
        this.#input.className = className;
        this.#input.placeholder = text;
        this.#input.name = name;
        this.#input.maxLength = 56;

        this.#button = new Button({
            text: "Send",
            className: "btn",
            type: "submit",
            onClick: () => this.sendMessage(chatContainer)
        })

        this.#input.addEventListener("input", () => {
            if (this.#input.value.trim() !== "" && !this.#IS_PROCESSING) {
                this.#button.disabled(false)
            } else {
                this.#button.disabled(true);
            }
        })
    }

    async sendMessage(targetContainer) {
        if (this.#input.value) {
            this.#IS_PROCESSING = true;
            this.#button.disabled(true);

            let userInput = this.#input.value.trim();

            let article = document.createElement("article");
            article.className = "user_message";
            article.innerText = userInput;

            targetContainer.appendChild(article);
            targetContainer.lastChild.scrollIntoView({ behavior: "smooth" });

            this.#input.value = "";

            if (!this.#STOP) {
                this.#STOP = await botResponse(userInput, targetContainer);
            }

            this.#IS_PROCESSING = false;
            this.#input.dispatchEvent(new Event('input'));
        }
    }

    render() {
        const form = document.createElement("form");
        form.className = "input";

        form.appendChild(this.#input);
        form.appendChild(this.#button.render());

        return form;
    }
}

async function botResponse(userInput, targetContainer) {
    await wait(((Math.random() * (3000 - 1000)) + 1000));

    let input = userInput.toLowerCase();
    let { response, stop } = botCompare(botTriggers, botResponses, input);

    let article = document.createElement("article");
    article.className = "bot_message";
    article.innerText = response ? response : botExtra[[Math.floor(Math.random() * botExtra.length)]];

    targetContainer.appendChild(article);
    targetContainer.lastChild.scrollIntoView({ behavior: "smooth" });

    if (stop) {
        let article = document.createElement("article");
        article.className = "chat_end";
        article.innerText = "The chat has ended";

        targetContainer.parentElement.appendChild(article);
    }

    return stop;
}

function botCompare(triggerArray, replyArray, userInput) {
    let item;
    let stop = false;

    if (botTriggersEnd.includes(userInput)) {
        stop = true;

        return {
            response: botResponsesEnd[Math.floor(Math.random() * botResponsesEnd.length)],
            stop: stop
        };
    }

    for (let x = 0; x < triggerArray.length; x++) {
        if (triggerArray[x].includes(userInput)) {
            let items = replyArray[x];
            item = items[Math.floor(Math.random() * items.length)];
            // if (triggerArray[x].includes("bye")) {
            //     stop = true;
            // }
            break;
        }
    }

    return { response: item, stop: stop };
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
};

const mainContainer = document.querySelector(".container");

const chatContainer = new ChatContainer().render();

const inputElement = new InputElement({ text: "Write a message...", name: "input_field", className: "input_field", chatContainer: chatContainer });

mainContainer.appendChild(inputElement.render());
mainContainer.appendChild(chatContainer);


// OPTIONS
function showOptions(arrays) {
    let ul = document.createElement("ul");
    for (const arr of arrays) {
        let li = document.createElement("li");
        li.innerText = arr[Math.floor(Math.random() * arr.length)];
        ul.appendChild(li);
    }

    return ul;
}

const optionsContainer = document.createElement("div");
optionsContainer.className = "options_container";
optionsContainer.innerText = "Options";

const options = showOptions(botTriggers);
optionsContainer.appendChild(options);

document.body.appendChild(optionsContainer);
//