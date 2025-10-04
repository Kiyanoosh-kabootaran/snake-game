const playBoard = document.querySelector('.play-board');

let foodX , foodY;
let snakeBody = [];
let snakeX = 5 , snakeY = 10;
let velocityX = 0 ,velocityY = 0;
const changeFoodPosition = () => {
  //Passing a random 0-30 value as food position
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
  if(e.key === "ArrowUp"){
    velocityY = -1;
    velocityX = 0;

  } else if(e.key === "ArrowDown"){
    velocityY = 1;
    velocityX = 0;

  } else if(e.key === "ArrowLeft"){
    velocityY = 0;
    velocityX = -1;

  } else if(e.key === "ArrowRight"){
    velocityY = 0;
    velocityX = 1;
  }
}

const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

   if(snakeX === foodX && snakeY===foodY){
    changeFoodPosition();
    snakeBody.push([foodX,foodY]); //Pushing food position to snake body array
    console.log(snakeBody);
  }

  for(let i = snakeBody.length -1 ; i > 0 ; i--){
    //Shifting forward the values of the elements in the snake body by one 
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX , snakeY];//Setting first element of snake body to current snake position

  //Updating the snake's head position based on the current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  for(let i = 0 ; i<snakeBody.length ; i++){
    //Adding a div for each parts of the snakebody
     htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
  }
 
  playBoard.innerHTML = htmlMarkup;

 
}

changeFoodPosition();
initGame();

setInterval(initGame , 125);
document.addEventListener("keydown" , changeDirection);