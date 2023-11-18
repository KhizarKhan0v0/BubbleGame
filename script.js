let scoree = 0;
var timer = 40;
let hitt=0;
function createBubbles(){
    let bubbles = '';
    for (let i=1; i<=60; i++){
        let rn = Math.floor(Math.random()*40);
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    document.getElementById("botom").innerHTML = bubbles;
}


function score(){
    scoree += 10;
    document.querySelector("#scorebox").innerHTML = scoree;
}

function gethit(){
    hitt = Math.floor(Math.random()*40);
    document.getElementById("hitbox").innerHTML = hitt;
}

function timer1(){
    let timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timebox").innerHTML = timer;
        }
        else{
            clearInterval(timeint);
            document.getElementById('botom').innerHTML = `<h1>Game Over<h1>`;
        }
    }, 1000);
}

document.getElementById("botom")
.addEventListener("click",(dets)=>{
    let clicked=(Number(dets.target.textContent));
    if (clicked==hitt) {
        score();
        gethit();
        createBubbles();
    }
});

timer1();
gethit();
createBubbles();

