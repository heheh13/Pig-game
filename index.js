/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores = ['first','second'];
let roundScore = 0;
let activePlayer = 0;

document.getElementById("first-player-round-score").textContent ='0';
document.getElementById("first-player-global-score").textContent ='0';
document.getElementById("second-player-round-score").textContent ='0';
document.getElementById("second-player-global-score").textContent ='0';



//document.querySelector('#'+scores[activePlayer]+'-player-current-score').textContent = dice;

// var values = document.querySelector('#'+scores[activePlayer]+'-player-score').textContent;
// console.log(values);

document.querySelector(".dice").style.display = "none";

//var btn = document.querySelector(".roll-dice");
// console.log(btn);
//  var x = document.getElementsByClassName(".roll-dice");
 
//  x[0].addEventListener('click',function(){
//      var dice =1 ;
//      console.log(dice);
//  });


document.querySelector(".roll-dice").addEventListener("click",function(){
    var dice = Math.floor(Math.random()*6)+1;
    //display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display ="block";
    diceDom.src = 'dice-'+dice+'.png';
    console.log('dice-'+dice+'.png');

    // upadate the round score unless its one~
    var updateRoundScore = document.getElementById(scores[activePlayer]+'-player-round-score');
  
    if(dice>1){
        roundScore+=dice;
        updateRoundScore.textContent = roundScore;    
    }
    else{
        //alternate
        updateRoundScore.textContent = '0'; 
        activePlayer ^=1;
        roundScore = 0;
        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle('active');

    }

})

document.querySelector(".hold").addEventListener("click",function(){

    var updateRoundScore = document.getElementById(scores[activePlayer]+'-player-round-score');
    updateRoundScore.textContent = '0';
    var updateGlobalScore = document.getElementById(scores[activePlayer]+'-player-global-score');
    updateGlobalScore.textContent = parseInt(updateGlobalScore.textContent)+roundScore;
    if (parseInt(updateGlobalScore.textContent)>=10){
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
        document.getElementById(scores[activePlayer]+'-player-round-score').innerHTML = '<h3>Winner</h3>'
        
    }
    ///reset round score
    ///alternatee turn
    activePlayer^=1;
    roundScore = 0;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');

});

// currentPlayerScore = document.getElementById(scores[activePlayer]+'-player-score')