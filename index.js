let randomNumber1 = Math.floor((Math.random() * 6) + 1); // 1-6
let dice1 = document.querySelector(".img1");  // image for dice1
dice1.src = "images/dice"+randomNumber1+".png";  // images/dice1.png - images/dice6.png


let randomNumber2 = Math.floor((Math.random() * 6) + 1);  // 1-6
let dice2 = document.querySelector(".img2");  // image for dice2
dice2.src = "images/dice"+randomNumber2+".png";  // images/dice2.png - images/dice6.png


let header = document.querySelector("h1");  // header
let result;
if (randomNumber1 > randomNumber2) {  // if player1 wins
  result = "🎆 Player 1 wins! 🎆"
}
else if (randomNumber1 < randomNumber2) {  // if player2 wins
  result = "🎆 Player 2 wins! 🎆"
}
else {
  result = "🏳️ Draw! 🏳️"  // if there is a draw
}
header.textContent = result;  // display result in header