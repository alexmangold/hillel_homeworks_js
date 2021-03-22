"use strict"

const mainContainer = document.querySelector(".container");

const colors = ["cornflowerblue", "yellowgreen", "gold", "mediumorchid", "coral"];

function createSquareElements(colors) {
    const article = document.createElement("article");
    article.classList.add("square");
    article.style.backgroundColor = colors[0];

    article.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "button") {
            return;
        }

        let i = colors.findIndex(x => x === article.style.backgroundColor) + 1;

        if (i > colors.length - 1) {
            i = 0;
        }

        article.style.backgroundColor = colors[i];
    })

    const span = document.createElement("span");
    span.innerText = 0;

    const section = document.createElement("section");
    section.classList.add("buttons");

    const buttons = createButtons();

    const buttonPlus = buttons.plus;
    const buttonMinus = buttons.minus;

    article.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() !== "button") {
            return;
        }

        let count = this.querySelector("span");

        if (event.target.getAttribute("data-buttons") === "+") {
            count.innerText = Number(count.innerText) + 1;
        } else if (event.target.getAttribute("data-buttons") === "-" && Number(count.innerText) !== 0) { //на случай если нельзя уходить в отрицательные числа
            count.innerText = Number(count.innerText) - 1;
        }
    })

    article.appendChild(span);
    article.appendChild(section);

    section.appendChild(buttonPlus);
    section.appendChild(buttonMinus);

    return article;
}

function createButtons() {
    const plus = document.createElement("button");
    plus.classList.add("btn", "btn-plus");
    plus.setAttribute("data-buttons", "+");
    plus.innerText = "+";
    
    const minus = document.createElement("button");
    minus.classList.add("btn", "btn-minus");
    minus.setAttribute("data-buttons", "-");
    minus.innerText = "-";

    return { plus, minus };
}

for (let i = 1; i <= 5; i++) {
    const square = createSquareElements(colors);
    mainContainer.appendChild(square);
}