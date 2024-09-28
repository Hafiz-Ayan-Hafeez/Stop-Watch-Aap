console.log("Stop Watch");

var hour = document.querySelector ("#hour");
var minute = document.querySelector ("#minute");
var second = document.querySelector ("#second");

var hours = 0;
var minutes = 0;
var seconds = 0;

var timerSeconds;
var timerMinutes;
var timerHours;

function startTimer() {
    console.log("Start Timer");

    // This is for Second

    timerSeconds = setInterval (function () {
        seconds += 1;
        second.innerHTML = "0" + seconds;
        
        if (seconds >= 10) {
            second.innerHTML = seconds;
        }
        else{}

        if (seconds > 60){
            seconds = "00";
            seconds ++;
            second.innerHTML = "0" + seconds;
        }
        else if (seconds == "00"){
            seconds += 1;
            second.innerHTML = "0" + seconds;
        }

    } , 1000)

    // This is for Minutes

    timerMinutes = setInterval (function () {
        minutes += 1;
        minute.innerHTML = "0" + minutes;

        if (minutes >= 10) {
            minute.innerHTML = minutes;
        }
        else{}

        if (minutes > 60) {
            minutes = "00";
            minutes ++;
            minute.innerHTML = "0" + minutes;
        }
        else if (minutes == "00") {
            minutes += 1;
            minute.innerHTML = "0" + minutes;
        }

    } , 1000 * 60)

    // This is for Hours

    timerHours = setInterval (function () {
        hours += 1;
        hour.innerHTML = "0" + hours;

        if (hours >= 10) {
            hour.innerHTML = hours;
        }
        else{}

    } , 1000 * 60 * 60)
}

function stopTimer() {
    console.log("Stop Timer");
    clearInterval (timerSeconds);
    clearInterval (timerMinutes);
    clearInterval (timerHours);
}

function resetTimer() {
    console.log("Reset Timer");
    seconds = 0;
    second.innerHTML = "00";
    minutes = 0;
    minute.innerHTML = "00";
    hours = 0;
    hour.innerHTML = "00";

    clearInterval (timerSeconds);
    clearInterval (timerMinutes);
    clearInterval (timerHours);
}