let jumin = null;
while (true) {
  jumin = prompt("주민등록번호 : ", "");
  if (jumin.length != 14 || jumin.indexOf("-") == -1) {
    alert(`입력 오류 : 주민등록번호에는 "-"을 포함해야 합니다.`);
  }
  break;
}

const genderCode = jumin.charAt(7);
const birthYearPrefix = genderCode === "1" || genderCode === "2" ? "19" : "20";
const birthYear = Number(birthYearPrefix + jumin.substring(0, 2));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const genderStr = genderCode === "1" || genderCode === "3" ? "남성" : "여성";
document.write(`<p class='box'>성별 : ${genderStr} <br> 나이 : ${age} </p>`);
