const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minute = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
const nowTime = `${hours} : ${minute} : ${seconds}`;

let timeString = document.getElementById("clockid");
timeString.innerHTML = nowTime;

function updateClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const nowTime = `${hours} : ${minute} : ${seconds}`;

  let timeString = document.getElementById("clockid");
  timeString.innerHTML = nowTime;
}

setInterval(updateClock, 1000);
