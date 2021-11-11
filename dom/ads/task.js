const rotatorCase = document.querySelectorAll('.rotator__case');

function rotation() {

    let activeWord = Array.from(rotatorCase).findIndex((rotatorCase) => {
        return rotatorCase.classList.toggle('rotator__case_active');
    });

    if (activeWord >= rotatorCase.length - 1) {
        activeWord = 0;
    } else {
        activeWord++;
    }
};
setInterval(rotation, 1000);