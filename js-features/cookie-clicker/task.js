const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker_speed");

cookie.onclick = function() {

    let counter = +(clickerCounter.textContent);
    counter++;
    clickerCounter.textContent = counter;

    setTimeout(() => { cookie.width = 200 }, 100);
    cookie.width = 300;
}