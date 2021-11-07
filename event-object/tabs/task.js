const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content");


for (let i = 0; i < tabs.length; i++) {
    let currentTab = tabs[i];
    let currentCont = content[i];
    currentTab.addEventListener("click", function() {
        for (let tab of tabs) {
            tab.classList.remove("tab_active");
        }
        for (let cont of content) {
            cont.classList.remove("tab__content_active");
        }
        currentTab.classList.add("tab_active");
        currentCont.classList.add("tab__content_active");
    });
}