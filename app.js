// General Variables
var display = document.querySelector('.display');
//const playPomodoro = document.querySelector('.play');
const pause = document.querySelector('.pause');
const stopPomodoro = document.querySelector('.stop');
const pomodoro = document.querySelector('#pomodoro');
const shortBreak = document.querySelector('#shortbreak');
const longBreak = document.querySelector('#longbreak')
var twentyFiveMinutes = 60 * 25;
var fiveMinutes = 60 * 1;
var thirtyMinutes = 60 * 30;


// Start Pomodoro timer 25 minutes
pomodoro.addEventListener('click', () => {
  startTimer(twentyFiveMinutes, display);
  stopClick(shortBreak, longBreak);
  pause.style.display = 'block';
  stopPomodoro.style.display = 'block';

});

// Start Pomodoro short break
shortBreak.addEventListener('click', () => {
  startTimer(fiveMinutes, display);
  stopClick(pomodoro, longBreak);
  pause.style.display = 'block';
  stopPomodoro.style.display = 'block';
  
});

// Start Pomodoro Long break
longBreak.addEventListener('click', () => {
  startTimer(thirtyMinutes, display);
  stopClick(pomodoro, shortBreak);
  pause.style.display = 'block';
  stopPomodoro.style.display = 'block';
});

// Stop Pomodoro
stopPomodoro.addEventListener('click', () => {
  clearInterval(startTimer);
});


// Stopping Clicks Events
function stopClick(btn1, btn2) {
  btn1.classList.add('avoid-clicks');
  btn2.classList.add('avoid-clicks');
}



function startTimer(duration, display) {
  var timer = duration, min, sec;
  var countingDown = setInterval(function() {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    display.innerHTML = min + ":" + sec;

    if (--timer < 0) {
      timer = duration;
    }
    // stops the counting variable when it hits zero
    if (timer == 0) {
      clearInterval(countingDown); 
      display.innerHTML = "00:00";
    }

    
  }, 1000);
}
