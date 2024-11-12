// 함수는 특정 작업을 반복하거나 재사용할 수 있도록 작성된 코드 블록
// 복잡한 작업을 쉽게 처리할 수 있고, 코드의 재사용성을 높여줌

// 함수 선언과 호출 : function 키워드 사용, 반드시 호출해야 동작,
// 호이스팅(뒤에 선언해도 앞에서 적용 가능=함수의 선언부가 자동으로 최상단으로 이동함) 적용
// 함수의 이름은 소문자로 작성, 호출시 전달된 인수는 함수의 매개변수로 전달됨
console.log(sum(100, 200)); // 호이스팅이 적용되니까 함수가 아래에 있어도 작동함

function sum(a, b) {
  return a + b;
}

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식
// 함수 표현식은 익명의 함수와 네이밍함수 방식이 있음(네이밍함수 방식은 웬만하면 사용하지 마세요.)
// 변수처럼 블록 스코프에따라 제어 가능. 고차함수, 콜백함수로 활용할 때 유리
// 고차함수 : 함수의 매개변수 안에 함수가 들어가는 것 or 함수를 반환하는 함수
// 콜백함수 : 다른 함수에 인자로 전달되는 함수
// 호이스팅 없음
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(100, 200));

// 함수 표현식을 화살표 함수로 만드는 방식(ES6에서 포함)
// 화살표 함수는 함수 표현식을 간결하게 작성할 때 사용하는 방식
// this 바인딩이 함수 선언문과 다르게 동작함
const divide = (a, b) => a / b;
console.log(divide(10, 2));

function TestFunc() {
  this.value = 10;
  // 화살표 함수는 this는 자기자신은 별도의 값을 가지지 않고 상속 받은 값으로 사용
  const arrowFunc = () => {
    console.log(this.value);
  };
  // 호출될 때 동적 바인딩이 일어남. 즉, 호출될 때의 위치에 따라 this값이 결정됨
  const tradFunc = () => {
    console.log(this.value);
  };
  arrowFunc();
  tradFunc();
}
new TestFunc();

// 기본값 할당
function add(a, b = 10, c = 20) {
  console.log(a);
  return a + b + c;
}
console.log(add());

// 스코프 : 자바스크립트는 함수 스코프와 블록 스코프 방식으로 나누어짐
// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인식하는 방식
let a = 10; // 전역 변수
function sum2() {
  // this.a = 20
  let a = 20;
  // console.log(`함수 내부 : ${this.a}`); // 20
  console.log(`함수 내부 : ${a}`); // 20  // let a = 20 없으면 10출력됨
}
sum2();
console.log(`함수 외부 : ${a}`);

function sum3() {
  let a = 20;
  console.log(`함수 내부 : ${a}`);
}
sum3();
console.log(`함수 외부 : ${a}`);

// 블록 스코프 : 자바스크립트는 함수 스코프 기반의 언어였지만,
// ES6에서 let, const 키워드 추가되면서 블록 스코프도 지원
let b = 10;
{
  console.log(`코드 블록 내부 : ${b}`);
  console.log(`코드 블록 내부 : ${c}`);
  var c = 20; // 끔찍한 var...
}
console.log(`코드 블록 외부 : ${b}`);
console.log(`코드 블록 외부 : ${c}`);

// 참조 우선 순위 : let, const 키워드는 같은 식별자의 중복 선언이 불가능
let d = 10;
const e = 20;
{
  let d = 20;
  const e = 30;
  console.log(`블록 내부 : ${d}`);
  console.log(`블록 내부 : ${e}`);
}
console.log(`블록 외부 : ${d}`);
console.log(`블록 외부 : ${e}`);
// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행하는 함수, 전역 변수의 오염을 막기 위해서
(function () {
  // 화면 초기화 루틴 수행
  // 통신모듈 초기화
  console.log("화면 초기화 루틴 수행......");
  console.log("통신 모듈 초기화......");
  console.log("키오스크 동작 준비 완료");
})();

function initScreen() {
  console.log("화면 초기화 루틴 수행.......");
}

// Callback 함수 : 함수의 인자로 다른 함수를 전달하여, 그 함수가 실행될 때 호출되는 함수
// 주로 비동기 처리나 사용자 이벤트 처리에 사용
// 함수를 매개변수로 넘기기
function birdSing() {
  console.log("🐦 새가 즐겁게 노래합니다!");
}
function catCry() {
  console.log("😿 고양이가 슬프게 웁니다.");
}
function dogDance() {
  console.log("🐶 강아지가 신나게 춤을 춥니다!");
}
// 일반 함수로 구현하기
// function checkAnimalMood(mood) {
//   if (mood === "happy") birdSing();
//   else if (mood === "sad") catCry();
//   else dogDance();
// }
// checkAnimalMood("happy");

// 콜백 함수로 구현하기
function checkAnimalMoodCallback(mood, happyAction, sadAction) {
  if (mood === "happy") happyAction();
  else if (mood === "sad") sadAction();
}
checkAnimalMoodCallback("happy", dogDance, catCry);
checkAnimalMoodCallback("sad", dogDance, () =>
  console.log("🎃호박이 웃고 있습니다.")
);

// 타이머 설정과 Callback 함수
function buyToy(item, price, quantity, callback) {
  // callback자리에 pay함수 들어감
  console.log(
    "🧒 아이가 '" +
      item +
      "' 장난감을 " +
      quantity +
      "개 골라서 엄마에게 가져갔습니다."
  );
  setTimeout(() => {
    // 여기서 2000ms 기다렸다가 "계산이 필요합니다." 부터 ㄱㄱ
    console.log("💰 계산이 필요합니다.");
    let total = price * quantity;
    callback(total); // pay(total)
  }, 2000); // setTimeout 2초 기다림
}

function pay(total) {
  console.log("엄마: '지불할 금액은 " + total + "원입니다.'");
  console.log("🧒 아이: '와! 고마워요, 엄마!' 🎉");
}

buyToy("공룡 장난감", 3000, 3, pay);
