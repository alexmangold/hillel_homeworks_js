"use strict"

/* 
forEach
*/

console.log("--FOREACH--");

const arr1 = ["Element 1", "Element 2", "Element 3"];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

forEach(arr1, x => console.log(x));

/*
map
*/

console.log("--MAP--");

const arr2 = [1, 2, 3, 4, 5];

function map(array, callback) {
    const finalArr = [];

    for (let i = 0; i < array.length; i++) {
        let newElem = callback(array[i]);
        finalArr.push(newElem);
    }
    return finalArr;
}

let mapResult = map(arr2, x => x * 2);

console.log(mapResult);

/*
filter
*/

console.log("--FILTER--");

const arr3 = [10, 22, 11, 2, 5];

function filter(array, callback) {
    const finalArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            finalArray.push(array[i]);
        }
    }
    return finalArray;
}

let filterResult = filter(arr3, x => x < 11);

console.log(filterResult);

/*
some
*/

console.log("--SOME--");

const arr4 = [1, 2, 3, 4, 10, 21, 102];

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

let someResult = some(arr4, x => x >= 10 && x < 102);

console.log(someResult);

/*
every
*/

console.log("--EVERY--");

const arr5 = [0, 1, 2, 3, 4, 10, 21];

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

let everyResult = every(arr5, x => x < 21);

console.log(everyResult);


