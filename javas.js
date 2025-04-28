let currentIndex = 0;

const sliderList = document.getElementById('sliderList');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const totalSlides = sliderList.children.length;

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderList.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});
