"use strict"
/* 

//ПЕРВЫЙ ВАРИАНТ

const select = document.querySelector("select");
const container = document.querySelector(".container");
const timeContainers = createTimeContainers();

function createTimeContainers() {
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("time_container", "hours");

    const minutesContainer = document.createElement("div");
    minutesContainer.classList.add("time_container", "minutes");

    const secondsContainer = document.createElement("div");
    secondsContainer.classList.add("time_container", "seconds");

    const middayContainer = document.createElement("div");
    middayContainer.classList.add("time_container", "midday");

    const yearContainer = document.createElement("div");
    yearContainer.classList.add("time_container", "year");

    const monthContainer = document.createElement("div");
    monthContainer.classList.add("time_container", "month");

    const dayContainer = document.createElement("div");
    dayContainer.classList.add("time_container", "day");

    return { yearContainer, monthContainer, dayContainer, hoursContainer, minutesContainer, secondsContainer, middayContainer };
}

function displayTime() {
    let date = new Date();

    let year = date.getFullYear();
    let month = formatTime(date.getMonth() + 1);
    let day = formatTime(date.getDate());
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let midday = (hours >= 12) ? "PM" : "AM";

    if (select.value === "H:M AM/PM") {
        hours = formatTime(hours, false);
        minutes = formatTime(minutes, false);
        hours = (hours == 0) ? 12 : hours % 12;
    }

    timeContainers.yearContainer.innerText = `${year}`;
    timeContainers.monthContainer.innerText = `${month}`;
    timeContainers.dayContainer.innerText = day;
    timeContainers.hoursContainer.innerText = `${hours}`;
    timeContainers.minutesContainer.innerText = minutes;
    timeContainers.secondsContainer.innerText = `${seconds}`;
    timeContainers.middayContainer.innerText = midday;

    logDate(year, month, day, hours, minutes, seconds, midday);
}

function logDate(year, month, day, hours, minutes, seconds, midday) {
    switch (select.value) {
        case "HH:MM:SS":
            console.clear();
            console.log(`${hours}:${minutes}:${seconds}`);
            break;

        case "H:M AM/PM":
            console.clear();
            console.log(`${formatTime(hours, false)}:${formatTime(minutes, false)} ${midday}`);
            break;

        case "YYYY-MM-DD HH:MM":
            console.clear();
            console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
            break;

        default:
            break;
    }
}

function formatTime(time, addZero = true) {
    return time < 10 && addZero ? `0${time}` : time;
}

function changeDateFormat(format) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    switch (format) {
        case "HH:MM:SS":
            container.appendChild(timeContainers.hoursContainer);
            container.appendChild(timeContainers.minutesContainer);
            container.appendChild(timeContainers.secondsContainer);
            break;

        case "H:M AM/PM":
            container.appendChild(timeContainers.hoursContainer);
            container.appendChild(timeContainers.minutesContainer);
            container.appendChild(timeContainers.middayContainer);
            break;

        case "YYYY-MM-DD HH:MM":
            container.appendChild(timeContainers.yearContainer);
            container.appendChild(timeContainers.monthContainer);
            container.appendChild(timeContainers.dayContainer);
            container.appendChild(timeContainers.hoursContainer);
            container.appendChild(timeContainers.minutesContainer);
            break;

        default:
            break;
    }

    displayTime(format);
}

document.addEventListener("DOMContentLoaded", function () {
    changeDateFormat(select.value);

    setInterval(displayTime, 1000);
})

select.addEventListener("change", function (event) {
    changeDateFormat(this.value);
})

*/

const select = document.querySelector("select");
const container = document.querySelector(".container");
// const timeContainers = createTimeContainers();

// function displayTime(timeContainers) {
//     let date = new Date();

//     let year = date.getFullYear();
//     let month = formatTime(date.getMonth() + 1);
//     let day = formatTime(date.getDate());
//     let hours = formatTime(date.getHours());
//     let minutes = formatTime(date.getMinutes());
//     let seconds = formatTime(date.getSeconds());
//     let midday = (hours >= 12) ? "PM" : "AM";

//     if (select.value === "H:M AM/PM") {
//         hours = formatTime(hours, false);
//         minutes = formatTime(minutes, false);
//         hours = (hours == 0) ? 12 : hours % 12;
//     }

//     timeContainers.yearContainer.innerText = year;
//     timeContainers.monthContainer.innerText = `${month}`;
//     timeContainers.dayContainer.innerText = day;
//     timeContainers.hoursContainer.innerText = `${hours}`;
//     timeContainers.minutesContainer.innerText = minutes;
//     timeContainers.secondsContainer.innerText = `${seconds}`;
//     timeContainers.middayContainer.innerText = midday;

//     // logDate(year, month, day, hours, minutes, seconds, midday);
// }

// function logDate(year, month, day, hours, minutes, seconds, midday) {
//     switch (select.value) {
//         case "HH:MM:SS":
//             console.clear();
//             console.log(`${hours}:${minutes}:${seconds}`);
//             break;

//         case "H:M AM/PM":
//             console.clear();
//             console.log(`${formatTime(hours, false)}:${formatTime(minutes, false)} ${midday}`);
//             break;

//         case "YYYY-MM-DD HH:MM":
//             console.clear();
//             console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
//             break;

//         default:
//             break;
//     }
// }

function formatTime(time, addZero = true) {
    return time < 10 && addZero ? `0${time}` : time;
}

function changeDateFormat(format) {
    Array.from(format).forEach(element => {
        createTimeContainer(element);
    })
}

function createTimeContainer(element) {
    const div = document.createElement("div");
    div.className = element;
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.fontSize = "30px";
    div.style.paddingBottom = "10px";
    div.style.textAlign = "center";
    div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.innerText = element;
    container.appendChild(div);
}
// function createTimeContainers(format) {

//     const hoursContainer = document.createElement("div");
//     hoursContainer.classList.add("time_container", "hours");

//     const minutesContainer = document.createElement("div");
//     minutesContainer.classList.add("time_container", "minutes");

//     const secondsContainer = document.createElement("div");
//     secondsContainer.classList.add("time_container", "seconds");

//     const middayContainer = document.createElement("div");
//     middayContainer.classList.add("time_container", "midday");

//     const yearContainer = document.createElement("div");
//     yearContainer.classList.add("time_container", "year");

//     const monthContainer = document.createElement("div");
//     monthContainer.classList.add("time_container", "month");

//     const dayContainer = document.createElement("div");
//     dayContainer.classList.add("time_container", "day");

//     return { yearContainer, monthContainer, dayContainer, hoursContainer, minutesContainer, secondsContainer, middayContainer };
// }

document.addEventListener("DOMContentLoaded", function () {
    changeDateFormat(select.value);

    // setInterval(displayTime, 1000);
})

select.addEventListener("change", function (event) {
    changeDateFormat(this.value);
})