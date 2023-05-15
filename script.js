"use strict";

const btnAgain = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const inputEl = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

const checkNumber = function () {
  console.log(secretNumber);

  const guess = Number(inputEl.value);

  //   When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    displayMessage("🥳 Correct number!");
    document.body.style.backgroundColor = "#60b347";
    numberEl.textContent = secretNumber;
    numberEl.style.width = "30rem";
    btnCheck.disabled = true;
    inputEl.disabled = true;

    // When guess number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    } else {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "💥 You lost the game!";
    }
  }
};

const resetGame = function () {
  score = 20;
  document.body.style.backgroundColor = "#333";
  numberEl.style.width = "15rem";
  numberEl.textContent = "?";
  displayMessage("Start guessing...");

  inputEl.value = "";
  scoreEl.textContent = score;
  secretNumber = generateSecretNumber();

  btnCheck.disabled = false;
  inputEl.disabled = false;
};

// Event listener
btnCheck.addEventListener("click", checkNumber);
btnAgain.addEventListener("click", resetGame);
