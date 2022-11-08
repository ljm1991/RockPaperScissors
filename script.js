

function getComputerChoice(){
    let computerChoice=Math.random();//generates a random number between 1 and 0
    if (computerChoice > 0 && computerChoice < .333){ //defines random numbers into rock, paper, scissor choices
        return 'rock';
    } else if (computerChoice > .333 && computerChoice < .666){
        return 'paper';
    } else {
        return 'scissors';
    }
}
let playerSelection = prompt('Rock, Paper, or Scissors?'); //Ask for player selection
let computerSelection=getComputerChoice();
let userScore=0;
let computerScore=0;

function playRound(computerSelection, playerSelection){ //Establish hierarchy of rock, paper, and scissors
    if (computerSelection === playerSelection){
        return 'Tie';
    }
    else if (computerSelection=='rock' && playerSelection=='paper'){
        userScore++;
        return 'You win! Paper beats rock!';
    } else if (computerSelection == 'paper' && playerSelection=='scissors'){
        userScore++;
        return 'You win! Scissors beats paper!';
    } else if (computerSelection == 'scissors' && playerSelection=='rock'){
        userScore++;
        return 'You win! Rock beats Scissors!';
    } else if (computerSelection=='rock' && playerSelection=='scissors'){
        computerScore++;
        return 'Computer wins! Rock beats scissors!';
    } else if (computerSelection=='paper' && playerSelection=='rock'){
        computerScore++;
        return 'Computer wins! Paper beats rock!';
    } else if (computerSelection=='scissors' && playerSelection=='paper'){
        computerScore++;
        return 'Computer wins! Scissors beats paper!';                                                                                 
} //Return 'You Win' vs. The Computer win based on that hierarchy.
}

console.log (playRound(computerSelection,playerSelection));
console.log (userScore);
console.log (computerScore);
