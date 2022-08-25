// Target result divs on page
const computerSelectionDiv = document.querySelector(".computer-choice");
const playerSelectionDiv = document.querySelector('.player-choice');
const roundResultsDiv = document.querySelector('.round-results');
const gameResultsDiv = document.querySelector('.game-results');
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score');


// User selects symbol to start game
const rock = document.getElementById('rock');
rock.addEventListener('click', playRound.bind(rock, 'rock'));

const paper = document.getElementById('paper');
paper.addEventListener('click', playRound.bind(paper, 'paper'));

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', playRound.bind(scissors, 'scissors'));

// Computer selects symbol
function computerPlay() {
  const plays = ['rock', 'paper', 'scissors'];
  return plays[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

  let roundResult;
  computerSelection = computerPlay();

  gameResultsDiv.innerText = '';
  playerSelectionDiv.innerHTML = `<i class="selection-icon far fa-hand-${playerSelection}" data-selection="${playerSelection}"></i><span class="play-description">${playerSelection}</span>`;
  computerSelectionDiv.innerHTML = `<i class="selection-icon far fa-hand-${computerSelection}" data-selection="${playerSelection}"></i><span class="play-description">${computerSelection}</span>`;

// Compare symbols
  switch (playerSelection) {
    case 'rock':
      computerSelection === 'rock' ? roundResult = 'It\'s a draw'
        : computerSelection === 'paper' ? roundResult = 'Computer wins'
          : computerSelection === 'scissors' ? roundResult = 'You win'
            : console.log('huh???');
      break;
    case 'paper':
      computerSelection === 'rock' ? roundResult = 'You win'
        : computerSelection === 'paper' ? roundResult = 'It\'s a draw'
          : computerSelection === 'scissors' ? roundResult = 'Computer wins'
            : console.log('huh???');
      break;
    case 'scissors':
      computerSelection === 'rock' ? roundResult = 'Computer wins'
        : computerSelection === 'paper' ? roundResult = 'You win'
          : computerSelection === 'scissors' ? roundResult = 'It\'s a draw'
            : console.log('huh???');
      break;
    default:
      roundResult = 'error: you have to select \'rock\', \'paper\', or \'scissors\'';
  }
  roundResultsDiv.innerText = roundResult;
  
// Keep score for round
  if (roundResult == 'Computer wins') ++computerScore;
  else if (roundResult == 'You win') ++playerScore;

  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;

// Show final winner at the end and reset scores
  if (playerScore == 5) {
    gameResultsDiv.innerText = `${playerScore > computerScore ? 'You win!' : computerScore > playerScore ? 'The computer wins.' : 'It\'s a draw'}`;
    playerScore = 0;
    computerScore = 0;
  }
  return roundResult;
}