const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("min");
const secondsEl = document.getElementById("sec");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const Totalseconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(Totalseconds / 3600 / 24);
  const hours = Math.floor(Totalseconds / 3600) % 24;
  const minutes = Math.floor(Totalseconds / 60) % 60;
  const seconds = Math.floor(Totalseconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = formateTime(minutes);
  secondsEl.innerHTML = formateTime(seconds);

  function formateTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
countdown();
setInterval(() => {
  countdown();
}, 1000);
