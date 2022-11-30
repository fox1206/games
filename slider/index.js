const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const slide = document.querySelector('.main-slide');
const images = document.querySelectorAll('.main-slide div');
const container = document.querySelector('.container');

let activeSlider = 0;

sidebar.style.top = `-${(images.length - 1) * 100}vh`;

downBtn.addEventListener('click', () => {
  changeSlide('up');
});

upBtn.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction){
  if(direction === 'up'){ 
    activeSlider++;
    if(activeSlider === images.length){ activeSlider = 0 }
  } else if(direction === 'down'){
    activeSlider--;
    if(activeSlider < 0){ activeSlider = images.length - 1 }
  }

  const height = container.clientHeight;

  slide.style.transform = `translateY(-${activeSlider * height}px`;
  sidebar.style.transform = `translateY(${activeSlider * height}px`;
}