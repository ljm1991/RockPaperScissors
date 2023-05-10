const buttons = document.querySelectorAll("button")
const roundScore = document.createElement("h3")
const container = document.querySelector("#container")
const results = document.querySelector("#results")
const scoreBoard = document.createElement("h4")
scoreBoard.innerText = 'Current score is Player:0 to Computer:0'
results.appendChild(scoreBoard);

let gameOver = false;

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    if (computerScore === 5 || playerScore === 5) {
        reset()
    }
    button.addEventListener('click', () => {
        playerChoice = `${button.id}`
        computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice)
    })
}
)

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 100) + 1
    if (randomInt <= 33) {
        computerChoice = "rock"
    }
    else if (randomInt > 33 && randomInt <= 66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound(playerChoice, computerChoice) { //Establish hierarchy of rock, paper, and scissors
    if (!gameOver) {
        if (computerChoice === playerChoice) {
            roundScore.innerText = 'Tie'
        }
        else if (computerChoice == 'rock' && playerChoice == 'paper') {
            roundScore.innerText = 'You win the round! Paper beats rock!';
            playerScore++
        } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
            roundScore.innerText = 'You win the round! Scissors beats paper!';
            playerScore++
        } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
            roundScore.innerText = 'You win the round! Rock beats Scissors!';
            playerScore++
        } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
            roundScore.innerText = 'Computer wins the round! Rock beats scissors!';
            computerScore++
        } else if (computerChoice == 'paper' && playerChoice == 'rock') {
            roundScore.innerText = 'Computer wins the round! Paper beats rock!';
            computerScore++
        } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
            roundScore.innerText = 'Computer wins the round! Scissors beats paper!';
            computerScore++
        }
    }
    results.innerText = `Current score is Player:${playerScore} to Computer:${computerScore}`
    results.appendChild(roundScore)
    if (computerScore === 5 || playerScore === 5) {
        gameWin(playerScore, computerScore)
    }
}


function gameWin(playerScore, computerScore) {
    if (playerScore > computerScore) {
        roundScore.innerText = `Amazing! You beat the computer ${playerScore} to ${computerScore}.`;//calculate and return score
    } else {
        roundScore.innerText = `Ouch. You lost to the computer ${computerScore} to ${playerScore}.`;
    }
    gameOver = true;
}

// function reset() {
//     playerScore = 0
//     computerScore = 0
//     scoreBoard.innerText = 'Current score is Player:0 to Computer:0'
//     results.innerText = " "
// }


