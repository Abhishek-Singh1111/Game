let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let heighest =0;
let btns = ["red", "green", "blue", "yellow"];
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game was started");
        started = true;
        levelup();
    }
});
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 1000);
}

function userFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250);
}
function levelup() {
    userSeq = [];
    level++;
   if(heighest<level){
    heighest = level;
   }
    h2.innerText = `Level ${level}     Heighest ${heighest}`;
    
    // Random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randBtn);
    console.log(randIdx);
    console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 250);
        }
    } else {
        h2.innerHTML = `Game Over, Score <b>${level }</b><br> Heighest ${heighest}<br>Press Enter to restart`;
       document.querySelector('body').style.background="red";
       setTimeout(function(){
        document.querySelector('body').style.background="yellow";
       },2000);
       reset();
    } 
}
function btnPress() {
    userFlash(this);
    let userColor = this.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener('click', btnPress);

}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
