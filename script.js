// User selects symbol

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
  playerSelectionDiv.innerText = `You chose ${playerSelection}.`;
  computerSelectionDiv.innerText = `Computer chose ${computerSelection}.`;

// Compare symbols
  switch (playerSelection) {
    case 'rock':
      computerSelection === 'rock' ? roundResult = 'draw'
        : computerSelection == 'paper' ? roundResult = 'computer wins'
          : computerSelection == 'scissors' ? roundResult = 'player wins'
            : console.log('huh???');
      break;
    case 'paper':
      computerSelection === 'rock' ? roundResult = 'player wins'
        : computerSelection == 'paper' ? roundResult = 'draw'
          : computerSelection == 'scissors' ? roundResult = 'computer wins'
            : console.log('huh???');
      break;
    case 'scissors':
      computerSelection === 'rock' ? roundResult = 'computer wins'
        : computerSelection == 'paper' ? roundResult = 'player wins'
          : computerSelection == 'scissors' ? roundResult = 'draw'
            : console.log('huh???');
      break;
    default:
      roundResult = 'error: you have to select \'rock\', \'paper\', or \'scissors\'';
  }
  roundResultsDiv.innerText = roundResult;
  
// Keep score for round
  if (roundResult == 'computer wins') ++computerScore;
  else if (roundResult == 'player wins') ++playerScore;

  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;

// Show final winner at the end
  if (playerScore == 5) {
    gameResultsDiv.innerText = `${playerScore > computerScore ? 'You win' : computerScore > playerScore ? 'Computer wins' : 'It\'s a draw'}`;
    playerScore = 0;
    computerScore = 0;
  }
  return roundResult;
}


// Repeat for number of rounds



/** old code */
// // Function computerPlay that returns 'Rock', 'Paper', or 'Scissors'


// // User plays with buttons
// const rock = document.getElementById('rock');
// rock.addEventListener('click', setPlayerSelection.bind(rock, 'rock'));

// const paper = document.getElementById('paper');
// paper.addEventListener('click', setPlayerSelection.bind(paper, 'paper'));

// const scissors = document.getElementById('scissors');
// scissors.addEventListener('click', setPlayerSelection.bind(scissors, 'scissors'));

// function setPlayerSelection(symbol) {
//   let playerSelection = symbol;
//   console.log(`You chose ${playerSelection}.`);
// }


// // Function playRound takes in playerSelection and computerSelection, returns winner as string

// const computerSelection = computerPlay();
// // Create game() function
// const game = () => {
//   let compWins = 0;
//   let playerWins = 0;
//   let draws = 0;
// // Play 5 rounds and keep score
// //  for (let i = 0; i < 5; i++) {
// // User plays with buttons
// const rock = document.querySelector(".rock");
// const paper = document.querySelector(".paper");
// const scissors = document.querySelector(".scissors");

// let playerSelection = "";


// playerSelection.innerText = `You chose ${playerSelection}.`;

// let roundScore = playRound(playerSelection, computerSelection);
// roundScore == 'computer wins' ? ++compWins 
// : roundScore == 'player wins' ? ++playerWins 
// : ++draws;
// console.log(`Round ${i + 1}
// ${roundScore}
// Comp wins: ${compWins}
// Player wins: ${playerWins}
// Draws: ${draws}`)
// console.log();
// // Print winner at the end
//   let winMessage;
//   compWins > playerWins ? winMessage = `Computer: ${compWins}
//   Player: ${playerWins}
//   Computer wins`
//   : compWins < playerWins ? winMessage = `Computer: ${compWins}
//   Player: ${playerWins}
//   You win!`
//   : winMessage = `Computer: ${compWins}
//   Player: ${playerWins}
//   It's a draw`
//   return winMessage;
// }
// console.log(game())