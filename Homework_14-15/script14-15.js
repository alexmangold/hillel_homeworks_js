"use strict"
//
const select = document.querySelector("select");
const containers = createTimeContainers();

function createTimeContainers() {
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("time_container", "hours");
    hoursContainer.hidden = true;

    const minutesContainer = document.createElement("div");
    minutesContainer.classList.add("time_container", "minutes");
    minutesContainer.hidden = true;

    const secondsContainer = document.createElement("div");
    secondsContainer.classList.add("time_container", "seconds");
    secondsContainer.hidden = true;

    const middayContainer = document.createElement("div");
    middayContainer.classList.add("time_container", "midday");
    middayContainer.hidden = true;

    const yearContainer = document.createElement("div");
    yearContainer.classList.add("time_container", "year");
    yearContainer.hidden = true;

    const monthContainer = document.createElement("div");
    monthContainer.classList.add("time_container", "month");
    monthContainer.hidden = true;

    const dayContainer = document.createElement("div");
    dayContainer.classList.add("time_container", "day");
    dayContainer.hidden = true;

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

    containers.yearContainer.innerText = `${year}`;
    containers.monthContainer.innerText = `${month}`;
    containers.dayContainer.innerText = day;
    containers.hoursContainer.innerText = `${hours}`;
    containers.minutesContainer.innerText = minutes;
    containers.secondsContainer.innerText = `${seconds}`;
    containers.middayContainer.innerText = midday;

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
    for (const key in containers) {
        containers[key].hidden = true;
    }

    switch (format) {
        case "HH:MM:SS":
            containers.hoursContainer.hidden = false;
            containers.minutesContainer.hidden = false;
            containers.secondsContainer.hidden = false;
            break;

        case "H:M AM/PM":
            containers.hoursContainer.hidden = false;
            containers.minutesContainer.hidden = false;
            containers.middayContainer.hidden = false;
            break;

        case "YYYY-MM-DD HH:MM":
            containers.yearContainer.hidden = false;
            containers.monthContainer.hidden = false;
            containers.dayContainer.hidden = false;
            containers.hoursContainer.hidden = false;
            containers.minutesContainer.hidden = false;
            break;

        default:
            break;
    }

    displayTime(format);
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    for (const key in containers) {
        container.appendChild(containers[key]);
    }

    changeDateFormat(select.value);

    setInterval(displayTime, 1000);
})

select.addEventListener("change", function (event) {
    changeDateFormat(this.value);
})