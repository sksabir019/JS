/**
 * Scope chaining and closures: A closure is a function that retains access to its lexical scope, 
 * even when the function is executed outside that scope.
 *
 * @example
 * sum(1)(2)(3)(4)(5)
 */

// Example of closure
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable, innerVariable);
  };
}
const newFunction = outerFunction("outside");
// newFunction("inside"); // Output: outside inside

// Example of block scope with let and const
function blockScopeExample() {
  if (true) {
    let blockScopedVar = "I am block scoped";
    const blockScopedConst = "I am also block scoped";
    console.log(blockScopedVar); // Works
    console.log(blockScopedConst); // Works
  }
  // console.log(blockScopedVar); // Error: blockScopedVar is not defined
  // console.log(blockScopedConst); // Error: blockScopedConst is not defined
}
// blockScopeExample();

// Example of function scope with var
function functionScopeExample() {
  if (true) {
    var functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Works
  }
  console.log(functionScopedVar); // Works, var is function scoped
}
// functionScopeExample();

// Example of global scope
var globalVar = "I am global";
function globalScopeExample() {
  console.log(globalVar); // Works, globalVar is accessible here
}
// globalScopeExample();
// console.log(globalVar); // Works, globalVar is accessible here too

// Create a base function as createBase10 , that should return a function that adds 10 to its argument
function createBase(num) {
  return function (inner) {
    return num + inner;
  };
}
const add10 = createBase(10);
// console.log(add10(5)); // 15
// console.log(add10(20)); // 30
// console.log(add10(100)); // 110

// without closure  function
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.time("6");
find(6); // 57 ms
console.timeEnd("6");
console.time("50");
find(50); // 135 ms
console.timeEnd("50");

// with closure function
function findWithClosure() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
} 
const find = findWithClosure();

console.time("6");
find(6); // 0.25ms
console.timeEnd("6");
console.time("50");
find(50); // 0.025ms
console.timeEnd("50");

// clouser to create a private counter
const counter = (function () {
  let count = 0; // private variable
  return function () {
    count += 1;
    return count;
  };
})();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

function counter2() {
    let count = 0;

    function add(increment) {
        count += increment;
    }

    function retrieve() {
        return count;
    }

    return {
        add: add,
        retrieve: retrieve
    };
}

const myCounter = counter2();
// myCounter.add(5);
// myCounter.add(3);
// console.log(myCounter.retrieve()); // 8

// Module pattern using closure
const Module = (function () {
  let privateVar = "I am private";
  function privateMethod() {
    console.log(privateVar);
  }
  return {
    publicMethod: function () {
      privateMethod();
    }
  };
})();   
// Module.publicMethod(); // Output: I am private

// call function only once
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const initialize = once(function () {
  console.log("Initialized");
  return 42;
});

// console.log(initialize()); // Output: Initialized \n 42
// console.log(initialize()); // Output: 42
// console.log(initialize()); // Output: 42

// other example of once
function once2(fn, context) {
    let result;
    return function() {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

let addOnce = once2(function(a, b) {
    return a + b;
});

console.log(addOnce(3, 4)); // 7
console.log(addOnce(5, 6)); // 7
console.log(addOnce(10, 20)); // 7

// memoize function using closure - factorial, fibonacci
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache for", args);
      return cache[key];
    } else {
      console.log("Calculating result for", args);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage - Factorial
function factorialFn(n) {
  if (n === 0) return 1;
  return n * factorialFn(n - 1);
}
const factorial = memoize(factorialFn);

// console.log(factorial(5)); // 120
// console.log(factorial(6)); // 720 (cached for 5)
// console.log(factorial(5)); // 120 (cached)

// Example usage - Fibonacci
const fibonacci = memoize(function (n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

const clumsyProduct = (num1, num2) => {
  for (let i=1 ; i <= 1000000; i++) {
    // simulate heavy computation
    Math.sqrt(i);
  }
  return num1 * num2;
}

const optimizedClumsyProduct = memoize(clumsyProduct);

// console.log(optimizedClumsySquare(5, 10)); // 50
// console.log(optimizedClumsySquare(5, 10)); // 50 (cached)
// console.log(optimizedClumsySquare(7, 8)); // 56
// console.log(optimizedClumsySquare(7, 8)); // 56 (cached)

