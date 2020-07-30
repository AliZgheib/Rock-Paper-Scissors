
//scenes
const intro =document.querySelector('.intro');
const game =document.querySelector('.game');

//scores
const result=document.querySelector('.game h3');
const players= document.querySelector('.player-score');
const computers= document.querySelector('.computer-score');
//hands
const playerh =document.querySelector('.player-hand');
const computerh=document.querySelector('.computer-hand');
const hands =document.querySelectorAll('.hands img'); 

//options
const options =document.querySelectorAll('.options button');
//play 
const play=document.querySelector('.intro button');

function thegame(){


    hands.forEach(hand=>{
        hand.addEventListener('animationend',()=>{
        let hand=event.target;
        hand.style.animation="";
        });
        });

play.addEventListener('click',()=>{
    intro.classList.add("fadeout");
    game.classList.add("fadein");
    
});

options.forEach(option=>{

option.addEventListener('click',()=>{

 if(playerh.src!="Rock" && computerh!="Rock"){

    playerh.src="assets/rock.png";
    
    computerh.src="assets/rock.png"
    f1();
    f2();
    f3();
    function f1() {
        setTimeout(function(){ result.innerText= "Rock..." },0);
     }
     function f2() {
        setTimeout(function(){ result.innerText= "Paper..." },800);
     }
     function f3() {
        setTimeout(function(){ result.innerText= "Scissors..." },1600);
     }

 }
    
   
    playerh.style.animation="hand1 2.5s  both";
    computerh.style.animation="hand2 2.5s  both";

    //computer choice
 let array=['Rock','Paper','Scissors'];
 let ran=Math.floor(Math.random()*3);

let computeroption= array[ran];
let playeroption=event.target.innerText;

console.log(computeroption);
console.log(playeroption);
timeFunction();

function timeFunction() {
setTimeout(function(){ 
    playerh.src="assets/"+playeroption+".png";
    computerh.src="assets/"+computeroption+".png"; 


if(computeroption==playeroption){
    result.innerText="It's a tie";
    return
}
if(playeroption=="Rock" && computeroption=="Paper"){
    result.innerText="Computer won!";
    computers.innerText=Number(computers.innerText)+1;
    return;
}
if(playeroption=="Rock" && computeroption=="Scissors"){
result.innerText="Player won!";
players.innerText=Number(players.innerText)+1;
return;
}

if(playeroption=="Paper" && computeroption=="Scissors"){
    result.innerText="Computer won!";
    computers.innerText=Number(computers.innerText)+1;
    return;
    }
 if(playeroption=="Paper" && computeroption=="Rock"){
        result.innerText="Player won!";
        players.innerText=Number(players.innerText)+1;
        return;
        }

 if(playeroption=="Scissors" && computeroption=="Rock"){
            result.innerText="Computer won!";
            computers.innerText=Number(computers.innerText)+1;
            return;
            }
if(playeroption=="Scissors" && computeroption=="Paper"){
                result.innerText="Player won!";
                players.innerText=Number(players.innerText)+1;
                return;
                }
            }, 2300);
        }//closing time function

});//eventlistener
});//foreach



}//end of the game 

thegame();