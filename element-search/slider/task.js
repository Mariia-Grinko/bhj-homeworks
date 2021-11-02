let next = document.querySelector(".slider__arrow_next");
let prev = document.querySelector(".slider__arrow_prev");
let sliderItems = document.querySelectorAll(".slider__item");
let dots = document.querySelectorAll(".slider__dot");

let activeSlide = 0;


//сделать слайдер активным добавить класс и точки

function slideShow(activeSlideNumber) {
    for (let sliderItem of sliderItems) {
        sliderItem.classList.remove('slider__item_active')
    }
    for (let dot of dots) {
        dot.classList.remove('slider__dot_active')
    }
    sliderItems[activeSlideNumber].classList.add('slider__item_active');
    dots[activeSlideNumber].classList.add('slider__dot_active');

};

next.addEventListener('click', function() {

    if (activeSlide >= sliderItems.length - 1) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    slideShow(activeSlide);
});
prev.addEventListener('click', function() {

    if (activeSlide <= 0) {
        activeSlide = sliderItems.length - 1;
    } else {
        activeSlide--;
    }
    slideShow(activeSlide);
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        slideShow(i);
    });
}