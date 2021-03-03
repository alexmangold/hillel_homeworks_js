"use strict"

/*
Задание 1
*/

function task1() {
    const x = +prompt("Введите 'х'");
    const y = +prompt("Введите 'y'");
    const isValid = !Number.isNaN(x) && !Number.isNaN(y);

    if (isValid && x > y) {
        console.log("x > y")
        console.log(x + " > " + y)
    } else if (isValid && x < y) {
        console.log("x < y")
        console.log(x + " < " + y)
    } else if (isValid && x === y) {
        console.log("x = y")
        console.log(x + " = " + y)
    } else {
        console.log("Ошибка");
    }
}

task1();


/*
Задание 2
*/

function task2() {
    const value = prompt("Введите число");
    const isValid = !Number.isNaN(+value);

    if (!isValid || value === null) {
        console.log("Ошибка");
    } else if (isValid && +value % 2 === 0) {
        console.log(value % 10 + " (четное)");
    } else if (isValid && +value % 2 !== 0) {
        console.log(value % 10 + " (нечетное)");
    }
}

task2();


/*
Задание 3
*/

function task3() {
    const userName = prompt("Ваше имя");
    const userAge = prompt("Ваш возраст");
    const alcUsage = confirm("Алкоголь употребляем?");
    const isValid = !Number.isNaN(+userAge);

    if (userName === null || userAge === null) {
        console.log("Ошибка")
    } else if (isValid) {
        if (+userAge > 40 && alcUsage === true) {
            console.log(userName + ", не злоупотребляйте")
        } else if (+userAge < 18 && alcUsage === true) {
            console.log(userName + ", ты что?! Маме расскажу!")
        } else if ((+userAge >= 18 || +userAge <= 40) && alcUsage === true) {
            console.log(userName + ", только водку с пивом не мешай...")
        } else if (alcUsage === false) {
            console.log(userName + ", так держать!")
        }
    } else {
        console.log("Ошибка")
    }
}

task3();



