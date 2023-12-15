'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const bodyElement = document.querySelector('body').style;
const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');
const highscoreElement = document.querySelector('.highscore');

console.log('the secret number is: ', secretNumber);

function updateMessage(message) {
  messageElement.textContent = message;
}

function updateScore(score) {
  scoreElement.textContent = score;
}

function updateBackground(color) {
  bodyElement.backgroundColor = color;
}

function updateSecretNumber(secretNumber) {
  numberElement.textContent = secretNumber;
}

function updateGuessValue(newGuessValue) {
  guessElement.value = newGuessValue;
}

function resetScore() {
  score = 20;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = document.querySelector('.guess').value;
  const guess = Number(guessValue);
  console.log(guess, typeof guess);

  const stillInGame = score > 1;

  // when there's no input
  if (!guess) {
    updateMessage('⛔ No number!');
  }

  // when the player wins
  else if (guess === secretNumber) {
    updateMessage('🎉 Correct Number!');
    updateSecretNumber(secretNumber);
    updateBackground('#29c65b');

    document.querySelector('.number').style.width = '30rem';
    // keep track of the highscore
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (stillInGame) {
      updateMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      updateScore(score);
    } else {
      updateMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
});

// add an event listener for 'Again!' button to reset the game

document.querySelector('.again').addEventListener('click', function () {
  // reset the score
  resetScore();
  // reset the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('AGAIN! the secret number is: ', secretNumber);
  // reset the messages
  updateMessage('Start guessing...');
  updateScore(score);
  updateSecretNumber('?');
  updateGuessValue('');
  // reset the background color
  updateBackground('#222');
  // reset the number width
  document.querySelector('.number').style.width = '15rem';
});
