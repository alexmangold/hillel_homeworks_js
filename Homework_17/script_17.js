"use strict"

const mainContainer = document.querySelector(".container");

class Button {
    #button;
    constructor(text, dataLoader) {
        this.#button = document.createElement("button");
        this.#button.className = "btn";
        this.setText(text ?? "");
        this.#button.addEventListener("click", () => {
            dataLoader.loadData(this);
        });
    }

    setText(text) {
        this.#button.innerText = text;
    }

    disable(value) {
        this.#button.disabled = value;
    }

    render() {
        return this.#button;
    }
}

function createListContainer() {
    const ul = document.createElement("ul");
    ul.className = "list";

    return ul;
}

class DataLoader {
    #container;
    #url;
    constructor({ container, url }) {
        this.#container = container;
        this.#url = url;
    }

    loadData(button) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";

        this.nextPage = this.data !== undefined ? this.data.info.next : this.#url;

        xhr.open("GET", this.nextPage);

        // if (xhr.readyState !== 4) {
        button.setText("Getting Data");
        button.disable(true);
        // }

        xhr.onload = () => {
            if (xhr.status === 200) {
                this.data = xhr.response;
                if (this.data.info.next !== null) {
                    button.setText("Get Data");
                    button.disable(false);
                } else {
                    button.setText("No More Data");
                    button.disable(true);
                }

                this.#onLoad(this.data.results, this.#container);
            } else {
                console.error("Error", xhr.status);
            }
        }

        xhr.send();
    }

    #onLoad(data, target) {
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }

        data.forEach(element => {
            const li = document.createElement("li");
            li.innerText = element.name;
            target.appendChild(li);
        });
    }
}

const listContainer = createListContainer();

const dataLoader = new DataLoader({ container: listContainer, url: "https://rickandmortyapi.com/api/character/?page=1" });

const button = new Button("Get Data", dataLoader);
mainContainer.appendChild(button.render());

mainContainer.appendChild(listContainer);