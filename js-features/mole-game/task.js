let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function cleanup() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
    const elem = document.getElementById("hole" + i);

    elem.onclick = function() {
        let deadNum = +(dead.textContent);
        let lostNum = +(lost.textContent);
        if (this.className.includes("hole_has-mole")) {
            deadNum++;
            dead.textContent = deadNum;
        } else {
            lostNum++;
            lost.textContent = lostNum;
        }
        if (lostNum > 4) {
            alert("Вы проиграли!");
            cleanup();
        } else if (deadNum > 9) {
            alert("Вы победили!");
            cleanup();
        }

    }
}