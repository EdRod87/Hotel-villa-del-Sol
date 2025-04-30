const sliderList = document.getElementById('sliderList');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
const totalSlides = sliderList.children.length;

function updateSlider() {
    sliderList.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlider();
});

setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
}, 5000);
