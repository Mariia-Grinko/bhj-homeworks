let menuItem = document.querySelectorAll("menu__item");
let menuSub = document.querySelectorAll("menu__sub");
let menuLink = document.querySelectorAll("menu__link")


for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        modalMain.classList.remove("modal_active");
    }
    menuSub.classList.add("menu_active");
};