const reveal = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener('scroll', onScroll);

function onScroll() {
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < reveal.length; i++) {
        const revealTop = reveal[i].getBoundingClientRect().top;
        if (revealTop < viewportHeight) {
            reveal[i].classList.add("reveal_active");
        }
    }
};