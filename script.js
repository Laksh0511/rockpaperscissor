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

const scoreDiv = document.querySelector("#score");
const resultsDiv = document.querySelector("#results");
const buttons = document.querySelectorAll("button");

let humanScore=0;
let computerScore=0;
let gameOver = false;

function updateScore(){
    scoreDiv.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore;
}

function endGame(){
    gameOver = true;
    if(humanScore > computerScore){
        resultsDiv.textContent = "You won the game! Final score: " + humanScore + " - " + computerScore;
    }
    else{
        resultsDiv.textContent = "Computer won the game! Final score: " + computerScore + " - " + humanScore;
    }
}

function playRound(humanChoice,computerChoice){
    if(gameOver){ //can't continue
        return;
    }

    if(humanChoice.toLowerCase()==="rock" && computerChoice.toLowerCase()=="scissor"){
        resultsDiv.textContent = "Computer Choice: " + computerChoice + " You won!";
        humanScore++;
    }
    else if(humanChoice.toLowerCase()==="paper" && computerChoice.toLowerCase()=="rock"){
        resultsDiv.textContent = "Computer Choice: " + computerChoice + " You won!";
        humanScore++;
    }
    else if(humanChoice.toLowerCase()==="scissors" && computerChoice.toLowerCase()=="paper"){
        resultsDiv.textContent = "Computer Choice: " + computerChoice + " You won!";
        humanScore++;
    }
    else if(humanChoice.toLowerCase()===computerChoice.toLowerCase()){
        resultsDiv.textContent = "Computer Choice: " + computerChoice + " Chose the same!";
    }
    else{
        resultsDiv.textContent = "Computer Choice: " + computerChoice + " You lost!";
        computerScore++;
    }
    
    //game flow
    updateScore();

    if(humanScore >= 5 || computerScore >= 5){
        endGame();
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.dataset.choice;
        playRound(playerSelection, getComputerChoice());
    });
});

