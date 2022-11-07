function getComputerChoice(){
    let computerChoice=Math.random();
    if (computerChoice > 0 && computerChoice < .333){
        return 'rock';
    } else if (computerChoice > .333 && computerChoice < .666){
        return 'paper;'
    } else {
        return 'scissors'
    }
}
console.log(getComputerChoice());