const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
});

for (let dropdownItem of dropdownItems) {
    let dropdownLink = dropdownItem.querySelector('.dropdown__link');

    dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownValue.textContent = dropdownLink.textContent;
        dropdownList.classList.toggle('dropdown__list_active');
    });
}