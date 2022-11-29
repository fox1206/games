let url = 'https://api.unsplash.com/search/photos?query=cat&per_page=5&orientation=landscape&client_id=3WpPCmsMiCip2kElqstSmR-fsccqRSrk7I9biUSX5R0';

const slides = document.querySelectorAll('.slide');
const descriptions = document.querySelectorAll('.title');
const theme = document.querySelector('.theme');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

// переключение по слайдам
slides.forEach((slide, i) => {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active');
    descriptions[i].classList.add('active');
  })
});

// очистить от стилей
function clearActiveClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');  
  });

  descriptions.forEach(desc => {
    desc.classList.remove('active');  
  });
}

// переключение темы
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  sun.classList.toggle('active');
  moon.classList.toggle('active');
});


// ============================= РАБОТА С API =============================
// данные с сервиса
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  
  show(data);
}

// показать картинки  и описание к картинкам
function show(data){
  for(let i = 0; i < slides.length; i++){    
    data.results.map((el, i) => {
      slides[i].style.backgroundImage = `url('${el.urls.regular}')`;
    });
    slides[i++];
  }

  for(let i = 0; i < descriptions.length; i++){    
    data.results.map((el, i) => {
      descriptions[i].innerHTML = `${(el.alt_description)}`;
    });
    descriptions[i++];
  }
}

// вызов функций
getData();