function getComputerChoice(){
    let r= Math.floor(Math.random()*3);//random from 0,1,2

    if(r==0){
        return "rock";
    }
    else if(r===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice= prompt("Choose your option").toLowerCase();
    return choice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice.toLowerCase()==="rock" && computerChoice.toLowerCase()=="scissor"){
        console.log("Computer Choice: "+computerChoice+" You won!");
        humanScore++;
    }
    else if(humanChoice.toLowerCase()==="paper" && computerChoice.toLowerCase()=="rock"){//could be in OR statement in above too
        console.log("Computer Choice: "+computerChoice+" You won!");
        humanScore++;
    }
    else if(humanChoice.toLowerCase()==="scissors" && computerChoice.toLowerCase()=="paper"){
        console.log("Computer Choice: "+computerChoice+" You won!");
        humanScore++;
    }
    else if(humanChoice.toLowerCase()===computerChoice.toLowerCase()){
        console.log("Computer Choice: "+computerChoice+" Chose the same!");
    }
    else{
        console.log("Computer Choice: "+computerChoice+" You lost!");
        computerScore++;
    }
    console.log("Your Score: "+humanScore+" Computer Score: "+computerScore);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.dataset.choice;
        playRound(playerSelection, getComputerChoice());
    });
});



if(humanScore>computerScore){
    console.log("You won the game!");
}
else if(humanScore<computerScore){
    console.log("You lost the game!");
}
else{
    console.log("It's a tie!");
}