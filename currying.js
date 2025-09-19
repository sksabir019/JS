/**
 * Currying in js: Transforming a function with multiple arguments into a sequence of functions 
 * each taking a single argument.
 * @param {Function} fn - The function to be curried.
 * @returns {Function} - A curried version of the input function.
 * @example
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
}

// Example usage
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3)); // 6

// Variadic currying example
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

// console.log(sum(1)(2)(3)(4)(5)()); // 15

//Evaluate Operations
function evaluate(operation) {
    return function (a) { 
        return function (b) {
            switch (operation) {
                case 'add':
                    return a + b;
                case 'subtract':
                    return a - b;
                case 'multiply':
                    return a * b;
                case 'divide':
                    return a / b;
                default:
                    throw new Error('Invalid operation');
            }
        };
    };
}

// Example usage
// const add = evaluate('add'); // console.log(add(5)(3)); // 8
// const subtract = evaluate('subtract'); // console.log(subtract(5)(3)); // 2
// const multiply = evaluate('multiply'); // console.log(multiply(5)(3)); // 15
// const divide = evaluate('divide'); // console.log(divide(5)(3)); // 1.6666666666666667

// console.log(evaluate('add')(5)(3)); // 8
// console.log(evaluate('subtract')(5)(3)); // 2
// console.log(evaluate('multiply')(5)(3)); // 15
// console.log(evaluate('divide')(5)(3)); // 1.6666666666666667

// currying vs partial application
function partial(fn, ...fixedArgs) {
    return function (...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

// Example usage
function multiply(a, b, c) {
    return a * b * c;
}

const multiplyBy2 = partial(multiply, 2);
// console.log(multiplyBy2(3, 4)); // 24

const multiplyBy2And3 = partial(multiply, 2, 3);
// console.log(multiplyBy2And3(4)); // 24

// other example of partial application
const add = (a, b) => a + b;
const add5 = partial(add, 5);
// console.log(add5(10)); // 15
const add10 = partial(add, 10);
// console.log(add10(20)); // 30

// write a function that a normal function as input and returns curryed function
function toCurry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
}

// Example usage
function subtract(a, b, c) {
  return a - b - c;
}

const curriedSubtract = toCurry(subtract);
// console.log(curriedSubtract(10)(3)(2)); // 5
