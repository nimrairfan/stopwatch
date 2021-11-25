var hourPara = document.getElementById("hour")
var minPara = document.getElementById("min")
var secPara = document.getElementById("sec")
var milSecPara = document.getElementById("milsec")

var hour = 0
var minute = 0
var secound = 0
var milisec = 0

var interval;

function timer(){
    milisec++
    milSecPara.innerHTML =  milisec
    if(milisec == 100){
        secound++
        secPara.innerHTML = secound
        milisec = 0 
    }else if(secound == 60){
        minute++
        minPara.innerHTML = minute
        secound = 0
    }else if(minute == 60){
        hour++
        hourPara.innerHTML = hour
        minute = 0
    }
}
var stopbtn = document.getElementById("stopbtn")
stopbtn.disabled = true
var resetbtn = document.getElementById("resetbtn")
resetbtn.disabled = true
function start(){
    var startbtn = document.getElementById("startbtn")
    interval = setInterval(timer, 10)
    startbtn.disabled = true
    resetbtn.disabled = false
    stopbtn.disabled = false
}

function stop(){
    var startbtn = document.getElementById("startbtn")
    clearInterval (interval)
    startbtn.disabled= false
}
function reset(){
    clearInterval(interval)
    hourPara.innerHTML = 0
    minPara.innerHTML = 0
    secPara.innerHTML = 0
    milSecPara.innerHTML = 0
    hour = 0
    minute=0
    secound =0
    milisec= 0
}