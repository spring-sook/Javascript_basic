// 3개의 수를 입력받아서 가장 큰 수와 작은 수를 화면에 출력하기
// prompt로 입력받은 값은 문자열이므로 숫자로 변경하기 위해서는
// Number()함수로 형을 변경해야 함.

let num1, num2, num3, max, min;

num1 = Number(prompt("첫번째 숫자 입력 : ", ""));
num2 = Number(prompt("두번째 숫자 입력 : ", ""));
num3 = Number(prompt("세번째 숫자 입력 : ", ""));

max = Math.max(num1, num2, num3);
min = Math.min(num1, num2, num3);

document.write("가장 큰 수 : " + max + "<br>");
document.write("가장 작은 수 : " + min);
