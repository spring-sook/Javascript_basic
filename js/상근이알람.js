// 시간과 분을 입력. 45분 일찍 시간이 설정되도록 변경하는 프로그램
// 시간은 24시간제로 하고, 0시 30분 => 23시 45분
// parseInt() : 문자열을 정수로 형변환해주는 함수

let inputTimeArr = prompt("알람 시간 입력 (HH:mm) : ", "").split(":");

let inputHour, inputMinute, setTotal, setHour, setMinute;
inputHour = parseInt(inputTimeArr[0]);
inputMinute = parseInt(inputTimeArr[1]);
setTotal = inputHour * 60 + inputMinute - 45;
if (setTotal < 0) {
  setTotal = 24 * 60 + setTotal;
}
setHour = String(parseInt(setTotal / 60)).padStart(2, "0");
setMinute = String(setTotal % 60).padStart(2, "0");

// document.write("설정된 알람 시간 >> " + setHour + " : " + setMinute);
document.write(`설정된 알람 시간 >> ${setHour} : ${setMinute}`);
// ` : 백틱(BackTick)
