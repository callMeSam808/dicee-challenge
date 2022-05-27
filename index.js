let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let dice1 = document.querySelector(".img1");
dice1.src = "images/dice"+randomNumber1+".png";

let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let dice2 = document.querySelector(".img2");
dice2.src = "images/dice"+randomNumber2+".png";

let header = document.querySelector("h1");
let result;
if (randomNumber1 > randomNumber2) {
  result = "Player 1 wins!"
}
else if (randomNumber1 < randomNumber2) {
  result = "Player 2 wins!"
}
else {
  result = "Draw!"
}
header.textContent = result;