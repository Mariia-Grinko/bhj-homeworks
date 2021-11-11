const arrFontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');


for (let fontSize of arrFontSize) {
    fontSize.addEventListener('click', (e) => {
        e.preventDefault();

        let activeFontSize = arrFontSize.findIndex((sizeActive) => {
            return sizeActive.classList.contains('font-size_active');
        });

        arrFontSize[activeFontSize].classList.remove("font-size_active");
        fontSize.classList.add("font-size_active");

        book.className = 'book';

        let dataSize = fontSize.dataset.size;
        console.log(dataSize);

        if (dataSize != undefined) {
            book.classList.add("book_fs-" + dataSize);

        }

    });
}