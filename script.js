const body = document.querySelector("body");
const container = document.querySelector('.container');

const howManyCircles = 70;
const colors = [
  "green", "hotpink", "orange", "blue", "red", "purple", "magenta"
];


colorChange = () => {
  for(let i = 0; i < howManyCircles; i++)
  {
    let rNum = Math.floor(Math.random() * 2);
    if(rNum == 1)
    {
      container.children[i].classList.add("clicked");
      colors.forEach(color => {
        rColor = Math.floor(Math.random() * colors.length);
        container.children[i].children[0].style = `background-color: ${colors[rColor]}`
      });
      setTimeout(() => {
        container.children[i].children[0].style = "background-color: white"
      }, 300);
    }
  }
}

for(let i = 1; i <= howManyCircles; i++)
{
  let circleArea = document.createElement("div");
  let circle = document.createElement("div");
  circleArea.classList.add("circleArea");
  circle.classList.add("circle");
  circleArea.append(circle);
  container.append(circleArea);
}

document.addEventListener("click", () => {
  colorChange();
})


document.addEventListener("keydown", (e) => {
  if(e.key=== " ")
  {
    colorChange();
  }
})

