// 배열에서 사용할 수 있는 속성과 메서드 활용하기
// 배열의 메서드는 크게 파괴적 메서드와 비파괴적 메서드가 있음(비파괴적 메서드는 불변성의 원칙과 관련있음(사실 거의 같음))
const arr = [10, 20, 30, 40, 50];
// 배열을 순회하는 비파괴적 메서드를 사용
arr.forEach((e) => {
  // 이렇게 하면 실제값 수정 불가
  console.log(e);
});
for (let i = 0; i < arr.length; i++) {
  // 이렇게 하면 실제값 수정 가능
  console.log(arr[i]);
}
// 이터러블 객체의 요소를 순회할 때 사용
for (let e of arr) {
  console.log(e);
}

// toString() : 배열 안의 모든 문자열을 쉼표를 이용해 모두 결합해 하나의 문자열로 반환
console.log(arr.toString()); // 10,20,30,40,50

// join() : 배열 안의 모든 문자열을 지정한 문자를 이용해 모두 결합
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
console.log(fruits.join("*"));

// pop() : 스택 자료 구조에서 마지막 데이터를 제거하고 반환 => 배열의 내용이 변경되므로, 파괴적 메서드
console.log(fruits.pop());
//push() : 배열에 새로운 요소를 추가
fruits.push("Watermelon");
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Kiwi', 'Watermelon' ]

// shift() : 배열에서 첫번째 요소를 제거하고 반환
console.log(fruits.shift()); // Apple
console.log(fruits); // [ 'Banana', 'Orange', 'Kiwi', 'Watermelon' ]
// unshift() : 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
console.log(fruits.unshift("Lemon")); // [ 'Banana', 'Orange', 'Kiwi', 'Watermelon' ] 5
console.log(fruits); // [ 'Lemon', 'Banana', 'Orange', 'Kiwi', 'Watermelon' ]

// 배열의 요소 변경
fruits[3] = "Peach";
console.log(fruits);

// concat() : 2개 이상의 배열을 하나의 배열로 결함(비파괴적인 메서드)
const arrCar1 = ["코나", "아반떼", "소나타"];
const arrCar2 = ["싼타페", "그랜저", "캐스퍼"];
const newCar = arrCar1.concat(arrCar2);
console.log(newCar); // [ '코나', '아반떼', '소나타', '싼타페', '그랜저', '캐스퍼' ]

const newCar2 = [...arrCar1, ...arrCar2, "GV80"];
console.log(newCar2);

// slice():
const newCar3 = newCar2.slice(3);
console.log(newCar3); // [ '싼타페', '그랜저', '캐스퍼', 'GV80' ]

console.log(newCar3.sort()); // [ 'GV80', '그랜저', '싼타페', '캐스퍼' ]

// filter() : 배열에서 특정 조건을 만족하는 배ㅕㅇㄹ의 요소만 찾아서 새로운 배열로 반환
const persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "인천",
  },
];

const pass = persons.filter((e) => e.point > 80);
console.log(pass);

// map() : 배열의 각 요소를 변환하고, 그 결과로 새로운 배열을 반환하는 메서드
const numbers = [1, 2, 3, 4, 5];
const squareN = numbers.map((e) => e * e); // 제곱한 결과를 반환
console.log(squareN);
