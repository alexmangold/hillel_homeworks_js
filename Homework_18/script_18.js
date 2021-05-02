"use strict"

const container = document.querySelector(".container");

const pages = 35;

class Page {
    static #currentPage = 1;

    static setPage(page) {
        if (page <= 0 || page > pages) {
            console.error("WRONG PAGE");
        }

        Page.#currentPage = page;
    };

    static getPage() {
        return Page.#currentPage;
    }
}

class Select {
    #select;
    constructor() {
        this.#select = document.createElement("select");

        for (let i = 1; i <= pages; i++) {
            let option = document.createElement("option");
            option.text = `Page ${i}`;
            option.value = i;
            this.#select.add(option);
        }

        this.#select.addEventListener("change", () => {
            Page.setPage(this.#select.value);
        })
    }

    render() {
        return this.#select;
    }
}

const select = new Select();

class Button {
    #button;
    constructor({ text, onClick, target, createListItem }) {
        this.#button = document.createElement("button");
        this.#button.className = "btn";
        this.#button.innerText = text;

        this.#button.addEventListener("click", () => {
            onClick(target, createListItem);
        });
    }

    render() {
        return this.#button;
    }
}

function createListContainer() {
    const listContainer = document.createElement("div");
    listContainer.className = "list_container";

    const list = createList();
    listContainer.appendChild(list);

    return { listContainer, list };
}

function createList() {
    const list = document.createElement("ul");
    list.className = "list";

    return list;
}

function createListItem(target, elements) {
    while (target.list.firstChild) {
        target.list.removeChild(target.list.firstChild);
    }

    for (let element of elements) {
        let li = document.createElement("li");
        li.innerText = element.name;
        target.list.appendChild(li);
    }
}

const listContainer = createListContainer();

const button = new Button({ text: "GET", onClick: loadData, target: listContainer, createListItem: createListItem });

function loadData(target, createListItem) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${Page.getPage()}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(new Error(`INVALID PAGE ${res.status}`));
        })
        .then((data) => {
            createListItem(target, data.results);
        })
        .catch((error) => console.error(error));

};

container.appendChild(select.render());

container.appendChild(button.render());

container.appendChild(listContainer.listContainer);