let menuLink = document.querySelectorAll(".menu__link")


for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        this.closest(".menu__item").querySelector(".menu_sub").classList.toggle("menu_active");
        return false;
    }

};