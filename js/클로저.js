// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
function Counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCount = Counter();
myCount.increment();
myCount.increment();
myCount.decrement();
// 이게 클로저인데, 이거 쓸일이 있으면 class를 씀.

// class로 하면..!
class Counter {
  constructor() {
    // python에서 init 같은 친구임
    this.count = 0;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
  decrement() {
    this.count--;
    console.log(this.count);
  }
}
const classCount = new Counter();
classCount.increment();
classCount.increment();
classCount.decrement();
