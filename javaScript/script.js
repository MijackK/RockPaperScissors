
let playerScore =0;
let aiScore =0;
let playerWins= 0;
let aiWins =0;
let playerChoice;
let aiChoice;
let image=["img/rock.jpg","img/paper.png","img/scissors.png"];
let closeModal=()=>document.getElementById('modal').style.display="none";

let restartAnimation=()=>{
    document.getElementById('aimage').className="arm";
    document.getElementById('pimage').className="arm-reverse";   
}
let changeImage=(pimage,aimage)=>{
    document.getElementById('pimage').src=image[pimage];
    document.getElementById('aimage').src=image[aimage];
}
let endGame=()=>{
    setTimeout(()=>document.getElementById('modal').style.display="flex",1500);
    if(aiScore==3){
        setTimeout(()=>document.getElementById('end-image').src="img/round-lost.png",1500);
        aiWins++;
        document.getElementById('ascore').innerHTML=aiWins
    }
    else{
        setTimeout(()=>document.getElementById('end-image').src="img/round-won.png",1500);
        playerWins++;
        document.getElementById('pscore').innerHTML=playerWins;
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
        setTimeout(()=>document.getElementById('declare').innerHTML="<img src='img/draw.png'>",1350);
    }
    else if( playerChoice==0 && aiChoice==2 || playerChoice==1 && aiChoice==0 || playerChoice==2 && aiChoice==1 ){
        playerScore++;
        setTimeout(()=>document.getElementById('declare').innerHTML="<img src='img/win.png'>",1350);
    }
    else{
        aiScore++;
        setTimeout(()=>document.getElementById('declare').innerHTML="<img src='img/lose.png'>",1350);
    }
    if(aiScore==3 || playerScore==3){
       
        endGame();
        
    }

}