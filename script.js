function getComputerChoice(){
    let computerChoice=Math.random();//generates a random number between 1 and 0
    if (computerChoice > 0 && computerChoice < .333){ //defines random numbers into rock, paper, scissor choices
        return 'rock';
    } else if (computerChoice > .333 && computerChoice < .666){
        return 'paper;'
    } else {
        return 'scissors'
    }
}
console.log(getComputerChoice());

//Ask for player selection
//Establish hierarchy of rock, paper, and scissors
//Return 'You Win' vs. The Computer win based on that hierarchy.