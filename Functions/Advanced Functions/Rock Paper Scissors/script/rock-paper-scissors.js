let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {}

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
  }, 1000);
  isAutoPlaying = true
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

// Rock Button
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

  // Paper Button
  document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
      playGame('paper');
    });

  // Scissors Button
  document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
      playGame('scissors')
    });  

    // Reset Button
    document.querySelector('.js-reset-button')
      .addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        localStorage.removeItem('score');

        updateScoreElement();
      });

      // Auto Play
    document.querySelector('.js-aut-play')
      .addEventListener('click', () => {
        autoPlay();
      })  


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock')
  } else if (event.key === 'p') {
    playGame('paper')
  } else if (event.key === 's') {
    playGame('scissors')
  }
});      

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
      result = 'you lose';

    } else if (computerMove === 'paper') {
      result = 'you win';

    } else if (computerMove === 'scissors') {
      result = 'tie';
    }

  } else if (playerMove === 'paper') {

    if (computerMove === 'rock') {
      result = 'you win';

    } else if (computerMove === 'paper') {
      result = 'tie';

    } else if (computerMove === 'scissors') {
      result = 'you lose';
    }

  } else if (playerMove === 'rock') {

    if (computerMove === 'rock') {
      result = 'tie';

    } else if (computerMove === 'paper') {
      result = 'you lose';

    } else if (computerMove === 'scissors') {
      result = 'you win';
    }
  }

  if (result === 'you win') {
    score.wins += 1;

  } else if (result === 'you lose') {
    score.losses += 1;

  } else if (result === 'tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `
    You
    <img class="move-icon" src="emoji-images/${playerMove}-emoji.png">
    <img class="move-icon" src="emoji-images/${computerMove}-emoji.png">
    Computer
  `;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `
    Wins: ${score.wins}
    Losses: ${score.losses}
    Ties: ${score.ties}
  `;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}