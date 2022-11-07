

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

function playRound(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return 'Tie';
    } else if (computerSelection=='rock' && playerSelection=='paper'){
        return 'You win';
    } else if (computerSelection == 'paper' && playerSelection=='scissors'){
        return 'You win';
    } else if (computerSelection == 'scissors' && playerSelection=='rock'){
        return 'You win';
    } else if (computerSelection=='rock' && playerSelection=='scissors'){
        return 'Computer wins';
    } else if (computerSelection=='paper' && playerSelection=='rock'){
        return 'Computer wins';
    } else if (computerSelection=='scissors' && playerSelection=='paper'){
        return 'Computer wins';                                                                                 
}
}
console.log (computerSelection);
console.log (playerSelection);
console.log (playRound());

//Establish hierarchy of rock, paper, and scissors
//Return 'You Win' vs. The Computer win based on that hierarchy.