function myMove() {
  let id = null;

  const elem = document.getElementById("animate");
  console.log(elem);
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
      console.log(pos);
      console.log(elem.style.top);
    }
  }
}

function changeColor() {
  const hello = document.getElementById("hello");
  hello.style.color = "red";
}

function burgerToggle() {
  let menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

///////DAte/.//////

const currentDate = Date();

const myDate = new Date();

const hour = myDate.getHours(); // daabrunebs saats
// document.write(hour);

const date = myDate.getDate(); // dabrunebs tarigs
// document.write(date);

const day = myDate.getDay(); // kviris dges daabrunebs mara atvla iwyeba 0 dan 0-kvira 6-shabati
// document.write(day);

const month = myDate.getMonth(); // ianvari aris 0 da dekemebri aris 11
console.log("month", month);

const year = myDate.getHours();
console.log("year", year);

function startTime() {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
startTime();

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let welcome;

const Today = new Date();

const hours = Today.getHours();

const minutes = Today.getMinutes();

const seconds = Today.getSeconds();

if (minutes < 10) {
  minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

if (hours < 12) {
  welcome = "Good Morning";
} else if (hours < 17) {
  welcome = "Good Evening";
} else {
  welcome = "Good Night";
}
alert(welcome + " " + "Now is" + hours + ":" + minutes + ":" + seconds);

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
