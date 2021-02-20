"use strict"

/*
Задание 1
*/

function task1() {
    const userName = prompt("Как тебя зовут?");
    const birthDate = +prompt("Какого ты года рождения?");
    const isValid = !Number.isNaN(birthDate);

    if (isValid && birthDate < 2021) {
        alert(userName + ", " + (2021 - birthDate));
    } else {
        alert("Ошибка");
    }
}

task1();


/*
Задание 2
*/

function task2() {
    const a = +prompt("Первое число");
    const b = +prompt("Второе число");
    const c = +prompt("Третье число");
    const result = a + b + c;
    const isValid = !Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c);

    if (isValid && result % 2 === 0) {
        alert(result + " (четное)");
    } else if (isValid && result % 2 > 0) {
        alert(result + " (нечетное)");
    } else {
        alert("Ошибка");
    }
}

task2();



/*
Задание 3
*/

function task3() {
    const x = +prompt("Первое число");
    const y = +prompt("Второе число");
    const z = +prompt("Третье число");
    const isValid = !Number.isNaN(x) && !Number.isNaN(y) && !Number.isNaN(z);
    const result = x + y + z;

    if (isValid) {
        alert(String(result) + " (среднее арифметическое = " + result / 3 + ")");
    } else {
        alert("Ошибка");
    }
}

task3();


/*
Задание 4
*/

function task4_1() {
    let value2 = 58798;
    let a1 = value2 % 10;
    let b1 = (value2 % 100 - a1) / 10;
    let c1 = (value2 % 1000 - ((b1 * 10) + a1)) / 100;
    let d1 = (value2 % 10000 - ((c1 * 100) + (b1 * 10) + a1)) / 1000;
    let e1 = (value2 % 100000 - ((d1 * 1000) + (c1 * 100) + (b1 * 10) + a1)) / 10000;
    console.log(a1, b1, c1, d1, e1);
}

task4_1();

function task4_2() {
    let value1 = 98765;
    let a2 = value1 % 10;
    let b2 = Math.trunc((value1 % 100) / 10);
    let с2 = Math.trunc((value1 % 1000) / 100);
    let d2 = Math.trunc((value1 % 10000) / 1000);
    let e2 = Math.trunc((value1 % 100000) / 10000);
    console.log(a2, b2, с2, d2, e2);
}

 task4_2();



