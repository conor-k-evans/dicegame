//Random numbers for each dice roll
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//Variables for each dice image
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

//Changing dice pictures to represent their randomly chosen values
image1.setAttribute("src","images/dice" + randomNumber1 + ".png");
image2.setAttribute("src","images/dice" + randomNumber2 + ".png");

//Variable for the header text (Originally says "Refresh Me")
var header = document.querySelector("h1")

//Checking which player wins and declaring that to the user (Also includes case for a draw)
if (randomNumber1 > randomNumber2) {
  header.innerHTML = '<i class="fas fa-flag" style="color:white;"></i> Player 1 Wins!';
}
else if (randomNumber1 < randomNumber2) {
  header.innerHTML = 'Player 2 Wins! <i class="fas fa-flag" style="color:white;"></i>';
}
else {
  header.textContent = "Draw!";
}
