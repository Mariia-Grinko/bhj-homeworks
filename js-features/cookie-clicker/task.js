const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker_speed");

let speed = Date.now();

cookie.onclick = function() {

    let time = ;
    clickerSpeed.textContent = (1 / (time)).toFixed(2);

    let counter = +(clickerCounter.textContent);
    counter++;
    clickerCounter.textContent = counter;

    setTimeout(() => { cookie.width = 200 }, 100);
    cookie.width = 300;
}

// Начала писать скорость клика, но вообще не мониаю что сама написала, и куда дальше двигаться.
// Проблемы с понимание применения Date.