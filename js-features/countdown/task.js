let start = 5;

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function getNumber(number) {

    if (number < 10) {
        number = '0' + number;
    } else {
        number = '' + number;
    }
    return number;
};

const timeCount = () => {

    let curentSeconds = start % 60;
    let countOfMin = (start - curentSeconds) / 60;
    let curentMinutes = countOfMin % 60;
    let curentHours = (countOfMin - curentMinutes) / 60;

    hours.textContent = getNumber(curentHours);
    minutes.textContent = getNumber(curentMinutes);
    seconds.textContent = getNumber(curentSeconds);


    if (start < 0) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    }
    start--;
};

let counter = setInterval(timeCount, 1000);