function getComputerChoice() {//get random computer choice
    let computerChoice = Math.random();//generates a random number between 1 and 0
    if (computerChoice > 0 && computerChoice < .333) { //defines random numbers into rock, paper, scissor choices
        return 'rock';
    } else if (computerChoice > .333 && computerChoice < .666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
// function getPlayerChoice() {
//     return prompt('Rock, Paper, or Scissors?').toLowerCase();
//     }

//get player selection
let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) { //Establish hierarchy of rock, paper, and scissors
    if (computerSelection === playerSelection) {
        return 'Tie';
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++;
        return 'You win the round! Paper beats rock!';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerScore++;
        return 'You win the round! Scissors beats paper!';
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerScore++;
        return 'You win the round! Rock beats Scissors!';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++;
        return 'Computer wins the round! Rock beats scissors!';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        return 'Computer wins the round! Paper beats rock!';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        return 'Computer wins the round! Scissors beats paper!';
    } //Return 'You Win' vs. The Computer win based on that hierarchy.
}

function game() {//play game
    for (let i = 0; i < 5; i++) {//loop
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(finalScore(playerScore, computerScore));
}

function finalScore(playerScore, computerScore) {//add scoring
    if (playerScore === computerScore) {
        return `The game ends in a tie. ${playerScore} to ${computerScore}`;
    } else if (playerScore > computerScore) {
        return `Amazing! You beat the computer ${playerScore} to ${computerScore}.`;//calculate and return score
    } else {
        return `Ouch. You lost to the computer ${computerScore} to ${playerScore}.`;
    }
}

game();
