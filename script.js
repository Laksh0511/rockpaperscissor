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

console.log(getComputerChoice());