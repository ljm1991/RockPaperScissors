const buttons = document.querySelectorAll("button")
const score = document.querySelector("h3")

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = `${button.id}`
        console.log(playerChoice)
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice)
    })
})

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 1000) + 1
    console.log(randomInt)
    if (randomInt <= 333) {
        computerChoice = "rock"
    }
    else if (randomInt > 333 && randomInt <= 666) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound(playerChoice, computerChoice) { //Establish hierarchy of rock, paper, and scissors
    if (computerChoice === playerChoice) {
        score.innerText = 'Tie'
    }
    else if (computerChoice == 'rock' && playerChoice == 'paper') {
        score.innerText = 'You win the round! Paper beats rock!';
    } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        score.innerText = 'You win the round! Scissors beats paper!';
    } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        score.innerText = 'You win the round! Rock beats Scissors!';
    } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        score.innerText = 'Computer wins the round! Rock beats scissors!';
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        score.innerText = 'Computer wins the round! Paper beats rock!';
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        score.innerText = 'Computer wins the round! Scissors beats paper!';
    }
}

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

// function game() {//play game
//     for (let i = 0; i < 5; i++) {//loop
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log(finalScore(playerScore, computerScore));
// }

// function finalScore(playerScore, computerScore) {//add scoring
//     if (playerScore === computerScore) {
//         return `The game ends in a tie. ${playerScore} to ${computerScore}`;
//     } else if (playerScore > computerScore) {
//         return `Amazing! You beat the computer ${playerScore} to ${computerScore}.`;//calculate and return score
//     } else {
//         return `Ouch. You lost to the computer ${computerScore} to ${playerScore}.`;
//     }
// }

game();
