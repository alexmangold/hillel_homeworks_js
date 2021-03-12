"use strict"

/*
Задание 1
*/

const company = {
    sales: {
        online: {
            odessa: [
                {
                    name: 'Jane',
                    salary: 1000
                },
                {
                    name: 'Doe',
                    salary: 1500
                }
            ],
            kyiv: [
                {
                    name: 'Jack',
                    salary: 2000
                },
                {
                    name: 'Black',
                    salary: 2500
                }
            ]
        },
        offline: [
            {
                name: 'Vladimir',
                salary: 15000
            },
            {
                name: 'Haza',
                salary: 20000
            }
        ]
    },
    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Robert',
                salary: 1300
            }
        ]
    }
};

console.log(`Original:`, company);

function isObject(something) {
    return typeof something === "object" && something !== null && !Array.isArray(something);
}

function deepCopy(something) {
    if (isObject(something)) {
        const result = {};
        for (const key in something) {
            result[key] = deepCopy(something[key]);
        }
        return result;
    } else if (Array.isArray(something)) {
        const result = [];
        for (const element of something) {
            const clone = deepCopy(element);
            result.push(clone);
        }
        return result;
    }
    return something;
}

// const test = [1, 2, 3];
// console.log(test);

const clone = deepCopy(company);
console.log(`Clone:`, clone);
console.log(`Clone !== Original is`, clone !== company)

/*
Задание 2
*/

function outer() {
    let y = 0;
    function inner(x) {
        y = x + y;
        return y;
        // return y = x + y;
    }
    return inner;
}

let sum = outer();
let result1 = sum(3);
let result2 = sum(5);
let result3 = sum(20);

console.log(result1, result2, result3);