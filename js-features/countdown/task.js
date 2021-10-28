let sec = document.getElementById("timer");
let count = 59;
let counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;

    if (count < 0) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    } else {
        sec.textContent = count;
    }
}


// document.addEventListener('DOMContentLoaded', () => {
//     const data = new Date('00:00:00');

//     let hours = document.getElementById("hours");
//     let minutes = document.getElementById("minutes");
//     let seconds = document.getElementById("seconds");

//     const timeCount = () => {
//         let now = new Date();
//         let result = data - now;
//         console.log(result);

//         let hoursNumb = Math.floor(result / 1000 / 60 / 60) % 24;
//         let minutesNumb = Math.floor(result / 1000 / 60) % 60;
//         let secondsNumb = Math.floor(result / 1000) % 60;

//         hours.textContent = hoursNumb;
//         minutes.textContent = minutesNumb;
//         seconds.textContent = secondsNumb;
//     };
//     setInterval(timeCount, 1000);
// });

// не могу разобраться с Data. Вообще не пониаю что делать.