let menuLink = document.querySelectorAll(".menu__link")


for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        let subMenu = this.closest(".menu__item").querySelector(".menu_sub");
        if (subMenu != null) {
            subMenu.classList.toggle("menu_active");
            return false;
        }
    }
};