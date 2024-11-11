// 주민등록번호(020222-316614)를 입력받아 성별, 나이 출력하기
// 웹에 출력하기 - 가능하면 CSS 스타일링 하기
// 문자열을 자르는 함수 : jumin.substring(0, 2) => 문자열 0번째에서 2번 인덱스 미만까지 자름
// 문자열에서 해당 인덱스의 문자를 추출 : jumin.charAt(5) => 문자열 5번 인덱스의 문자 추출
// const date = new Date();
// date.getFullYear();  => 2024

let age, gender;
const thisYear = new Date().getFullYear();
while (true) {
  let jumin = prompt("주민번호 입력(******-*******) : ", "");
  if (jumin.includes("-") && jumin.length === 14) {
    gender = jumin.charAt(7);
    age =
      thisYear -
      ((gender == "1" || gender == "2" ? 1900 : 2000) +
        parseInt(jumin.substring(0, 2)));
    if (gender == "1" || gender == "3") {
      gender = "남성";
    } else {
      gender = "여성";
    }
    break;
  } else {
    alert("잘못 입력하셨습니다. 다시 입력해주세요.");
  }
}
// document.write(
//   `나이 : <span style="font-weight:bold; color:#8A2BE2">${age}</span>세 <br> 성별 : <span style="font-weight:bold; color:#8A2BE2">${gender}</span>`
// );
document.write(
  `<table>
    <tr>
    <th>나이</th>
    <th>성별</th>
    </tr>
    <tr>
    <td>${age}</td>
    <td>${gender}</td>
    </tr>
  </table>`
);
