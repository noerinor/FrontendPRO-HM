
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlider(index) {

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-index * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });


    prevBtn.style.display = index ? 'block' : 'none';
    nextBtn.style.display = index < slides.length - 1 ? 'block' : 'none';
}


nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider(currentIndex);
    }
});


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        currentIndex = index;
        updateSlider(currentIndex);
    });
});


updateSlider(currentIndex);
