function createCounter() {
  let current = 0;

  function counter() {
    current += 1;
    return current;
  }

  counter.reset = function () {
    current = 0;
  };

  return counter;
}

const count = createCounter();

// 🧪 Usage
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

count.reset();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

// Another approach using class
class Counter {
  constructor() {
    this.current = 0;
  }

  increment() {
    this.current += 1;
    return this.current;
  }

  reset() {
    this.current = 0;
  }
}
const count1 = new Counter();

// 🧪 Usage
console.log(count1.increment()); // 1
console.log(count1.increment()); // 2
console.log(count1.increment()); // 3

count1.reset();

console.log(count1.increment()); // 1
console.log(count1.increment()); // 2
console.log(count1.increment()); // 3