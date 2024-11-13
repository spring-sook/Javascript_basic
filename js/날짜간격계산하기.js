let myDate = new Date();
const myTime = myDate.getTime();

let dDay = new Date("2025/03/24/17:50:00");
const dDayTime = dDay.getTime();

const leftDate = parseInt((dDayTime - myTime) / (1000 * 60 * 60 * 24));
document.getElementById("leftDate").textContent = leftDate;
