'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log('the secret number is: ', secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const stillInGame = score > 1;

  // when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }

  // when the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#29c65b';

    document.querySelector('.number').style.width = '30rem';
    // keep track of the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when input is too high
  else if (guess > secretNumber) {
    if (stillInGame) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when input is too low
  else if (guess < secretNumber) {
    if (stillInGame) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// add an event listener for 'Again!' button to reset the game

document.querySelector('.again').addEventListener('click', function () {
  console.log('clicked again');
  // reset the score
  score = 20;
  // reset the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('the secret number is: ', secretNumber);
  // reset the messages
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset the number width
  document.querySelector('.number').style.width = '15rem';
});
