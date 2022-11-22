const container = document.querySelector('.container');

let selectedCircle;
let randomNumber;
let canPress = true;

getRandomTile = (i) => {
  setTimeout(() => {
    let tileNumber;

    randomNumber = Math.floor(Math.random() * container.children.length);

    tileNumber = randomNumber;
    container.children[tileNumber].children[0].classList.add(
      'computerSelected'
    );
    if (
      container.children[tileNumber].children[0].classList.contains(
        'userSelected'
      )
    ) {
      console.log('oof');
    }
  }, 1000 * i);
};

for (let i = 0; i < 12; i++) {
  let circle = document.createElement('div');
  let circleArea = document.createElement('div');

  circle.classList.add('circle');
  circleArea.classList.add('circleArea');
  circleArea.append(circle);
  container.append(circleArea);

  circle.addEventListener('click', () => {
    if (canPress == true) {
      canPress = false;
      for (let i = 0; i < container.children.length; i++) {
        container.children[i].children[0].classList.remove('userSelected');
      }
      circle.classList.toggle('userSelected');
      for (let i = 1; i <= 3; i++) {
        getRandomTile(i);
      }
    }
    canPress = true;
  });
}
