
let playerScore =0;
let aiScore =0;
let playerWins= 0;
let aiWins =0;
let playerChoice;
let aiChoice;

let endGame=()=>{
    if(aiScore==3){
        alert("you lose")
        aiWins++;
        document.getElementById('ascore').innerHTML=aiWins
    }
    else{
        alert("you win")
        playerWins++;
        document.getElementById('pscore').innerHTML=playerWins
    }
    playerScore=0;
    aiScore=0;
}
let calcWinner = (choice) =>{
    playerChoice=choice
    aiChoice= Math.floor(Math.random() * 3);
    if(aiChoice==playerChoice){
        document.getElementById('declare').innerHTML="Its a draw"
    }
    else if( playerChoice==0 && aiChoice==2 || playerChoice==1 && aiChoice==0 || playerChoice==2 && aiChoice==1 ){
        playerScore++;
        document.getElementById('declare').innerHTML="You Win";
    }
    else{
        aiScore++;
        document.getElementById('declare').innerHTML="You Lose";
    }
    if(aiScore==3 || playerScore==3){
       
        endGame();
        
    }

}