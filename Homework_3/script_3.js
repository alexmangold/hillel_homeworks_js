"use strict"

/*
Задание 1
*/

function task1() {
    let x = 10;
    let result = "";

    while (x >= 10 && x <= 20) {
        if (x < 20) {
            result += x + ", ";
            x++;
        } else {
            result += x;
            x++;
        }
    }
    console.log(result);
}

task1();


/*
Задание 2
*/

function task2() {
    let x = 10;

    while (x >= 10 && x <= 20) {
        console.log(x + "^2" + " = " + x ** 2);
        x++;
    }
}

task2();


/*
Задание 3
*/

function task3() {
    let x = 1;
    let y = 7;

    while (x < 10) {
        console.log(y + " * " + x + " = " + y * x);
        x++;
    }
}

task3();

/*
Задание 4
*/

/* Вариант не как в лекционном примере*/

function task4_1() {
    let z = 1;
    let sum = 0;

    while (z >= 1 && z <= 15) {
        sum += z;
        z++;
    }

    console.log("Cумма чисел в диапазоне от 1 до 15" + " = " + sum);
}

task4_1();


/* Вариант как в лекционном примере*/

function task4_2() {
    const start = 1;
    const end = 15;

    let z = start;
    let sum = 0;

    while (z <= end) {
        sum += z;
        z++;
    }

    console.log("Cумма чисел в диапазоне от 1 до 15" + " = " + sum);
}

// task4_2();

/*
Задание 5
*/

function task5() {
    let x = 15;
    let product = 1;

    while (x >= 15 && x <= 35) {
        product *= x;
        x++;
    }
    console.log("Произведение чисел в диапазоне от 15 до 35" + " = " + BigInt(product));
}

task5();

/*
Задание 6
*/

function task6() {
    let x = 1;
    let y = 1;
    let sum = 0;
    let average = "";

    while (x >= 1 && x <= 500) {
        sum += x;
        average = sum / y;
        x++;
        y++;
    }
    console.log("Среднее арифметическое " + sum + " = " + average);

}

task6();

/*
Задание 7
*/

/* Первый вариант */

function task7_1() {
    let i = 30;
    let sum = 0;

    for (; i >= 30 && i <= 80; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log("Cумма четных чисел в диапазоне от 30 до 80" + " = " + sum);
}

task7_1();

/* Второй вариант */

function task7_2() {
    let i = 30;
    let sum = 0;

    for (; i >= 30 && i <= 80; i++) {
        if (i % 2 === 1) {
            continue;
        }
        sum += i;
    }
    console.log("Cумма четных чисел в диапазоне от 30 до 80" + " = " + sum);
}

// task7_2();


/* 
Задание 8 
*/

/* Вывод в строку */

function task8_1() {
    let i = 100;
    let result = "";

    for (; i >= 100 && i <= 200; i++) {
        if (i % 3 !== 0) {
            continue;
        }
        result += i + " ";
    }
    console.log("Числа в диапазоне от 100 до 200 кратные 3: " + result);
}

// task8_1();

/* Вывод в столбик */

function task8_2() {
    let i = 100;

    console.log("Числа в диапазоне от 100 до 200 кратные 3:");

    for (; i >= 100 && i <= 200; i++) {
        if (i % 3 !== 0) {
            continue;
        }
        console.log(i);
    }
}

task8_2();

/* 
Задание 9 
*/

function task9() {
    let a = prompt("Число");
    let result = "";

    let quantity = 0;
    let sum = 0;

    let isValid = !Number.isNaN(+a);

    if (isValid && a !== null) {
        for (let b = 1; b <= a; b++) {
            if (a % b === 0) {
                result += b + " ";
                if (b % 2 === 0) {
                    quantity++;
                    sum += b;
                }
            }
        }
        if (a < 0) {
            console.log("Отрицательное число");
        } else {
            console.log("Делители " + a + ": " + result);
            if (a % 2 === 1) {
                console.log("Нет четных делителей");
            } else {
                console.log("Количество четных делителей: " + quantity);
                console.log("Сумма четных делителей: " + sum);
            }
        }
    } else {
        console.log("Нет числа");
    }
}

task9();


/*
Задание 10
*/

/* Вариант for */

function task10_1() {
    for (let x = 1; x < 10; x++) {
        console.log(" ");
        for (let y = 1; y < 10; y++) {
            console.log(x + " * " + y + " = " + x * y);
        }
    }
}

task10_1();

/* Вариант while */

function task10_2() {
    let x = 1;
    let y = 1;

    while (x < 10) {
        y = 1;
        console.log(" ");
        while (y < 10) {
            console.log(x + " * " + y + " = " + x * y);
            y++;
        }
        x++;
    }
}

// task10_2();

/*
Задание 11 
*/

function task11() {
    let a = Math.round(Math.random() * 10);
    let b;

    do {
        // console.log(a);
        b = prompt("Угадайте число от 0 до 10");
        if (Number.isNaN(+b)) {
            alert("ЧИСЛО");
            continue;
        }
        if (b > 10 || b < 0) {
            alert("от НУЛЯ до ДЕСЯТИ");
            continue;
        }
        if (b === null) {
            alert("Ну ладно :(");
            break;
        }
        if (a === +b) {
            alert("Верно - " + a + "!");
            break;
        }
    } while (true);
}

task11();