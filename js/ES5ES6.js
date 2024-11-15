// ES5(ECMAScript 5) : 2009년 발표됨, 리액트의 핵심 문법
// JSON 객체
// Array 메서드 : forEach(), map(), filter(), reduce()
//  - forEach() : 각 요소를 순회하는 메서드 (자동으로 전부 순회, 요소의 내용 변경 불가)
//  - map() : 배열의 모든 요소를 순회해서 가공된 새로운 배열을 만듦
//  - filter() : 배열의 모든 요소를 순회해, 조건을 만족하는 새로운 배열 생성
//  - reduce() : 배열의 모든 요소를 순회해서 누적값을 사용하여 하나의 결과값 반환

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((a, b) => a + b, 0); // 0은 시작값, 0은 생략 가능
console.log(sum);

// ES6(ECMAScript 6) : 2015년 발표
// let, const 추가됨 (원래 var만 있었음)
// 화살표 함수 추가
// 템플릿리터럴 추가
const name = "곰돌이사육사";
const message = `안녕하세요. ${name}님, 환영합니다.`;
console.log(message);

// 배열에서 전개 연산자
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = [...arr1, ...arr2, ...arr3];
console.log(newArr);

// 객체에서의 전개 연산자
const member = {
  name: "안유진",
  age: 21,
  addr: "서울시 강남구 역삼동",
  position: "리더",
};

const modifyMember = { ...member, age: 22 };
console.log(modifyMember);
