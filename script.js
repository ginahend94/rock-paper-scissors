// Write a function computerPlay that returns 'Rock', 'Paper', or 'Scissors'
const computerPlay = () => {
  const plays = ['rock', 'paper', 'scissors'];
  return plays[Math.floor(Math.random() * 3)]
}
// Function playRound takes in playerSelection and computerSelection, returns winner as string
const playRound = (playerSelection, computerSelection) => {
  let roundResult;
  console.log('Computer chose ' + computerSelection + '.');
  // Make parameters case-insensitive
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case 'rock':
      computerSelection === 'rock' ? roundResult = 'draw' 
      : computerSelection == 'paper' ? roundResult = 'computer wins'
      : computerSelection == 'scissors' ? roundResult = 'player wins'
      : console.log('huh???');
      break;
    case 'paper' :
      computerSelection === 'rock' ? roundResult = 'player wins' 
      : computerSelection == 'paper' ? roundResult = 'draw'
      : computerSelection == 'scissors' ? roundResult = 'computer wins'
      : console.log('huh???');
      break;
    case 'scissors' :
      computerSelection === 'rock' ? roundResult = 'computer wins' 
      : computerSelection == 'paper' ? roundResult = 'player wins'
      : computerSelection == 'scissors' ? roundResult = 'draw'
      : console.log('huh???');
      break;
    default:
      roundResult = 'error: you have to enter \'rock\', \'paper\', or \'scissors\'';
  }
  console.log();
  return roundResult;
}
const computerSelection = computerPlay();
// Create game() function
const game = () => {
  let compWins = 0;
  let playerWins = 0;
  let draws = 0;
// Play 5 rounds and keep score
//  for (let i = 0; i < 5; i++) {
// User plays with buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

document.querySelectorAll("button").forEach(button => addEventListener('click', e => console.log(e.target.classList.value)));

let playerSelection = null;
console.log(`You chose ${playerSelection}.`)
let roundScore = playRound(playerSelection, computerSelection);
roundScore == 'computer wins' ? ++compWins 
: roundScore == 'player wins' ? ++playerWins 
: ++draws;
console.log(`Round ${i + 1}
${roundScore}
Comp wins: ${compWins}
Player wins: ${playerWins}
Draws: ${draws}`)
console.log();
// Print winner at the end
  let winMessage;
  compWins > playerWins ? winMessage = `Computer: ${compWins}
  Player: ${playerWins}
  Computer wins`
  : compWins < playerWins ? winMessage = `Computer: ${compWins}
  Player: ${playerWins}
  You win!`
  : winMessage = `Computer: ${compWins}
  Player: ${playerWins}
  It's a draw`
  return winMessage;
}
console.log(game())