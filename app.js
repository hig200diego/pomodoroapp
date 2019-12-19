// General Variables
let status = false; //
let display = document.querySelector('.display');
const playPomodoro = document.querySelector('.play');
const stopPomodoro = document.querySelector('.stop');
let twentyFiveMinutes = 60 * 25;
let five = 60 * 5;
let thirty = 60 * 30;

// Play App
function playApp() {
  for (let i = 0; i <= 3; i++) {
    twentyFive(twentyFiveMinutes, display);
    fiveMinutes(five, display);
    status = true;
  }
}

// Start App
playPomodoro.addEventListener('click', () => {
  playApp();
  // If the  app had completed 4 pomodoros
  if(status == true) {
  thirtyMinutes();
  }
  status = false;
});

// Stop app
stopPomodoro.addEventListener('click', () => {

})




// 25 minutes
function twentyFive(durationTwentyFiveMinutes, display) {
  let timer = durationTwentyFiveMinutes, minutes, seconds;

  setInterval(function() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = durationTwentyFiveMinutes;
    }
  }, 1000);


}

// 5 minutes
function fiveMinutes(durationFiveMinutes, display) {
  let timer = durationFiveMinutes, minutes, seconds;

    setInterval(function() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = durationFiveMinutes;
      }
  }, 1000);
}

// 30 minutes
function thirtyMinutes(durationThirtyMinutes, display) {
  let timer = durationThirtyMinutes, minutes, seconds;

  setInterval(function() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = durationThirtyMinutes;
      }
  }, 1000);
}
