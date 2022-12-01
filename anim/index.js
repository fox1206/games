const board = document.querySelector('#board');
const SQUARES_NUMBER = 504;
const colors = ['#00FFFF', '#F08080', '#FF69B4', '#FFFF00', '#FF00FF', '#7B68EE', '#9ACD32', '#ADFF2F', '#00FA9A', '#FF4500'];


for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');  

  // навели мышь
  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  // убрали мышь
  square.addEventListener('mouseleave', () => {
    deleteColor(square);
  })

  board.append(square);
}

function setColor(square){
  square.style.backgroundColor = `${colorRandom()}`;
  square.style.boxShadow = `0 0 0.125rem ${colorRandom()}, 0 0 0.9rem ${colorRandom()}`;
}

function deleteColor(square){
  square.style.backgroundColor = '#1d1d1d';
  square.style.boxShadow = `0 0 0.125rem #000`;
}

function colorRandom(){
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
}
