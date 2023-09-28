let intervalId,
  second = 0,
  minute = 0,
  hour = 0,
  t = "";
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
//count.innerHTML = "00";
const count = document.getElementsByClassName("count");
const startButton = document.querySelector("#js-start");
const stopButton = document.querySelector("#js-stop");
const resetButton = document.querySelector("#js-reset");
startButton.addEventListener("click", (e) => {
    if(t==='start'){
        e.target.disabled=true;
        console.log('disabled');
    }
    else{
        t = "start";
        timer();
    }
});
stopButton.addEventListener("click", (e) => {
  if (t === "stop") e.preventDefault();
  else {
    t = "stop";
    timer();
  }
});
resetButton.addEventListener("click", () => {
  t = "reset";
  timer();
});

function timer() {
  if (t === "start") {
    intervalId = setInterval(() => {
      second++;
      console.log(second);
      if (second === 60) {
        second = 0;
        minute++;
      }
      if (minute === 60) {
        hour++;
      }
      if (hour < 10) hr.innerHTML = "0" + hour;
      else hr.innerHTML = hour;
      if (minute < 10) min.innerHTML = "0" + minute;
      else min.innerHTML = minute;
      if (second < 10) sec.innerHTML = "0" + second;
      else sec.innerHTML = second;
    }, 1000);
  } else if (t === "reset") {
    console.log("reset");
    clearInterval(intervalId);
    (second = 0), (minute = 0), (hour = 0);
    sec.innerHTML = "0" + second;
    min.innerHTML = "0" + minute;
    hr.innerHTML = "0" + hour;
  } else if (t === "stop") {
    clearInterval(intervalId);
    console.log(second);
  }
}
