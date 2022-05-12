const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");



function setDate(){
    const currentTime = new Date();
    const getSecond = currentTime.getSeconds();
    const getMinute = currentTime.getMinutes();
    const getHour = currentTime.getHours();

    const secondDegree = (getSecond/60)*360;
    const minuteDegree = (getMinute/60)*360;
    const hourDegree = (getHour/12)*360;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000)

const monthName = ["January","February","March","April","May","June"
,"July","August","September","October","November","December"];
const date = new Date();
const year = date.getFullYear();
const month = monthName[date.getMonth()];
const day = date.getDate();
document.getElementById("date").innerHTML = day + "/" + month + "/" + year;