"use strict"
const listArray1 = [1, 2, 3];
const listArray2 = [1, 2, 3, [3.1, 3.2], 4, [4.1, 4.2, 4.2], 5];

const listContainer = document.querySelector(".container");

function generateList(array) {
    let ul = document.createElement("ul");
    for (const element of array) {
        let li = document.createElement("li");
        if (Array.isArray(element)) {
            const newUl = generateList(element);
            li.className = "sub-list";
            li.appendChild(newUl);
        } else {
            li.innerText = element;
        }
        ul.appendChild(li);
    }
    return ul;
}

const newList = generateList(listArray2);
listContainer.appendChild(newList);
