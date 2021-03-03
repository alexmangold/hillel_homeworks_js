"use strict"

/*
Задание 1
*/

function isSymbolPresentInString(string, symbol) {
    // let newArr = Array.from(string);
    for (let i = 0; i < string.length; i++) {
        if (string[i] === symbol) {
            return true;
        }
    }
    return false;
}

let includesResult = isSymbolPresentInString("test", "s");
console.log(includesResult);

/*
Задание 2
*/

function getSymbolIndex(string, symbol) {
    // let newArr = Array.from(string);
    for (let i = 0; i < string.length; i++) {
        if (string[i] === symbol) {
            return i;
        }
    }
    return -1;
}

let indexResult = getSymbolIndex("test", "s");
console.log(indexResult);

/*
Задание 3
*/

function copy(target, origin) {
    for (let key in origin) {
        target[key] = origin[key];
    }
    return target;
}

let copyResult = copy({}, { id: 1, name: "Alex", email: "test@test.com" })
console.log(copyResult);

/*
Задание 4
*/

function compare(object_1, object_2) {
    const keys_1 = Object.keys(object_1);
    const keys_2 = Object.keys(object_2);

    if (keys_1.length !== keys_2.length) {
        return false;
    }

    for (let key in object_1) {
        if (object_1[key] !== object_2[key]) {
            return false;
        }
    }
    return true;
}
let compareResult = compare({ email: "test@test.com", id: 1 }, { id: 1, email: "test@test.com" });
console.log(compareResult);

/*
Задание 5
*/

function count(string) {
    let count = {};
    for (let i = 0; i < string.length; i++) {
        if (count[string[i]] === undefined) {
            count[string[i]] = 1;
        } else {
            count[string[i]]++;
        }
    }
    return count;
}

let countResult = count("abacab");
console.log(countResult);