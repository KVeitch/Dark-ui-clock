const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
let deg = 6;
let day = new Date();
let hourPos = day.getHours() * 30;
let minPos = day.getMinutes() * deg;
let secPos = day.getSeconds() * deg;
  hr.style.transform = `rotate(${hourPos + minPos / 12}deg`;
  min.style.transform = `rotate(${minPos}deg`;
  sec.style.transform = `rotate(${secPos}deg`;
});
