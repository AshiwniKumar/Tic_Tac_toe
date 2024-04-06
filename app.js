let boxex= document.querySelectorAll('.box');
let btn= document.querySelector('.reset-btn');
let newBtn= document.querySelector('#new-btn');
let msgContainer= document.querySelector('.msg-container');
let msg= document.querySelector('#msg');
let scoreElO= document.querySelector('#pointO');
let scoreElX= document.querySelector('#pointX');


let turnO=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let palyerO=0;
let palyerX=0;

scoreElO.innerText=`Player O Score :${palyerO}`
scoreElX.innerText=`Player X Score :${palyerX}`



function startGame(){

boxex.forEach((box)=>{
    box.addEventListener('click', ()=>{

        console.log(`Box was clicked`);
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X'; 
            turnO=true;

        }
        box.disabled=true;

        checkWinner();
    }) 
})
}

function displayWinner(winnerName){

    msg.innerText=`Winner is ${winnerName}`;
    msgContainer.classList.remove("hide");

    for(let box of boxex){
        box.disabled=true;
        
    } 
}

function resetGame(){

    turnO=true
    msgContainer.classList.add("hide");

    for(let box of boxex){
        box.disabled=false;
        box.innerText="";
    }
    
}

function checkWinner(){

    for(let pattern of winPattern){

        //console.log(pattern);
       // console.log(pattern[0], pattern[1], pattern[2]);
    
    let pos1Val=boxex[pattern[0]].innerText;
    let pos2Val=boxex[pattern[1]].innerText;
    let pos3Val=boxex[pattern[2]].innerText;

    
    if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
        if(pos1Val===pos2Val && pos2Val===pos3Val){

            //console.log(`Winner ${pos1Val}`);
            displayWinner(pos1Val);
            scoreIncrease(pos1Val);
        }
     
    }
    
    }
}

function scoreIncrease(palyer){


if(palyer==='O'){
    scoreElO.innerText=`Player O Score :${palyerO+=1}`
}
else{
    scoreElX.innerText=`Player X Score :${palyerX+=1}`

}

}

startGame();

btn.addEventListener('click', resetGame);
newBtn.addEventListener('click', resetGame);