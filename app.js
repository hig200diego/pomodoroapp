// General Variables
var display = document.querySelector('.display');
//const playPomodoro = document.querySelector('.play');
const stopPomodoro = document.querySelector('.stop');
const pomodoro = document.querySelector('#pomodoro');
const shortBreak = document.querySelector('#shortbreak');
const longBreak = document.querySelector('#longbreak')
var twentyFiveMinutes = 60 * 25;
var fiveMinutes = 60 * 5;
var thirtyMinutes = 60 * 30;


// Start Pomodoro timer 25 minutes
pomodoro.addEventListener('click', () => {
  startTimer(twentyFiveMinutes, display);
  stopClick(shortBreak, longBreak);

});

// Start Pomodoro short break
shortBreak.addEventListener('click', () => {
  startTimer(fiveMinutes, display);
})

// Start Pomodoro Long break
longBreak.addEventListener('click', () => {
  startTimer(thirtyMinutes, display);
})

// Stop Pomodoro
stopPomodoro.addEventListener('click', () => {
  
})


// Stopping Clicks Events
function stopClick(btn1, btn2) {
  btn1.classList.add('avoid-clicks');
  btn2.classList.add('avoid-clicks');
}



function startTimer(duration, display) {
  var timer = duration, min, sec;
  setInterval(function() {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    display.innerHTML = min + ":" + sec;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
