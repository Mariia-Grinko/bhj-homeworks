const arrInterestCheck = Array.from(document.querySelectorAll('.interest__check'));

for (let interestCheck of arrInterestCheck) {

    interestCheck.addEventListener('change', () => {

        let subCheckbox = interestCheck.closest('.interest').querySelector('.interests');

        if (subCheckbox !== null) {
            let subElems = subCheckbox.querySelectorAll('.interest__check');
            for (let subElem of subElems) {
                subElem.checked = interestCheck.checked;
            }
        }

    });
}