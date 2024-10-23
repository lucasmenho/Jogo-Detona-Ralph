const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    value: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    actions: {
        timeId: setInterval(randomSquare, 1000), 
        countDownTimerId: setInterval(countDown, 1000),
    }
}


function countDown(){
    state.value.currentTime--;
    state.view.timeLeft.textContent = state.value.currentTime;

    if(state.value.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timeId)
        alert("Game Over! Sua pontuação final foi: " + state.value.result);
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy")
    });

    let randomNumber = Math.floor(Math.random() * 9);

    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.value.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.value.hitPosition){
                state.value.result++
                state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
            }
        });
    });
}



function init() {
    addListenerHitBox();
}
