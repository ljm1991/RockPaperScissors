const buttons = document.querySelectorAll(".choice")
const roundScore = document.createElement("h3")
const container = document.querySelector("#container")
const results = document.querySelector("#results")
const resetButton = document.querySelector("#reset")
const scoreBoard = document.createElement("h4")
const winner = document.querySelector("h2")
scoreBoard.innerText = 'Current score is Player:0 to Computer:0'
results.appendChild(scoreBoard);

let gameOver = false;

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
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
            roundScore.innerText = `Tie. You and Computer both chose ${playerChoice}`
        }
        else if (computerChoice == 'rock' && playerChoice == 'paper') {
            roundScore.innerText = `You chose ${playerChoice} and Computer chose ${computerChoice}. Paper beats rock! You win the round! `;
            playerScore++
        } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
            roundScore.innerText = `You chose ${playerChoice} and Computer chose ${computerChoice}. Scissors beats paper! You win the round!`;
            playerScore++
        } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
            roundScore.innerText = `You chose ${playerChoice} and Computer chose ${computerChoice}. Rock beats Scissors! You win the round!`;
            playerScore++
        } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
            roundScore.innerText = `You chose ${playerChoice} and Computer chose ${computerChoice}. Rock beats scissors! Computer wins the round!`;
            computerScore++
        } else if (computerChoice == 'paper' && playerChoice == 'rock') {
            roundScore.innerText = `You chose ${playerChoice} and Computer chose ${computerChoice}. Paper beats rock! Computer wins the round! `;
            computerScore++
        } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
            roundScore.innerText = `You chose ${playerChoice} and Computer chose ${computerChoice}. Scissors beats paper! Computer wins the round! `;
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
        winner.innerText = `Amazing! You beat the computer ${playerScore} to ${computerScore}.`;//calculate and return score
        winner.style.color = "green";
    } else {
        winner.innerText = `Ouch. You lost to the computer ${computerScore} to ${playerScore}.`;
        winner.style.color = "red";
    }
    gameOver = true;
}

resetButton.addEventListener('click', () => {
    gameOver = false
    playerScore = 0
    computerScore = 0
    scoreBoard.innerText = 'Current score is Player:0 to Computer:0'
    results.innerText = " "
});




