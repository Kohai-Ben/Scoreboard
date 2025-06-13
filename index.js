//SCORE Section

let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

//TRIES Section

let totalTryHome = document.getElementById("total-try-home")
let countTryHome = 0

function tryHome() {
    countHome += 5
    if(countHome < 10)
        scoreHome.textContent = `0${countHome}`
    else
        scoreHome.textContent = countHome
    countTryHome += 1
    totalTryHome.textContent = countTryHome
}

let totalTryGuest = document.getElementById("total-try-guest")
let countTryGuest = 0

function tryGuest() {
    countGuest += 5
    if(countGuest < 10)
        scoreGuest.textContent = `0${countGuest}`
    else
        scoreGuest.textContent = countGuest
    countTryGuest += 1
    totalTryGuest.textContent = countTryGuest
}

//CONVERSIONS Section

let totalConvHome = document.getElementById("total-conv-home")
let countConvHome = 0

function convHome() {
    countHome += 2
    if(countHome < 10)
        scoreHome.textContent = `0${countHome}`
    else
        scoreHome.textContent = countHome
    countConvHome += 1
    totalConvHome.textContent = countConvHome
}

let totalConvGuest = document.getElementById("total-conv-guest")
let countConvGuest = 0

function convGuest() {
    countGuest += 2
    if(countGuest < 10)
        scoreGuest.textContent = `0${countGuest}`
    else
        scoreGuest.textContent = countGuest
    countConvGuest += 1
    totalConvGuest.textContent = countConvGuest
}

//DROPS Section

let totalDropHome = document.getElementById("total-drop-home")
let countDropHome = 0

function dropHome() {
    countHome += 3
    if(countHome < 10)
        scoreHome.textContent = `0${countHome}`
    else
        scoreHome.textContent = countHome
    countDropHome += 1
    totalDropHome.textContent = countDropHome
}

let totalDropGuest = document.getElementById("total-drop-guest")
let countDropGuest = 0

function dropGuest() {
    countGuest += 3
    if(countGuest < 10)
        scoreGuest.textContent = `0${countGuest}`
    else
        scoreGuest.textContent = countGuest
    countDropGuest += 1
    totalDropGuest.textContent = countDropGuest
}

//PENALTIES Section

let totalPenaltyHome = document.getElementById("total-penalty-home")
let countPenaltyHome = 0

function penaltyHome() {
    countHome += 3
    if(countHome < 10)
        scoreHome.textContent = `0${countHome}`
    else
        scoreHome.textContent = countHome
    countPenaltyHome += 1
    totalPenaltyHome.textContent = countPenaltyHome
}

let totalPenaltyGuest = document.getElementById("total-penalty-guest")
let countPenaltyGuest = 0

function penaltyGuest() {
    countGuest += 3
    if(countGuest < 10)
        scoreGuest.textContent = `0${countGuest}`
    else
        scoreGuest.textContent = countGuest
    countPenaltyGuest += 1
    totalPenaltyGuest.textContent = countPenaltyGuest
}

//TIMER Section

let secTime = document.getElementById("seconds");
let minTime = document.getElementById("minutes");

let seconds = 0;
let minutes = 0;
let timer = false
let interval = 0

function clock() {
    if(timer === false){
        timer = true
        interval = window.setInterval(stopWatch, 1000)
    }
    else {
        timer = false
        window.clearInterval(interval)
    }     
}

function stopWatch() {
    seconds++;
    if(seconds < 10)
        secTime.innerText = `0${seconds}`
    else
        secTime.innerText = seconds

    if(seconds === 60){
        minutes++;
        if(minutes < 10)
            minTime.innerText = `0${minutes}`;
        else
            minTime.innerText = minutes;
        seconds = 0;
        secTime.innerText = `0${seconds}`;
    }

    if(minutes === 100) {
        minutes = 0;
        seconds = 0;
        minTime.innerText = `0${minutes}`;
        secTime.innerText = `0${seconds}`;
    }
}

//RESET Section

function reset() {
    countHome = 0
    countGuest = 0
    countTryHome = 0
    countTryGuest = 0
    countConvHome = 0
    countConvGuest = 0
    countDropHome = 0
    countDropGuest = 0
    countPenaltyHome = 0
    countPenaltyGuest = 0
    scoreHome.textContent = "00"
    scoreGuest.textContent = "00"
    totalTryHome.textContent = "0"
    totalTryGuest.textContent = "0"
    totalConvHome.textContent = "0"
    totalConvGuest.textContent = "0"
    totalDropHome.textContent = "0"
    totalDropGuest.textContent = "0"
    totalPenaltyHome.textContent = "0"
    totalPenaltyGuest.textContent = "0"
    seconds = 0;
    minutes = 0;
    timer = false
    window.clearInterval(interval)
    interval = 0
    secTime.textContent = "00"
    minTime.textContent = "00"
}