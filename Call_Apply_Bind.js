/**
 * Call, Apply, and Bind examples using closures
 */

// Call: Invoke a function with a given `this` value and arguments provided individually.
function greetCall(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person1 = { name: "Alice" };
greetCall.call(person1, "Hello", "!"); // Output: Hello, Alice!

// Apply: Invoke a function with a given `this` value and arguments provided as an array (or array-like object).
function greetApply(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person2 = { name: "Bob" };
greetApply.apply(person2, ["Hi", "."]); // Output: Hi, Bob.

// Bind: Create a new function that, when called, has its `this` keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.
function greetBind(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person3 = { name: "Charlie" };
const greetCharlie = greetBind.bind(person3, "Hey");
greetCharlie("?"); // Output: Hey, Charlie?

// Note: In modern JavaScript, arrow functions do not have their own `this` context, so they are not
// suitable for use with call, apply, or bind in the same way as regular functions.

// Example with arrow function (not recommended for call/apply/bind)
const arrowGreet = (greeting, punctuation) => {
  console.log(`${greeting}, ${this.name}${punctuation}`);
};
// arrowGreet.call(person1, 'Hello', '!'); // 'this' is not bound to person1, will not work as expected
// arrowGreet.apply(person2, ['Hi', '.']); // 'this' is not bound to person2, will not work as expected
// const arrowGreetCharlie = arrowGreet.bind(person3, 'Hey'); // 'this' is not bound to person3, will not work as expected
// arrowGreetCharlie('?'); // Will not work as expected
