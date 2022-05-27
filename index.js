let randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

let dice1 = document.querySelector(".img1");
dice1.src = "images/dice"+randomNumber1+".png";