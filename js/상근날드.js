// prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// 햄버거 3개 중 가장 싼 가격을 선택하고 음료 둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// 결과를 웹화면에 이쁘게 출력
// 번외 : input태그로 변경해보기

//내 답
// const burger = [];
// const drink = [];
// let price = null;

// for (let i = 1; i <= 5; i++) {
//   if (i <= 3) {
//     burger.push(prompt(`햄버거${i} 가격 입력 : `, ""));
//   } else {
//     drink.push(prompt(`음료${i - 3} 가격 입력 : `, ""));
//   }
// }

// price = Math.min(...burger) + Math.min(...drink) - 50;

// document.write(
//   `<div id="container">
//   <h1>Welcome to <span style="color:#3CB371; font-family:HarryBeastDisplay">Sook</span>nald</h1>
//   <p>가장 저렴한 햄버거 가격 : ${Math.min(...burger)}원</p>
//    <p>가장 저렴한 음료 가격 : ${Math.min(...drink)}원</p>
//    <p class="total">총 가격 : ${price}원</p>
//    </div>`
// );

// 강사님 input 답
function getPrice() {
  let menu = [];

  for (let i = 0; i < 5; i++) {
    menu[i] = Number(document.getElementById("menu" + (i + 1)).value);
    console.log(menu[i]);
  }

  let minBurger = menu[0];
  let minDrink = menu[3];
  for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minBurger > menu[i]) minBurger = menu[i];
    if (i > 2 && minDrink > menu[i]) minDrink = menu[i];
  }
  document.getElementById("value").innerHTML = minBurger + minDrink - 50 + "원";
}
