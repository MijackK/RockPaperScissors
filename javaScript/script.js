
let playerScore =0;
let aiScore =0;
let playerWins= 0;
let aiWins =0;
let playerChoice;
let aiChoice;
let image=["rock.jpg","paper.png","scissors.png"]

let restartAnimation=()=>{
    document.getElementById('aimage').className="arm";
    document.getElementById('pimage').className="arm-reverse";   
}
let changeImage=(pimage,aimage)=>{
    document.getElementById('pimage').src=image[pimage];
    document.getElementById('aimage').src=image[aimage];
}
let endGame=()=>{
    if(aiScore==3){
        alert('You lost this round')
        aiWins++;
        document.getElementById('ascore').innerHTML=aiWins
    }
    else{
        alert('You won this round')
        
        playerWins++;
        document.getElementById('pscore').innerHTML=playerWins
    }
    playerScore=0;
    aiScore=0;
}
let calcWinner = (choice) =>{
    document.getElementById('pimage').src=image[0];
    document.getElementById('aimage').src=image[0];
    playerChoice=choice
    aiChoice= Math.floor(Math.random() * 3);
    document.getElementById('pimage').className="";
    document.getElementById('aimage').className="";
    setTimeout(restartAnimation,0);
    
    setTimeout(changeImage,1320,playerChoice,aiChoice);
 
    

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