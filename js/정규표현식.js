// 정규표현식(Regular Expression) : 특정 패턴을 정의해 문자열을 검색, 대체, 추출하는 데 사용
// 정규 표현식 생성 방법 : 리터럴 방식, RegExp 객체 사용 방식

const regex = /World/; // 리터럴 방식 => 이걸 더 많이 사용함
// const regex = new RegExp("World"); // 객체 사용 방식
let inputStr = "Hello World~~~~";
console.log(regex.test(inputStr)); // test() : 해당 문자열이 포함되어 있으면 true, 없으면 false 반환

const regex2 = /가장/;
// exec() : 문자열에서 패턴에 일치하는 첫번째 결과를 반환
console.log(regex2.exec("안녕하세요? 큰 실수는 포기입니다."));
// 가장 큰 실수는 포기입니다." : [ '가장', index: 0, input: '가장 큰 실수는 포기입니다.', groups: undefined ]
// 안녕하세요? 가장 큰 실수는 포기입니다. : [ '가장', index: 7, input: '안녕하세요? 가장 큰 실수는 포기입니다.', groups: undefined ]
// 안녕하세요? 큰 실수는 포기입니다. : null

const inputText = "010-5006-4146";
const regNumber = inputText.match(/\d{3}-\d{4}-\d{4}/); // d : digit
console.log(regNumber[0]); // 010-5006-4146
const inputText2 = "010-5006-4146 gsfea010-1234-5678sfaef011-123-4567";
const regNumber2 = inputText2.match(/\d{3}-\d{3,4}-\d{4}/g); // g : global, {3,4} : 3 또는 4
console.log(regNumber2); // [ '010-5006-4146', '010-1234-5678' ]
