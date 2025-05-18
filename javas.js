
const sliderList = document.getElementById('sliderList');
const slides = sliderList.children;
const totalSlides = slides.length;
let currentIndex = 0;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const goTopBtn = document.getElementById('goTopBtn');
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menuLateral = document.getElementById('menuLateral');

// Función para actualizar el slider
function updateSlider() {
    const width = slides[0].clientWidth;
    sliderList.style.transform = `translateX(-${currentIndex * width}px)`;
}

function showPrev() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Scroll suave al top con botón
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar u ocultar botón de ir arriba
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
});

// Menú lateral toggle
function toggleMenu() {
    menuLateral.classList.toggle('active');
}

// Añadir evento click y teclado para menú hamburguesa
menuHamburguesa.addEventListener('click', toggleMenu);
menuHamburguesa.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Cerrar menú lateral al hacer click en un enlace
menuLateral.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuLateral.classList.remove('active');
    });
});

// Formulario (solo ejemplo básico de evento)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por contactarnos, ' + this.nombre.value + '!');
    this.reset();
});
