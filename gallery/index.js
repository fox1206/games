const slides = document.querySelectorAll('.slide');

// переключение по слайдам
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active');
  })
});

// очистить от стилей
function clearActiveClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}