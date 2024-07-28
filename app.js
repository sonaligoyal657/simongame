let gameStart = false;
let level = 0;

let btns= ['red','yellow','green','purple'];

let h2=document.querySelector('h2');

let gameSeq=[];
let userSeq=[];

document.addEventListener('keypress',()=>{
    if(gameStart===false){
        gameStart=true;
        updateLevel();
    }
});

function updateLevel(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx= Math.floor(Math.random()*3);
    let initalBtnColor=btns[randomIdx];
    let initialBtnPressed = document.querySelector(`.${initalBtnColor}`);
   
    gameSeq.push(initalBtnColor);

    gameFlash(initialBtnPressed);
    
   
}

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },250);
}

const allBtns= document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',userBtnPressed);
}

function userBtnPressed(){
    let btnPressed= this;
    btnPressed.classList.add('userFlash');
    setTimeout(()=>{
        btnPressed.classList.remove('userFlash');
    },250);
    userColor = btnPressed.getAttribute('id');
    userSeq.push(userColor);

    checkGameLevel(userSeq.length-1);
}

function checkGameLevel(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(updateLevel(), 1000);
        }
    }else{
        h2.innerText=`Game over, Your score was ${level}`;
        resetGame();
    }
}

function resetGame(){

    document.querySelector('body').style.backgroundColor='red';
    setTimeout(()=>{
        document.querySelector('body').style.backgroundColor='white';
    },250);
    gameStart=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}

 
