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
  //random number between -1 and 1 that decides if main text should get bigger or smaller
  let rNum = 0;
  if (fontSize >= minTextSize && fontSize <= maxTextSize) {
    //randomize number between -1 and 1
    rNum = Math.floor(Math.random() * 3) - 1;
  }
  //checks if the curren text size is within the allowed parameters
  if (fontSize < minTextSize) {
    rNum = 1;
  }
  if (fontSize > maxTextSize) {
    rNum = -1;
  }
  //change text size multiplied by large number for extra size change
  fontSize += rNum * textSizeJump;
  mainText.style = `font-size: ${fontSize}px`;
};

let colorChange = () => {
  //loops through circles and has a 50/50 chance of being chosen
  for (let i = 0; i < howManyCircles; i++) {
    //random number between 1 and 2
    let rNum = Math.floor(Math.random() * 2); //number can be increased for fewer circles to be colored
    if (rNum == 1) {
      //chooses a random color from the colors array
      //loops through the colors array
      colors.forEach((color) => {
        //chooses a color between 0 and the color array length
        rColor = Math.floor(Math.random() * colors.length);
        //adds the color to the circle
        container.children[
          i
        ].children[0].style = `background-color: ${colors[rColor]}`;
      });
      setTimeout(() => {
        //removes the color after a set time
        container.children[
          i
        ].children[0].style = `background-color: --mainBackgroundColor`;
      }, 300);
    }
  }
  textSizeChange();
  //removes the "click" text
  clickText.style = 'display: none;';
};

//creates the circles
for (let i = 1; i <= howManyCircles; i++) {
  let circleArea = document.createElement('div');
  let circle = document.createElement('div');
  circleArea.classList.add('circleArea');
  circle.classList.add('circle');
  circleArea.append(circle);
  container.append(circleArea);
}
//checks if user clicks on the screen
document.addEventListener('click', () => {
  colorChange();
});
//checks if user presses spacebar
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    colorChange();
  }
});
