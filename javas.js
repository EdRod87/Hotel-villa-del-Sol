const slider = document.getElementById('sliderList');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;
const totalSlides = slider.children.length;

function showSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
}

prev.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
});

next.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    showSlide(index);
});

setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
}, 5000);
