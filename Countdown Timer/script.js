// Author: Ahmed Darwish




const newYears = '2023 01 01';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const endTime = document.getElementById('date');
const startbtn = document.getElementById('start');



startbtn.onclick = function(){
    end = endTime.value;
  if (!end) {
    alert("Please enter date！")
    return false;
  };
    countdown()
}
function countdown(){
    const timeDate = new Date(Date.parse(end.replace(/-/g, "/")));
    const currentDate = new Date();
    const remainingTime =  timeDate.getTime() - currentDate.getTime();
    const totalSeconds = (remainingTime/1000);
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes =Math.floor(totalSeconds/60) % 60; 
    const seconds = Math.floor(totalSeconds)%60;
    

daysEl.innerHTML =formatTime(days);
hoursEl.innerHTML = formatTime(hours);
minutesEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);
setInterval(countdown,1000)   
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
