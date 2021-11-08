let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let close = document.querySelectorAll('.modal__close');
let showSuccess = document.querySelector('.show-success');

modalMain.classList.add("modal_active");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        this.closest('.modal').classList.remove("modal_active");
    }
};

showSuccess.onclick = function() {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
};