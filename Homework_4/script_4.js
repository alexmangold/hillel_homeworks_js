"use strict"

/*
Задание 1
*/

function calcArea(R) {
    return Math.PI * (R ** 2);
}

function getArea() {
    let R = prompt("Найти площадь окружности", "Введите радиус");
    let area;

    let isValid = !Number.isNaN(+R);

    if (R !== null) {
        if (isValid) {
            area = calcArea(R);
        } else {
            return "Ошибка";
        }
    } else {
        return ":(";
    }

    return "Площадь окружности = " + Math.round(area);
}

const resultArea = getArea();
console.log(resultArea);

/*
Задание 2
*/

function calcCirc(R) {
    return 2 * (Math.PI * R);
}

function getCirc() {
    let R = prompt("Найти длину окружности", "Введите радиус")
    let circ;

    let isValid = !Number.isNaN(+R);

    if (R !== null) {
        if (isValid) {
            circ = calcCirc(R);
        } else {
            return "Ошибка";
        }
    } else {
        return ":(";
    }

    return "Длина окружности = " + Math.round(circ);
}

const resultCirc = getCirc();
console.log(resultCirc);

/*
Задание 3
*/

//calcAverage получает две переменные

function calcAverage(a, b) {
    return (Number(a) + Number(b)) / 2;
}

function getAverage() {
    let a = prompt("Найти среднее арифметическое", "Введите первое число");
    let b = prompt("Найти среднее арифметическое", "Введите второе число");
    let sum;
    let average;

    let isValid = !Number.isNaN(+a) && !Number.isNaN(+b);

    if (a !== null && b !== null) {
        if (isValid) {
            sum = Number(a) + Number(b);
            average = calcAverage(a, b);
        } else {
            return "Ошибка";
        }
    } else {
        return ":(";
    }

    return "Среднее арифметическое " + a + " + " + b + " (" + sum + ")" + " = " + average;

}

const resultAverage = getAverage();
console.log(resultAverage);

/*
Задание 4
*/

//Вариант с default

function calcOperation(x, y, action) {
    switch (action) {
        case "+":
            return Number(x) + Number(y);
        case "-":
            return Number(x) - Number(y);
        case "*":
            return Number(x) * Number(y);
        case "/":
            return Number(x) / Number(y);
        case "^":
            return Number(x) ** Number(y);
        default: return;
    }
}

function getOperation() {
    let x = prompt("Введите Х");
    let y = prompt("Введите Y");
    let action = prompt("Введите действие (+, -, *, /, ^)")
    let operation;

    let varIsValid = !Number.isNaN(+x) && !Number.isNaN(+y);
    let actionIsValid = action === "+" || action === "-" || action === "*" || action === "/" || action === "^";

    if (x !== null && y !== null && action !== null) {
        if (varIsValid) {
            operation = calcOperation(x, y, action);
        } else {
            return "Ошибка";
        }
    } else {
        return ":(";
    }

        if (actionIsValid) {
            return x + " " + action + " " + y + " = " + operation;
        } else {
            return "Неправильное действие";
        }
}

const resultOperation = getOperation();
console.log(resultOperation);