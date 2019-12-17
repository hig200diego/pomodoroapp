// General Variables
let counter = false;
let display = document.querySelector('.display');
const playPomodoro = document.querySelector('.play');
const stopPomodoro = document.querySelector('.stop');
let twentyFiveMinutes = 60 * 25;
let five = 60 * 5;
let thirty = 60 * 30;

// Start App
playPomodoro.addEventListener('click', () => {
  playApp();
  // If Pomodoro app has completed its 4 pomodoros
  if(counter == true) {
    thirtyMinutes();
  }
  counter = false;
  console.log(counter);
});

// Stop app
stopPomodoro.addEventListener('click', () => {
  console.log('done');
})


// Play App
function playApp() {
  for (let i = 0; i <= 3; i++) {
    twentyFive();
    fiveMinutes();
    counter = true;
  }
}



// 25 minutes
function twentyFive() {
  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    setInterval(function() {
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);

    let twentyFiveMinutes = 60 * 25;
    startTimer(twentyFiveMinutes, display);
  }


}

// 5 minutes
function fiveMinutes(five) {
  console.log(5);
}

// 30 minutes
function thirtyMinutes(thirty) {
  console.log(30);
}
