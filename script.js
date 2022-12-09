const body = document.querySelector('body');
const container = document.querySelector('.container');
const mainText = document.querySelector('h1');
const clickText = document.querySelector('h2');

const howManyCircles = 70;
const minTextSize = 40;
const maxTextSize = 110;
const textSizeJump = 20;
let fontSize = 100;
const colors = [
  'green',
  'hotpink',
  'orange',
  'blue',
  'red',
  'purple',
  'magenta',
];

let textSizeChange = () => {
  let rNum = 0;
  if (fontSize >= minTextSize && fontSize <= maxTextSize) {
    rNum = Math.floor(Math.random() * 3) - 1;
  }
  if (fontSize < minTextSize) {
    rNum = 1;
  }
  if (fontSize > maxTextSize) {
    rNum = -1;
  }
  fontSize += rNum * textSizeJump;
  mainText.style = `font-size: ${fontSize}px`;
};

let colorChange = () => {
  for (let i = 0; i < howManyCircles; i++) {
    let rNum = Math.floor(Math.random() * 2);
    if (rNum == 1) {
      container.children[i].classList.add('clicked');
      colors.forEach((color) => {
        rColor = Math.floor(Math.random() * colors.length);
        container.children[
          i
        ].children[0].style = `background-color: ${colors[rColor]}`;
      });
      setTimeout(() => {
        container.children[
          i
        ].children[0].style = `background-color: --mainBackgroundColor`;
      }, 300);
    }
  }
  textSizeChange();
  clickText.style = 'display: none;';
};

for (let i = 1; i <= howManyCircles; i++) {
  let circleArea = document.createElement('div');
  let circle = document.createElement('div');
  circleArea.classList.add('circleArea');
  circle.classList.add('circle');
  circleArea.append(circle);
  container.append(circleArea);
}

document.addEventListener('click', () => {
  colorChange();
});

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    colorChange();
  }
});
