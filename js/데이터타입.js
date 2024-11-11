// JavaScript의 데이터타입은 원시타입과 객체타입으로 나누어짐
// 원시 타입 : 값 자체가 저장되는 방식 => String, Number, Boolean, Undefined, Null, Symbol, BigInt
// 객체 타입 : 객체의 메모리 주소를 저장하는 타입 => Object, Array, Function, ...

// 문자열 : 길이가 16비트(2Byte)인 문자(UTF-16)를 나열한 형태 => " ", ' ', ` `
let str = '안녕하세요. "자바스크립트"입니다.';
console.log(str);

let str2 = "문자열과 " + "문자열을 " + "연결할 수 있습니다.";
console.log(str2);

// 템플릿 문자열 : ES6에서 추가된 방식
let dan = 3;
let gugu = 8;
console.log(`${dan} x ${gugu} = ${dan * gugu}`);

// 숫자형(Number) : 자바스크립트는 모든 숫자를 하나의 숫자형(Number)로 다룸
// 참고 : https://velog.io/@blackwidow/parseInt%EC%99%80-Number%EC%9D%98-%EC%B0%A8%EC%9D%B4
// let x = 0.0;
// for (let i = 0; i < 100; i++) {
//   x += 0.01;
// }
// console.log(x);

const Decimal = require("decimal.js");
let x = new Decimal(0.0);
for (let i = 0; i < 100; i++) {
  x = x.plus(0.01);
}
console.log(x);

// 논리형 : 참과 거짓의 값만 가지는 타입
let age = 18;
let isAdult = age > 19 ? true : false;
if (isAdult) console.log("당신은 성인입니다.");
else console.log("당신은 미성년자입니다.");

// undefined : 값이 할당되지 않음을 의미
let empty;
console.log(empty);

// null : 변수나 상수를 선언하고 의도적으로 값을 비워둘 때 사용
let empty2 = null;
console.log(empty2);
