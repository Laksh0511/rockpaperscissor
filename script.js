function getComputerChoice(){
    let r= Math.floor(Math.random()*3);//random from 0,1,2

    if(r==0){
        return "Rock";
    }
    else if(r===1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice= prompt("Choose your option").toLowerCase();
    return choice;
}

console.log(getHumanChoice());
