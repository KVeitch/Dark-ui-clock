const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setInterval(setTime,1000);

function setTime(){
  let day = new Date();
  let hourPos = day.getHours() * 30;
  let minPos = day.getMinutes() * 6;
  let secPos = day.getSeconds() * 6;
  hr.style.transform = `rotate(${hourPos + minPos / 12}deg`;
  min.style.transform = `rotate(${minPos}deg`;
  sec.style.transform = `rotate(${secPos}deg`;
}