var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}


function makeBubble(){
    var bubble = "";

for(var i = 1; i<=133;i++){

    var rn = Math.floor(Math.random()*10);
   bubble += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = bubble;
}


function runTimer(){
  var timeInt =  setInterval(function(){

        if(timer > 0){
        timer--;
        document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector(".pbtm").addEventListener("click", function(deta){
    var clickNum = Number(deta.target.textContent);
    console.log(clickNum)
    if(clickNum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

runTimer();
makeBubble();
getNewHit();
