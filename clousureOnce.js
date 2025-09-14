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

// Example usage
const initApp = once(() => {
  console.log("App initialized");
});

initApp(); // Logs: App initialized
initApp(); // Does nothing

// Time Complexity: O(1) for each call after the first
// Space Complexity: O(1) for the closure variables

// other example
const add = (a, b) => a + b;
const addOnce = once(add);

console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: 5 (same result as before)

// Other example with object method
const obj = {
  value: 42,
  getValueOnce: once(function() {
    return this.value;
  })
};

console.log(obj.getValueOnce()); // Output: 42
console.log(obj.getValueOnce()); // Output: 42 (same result as before)

// Time Complexity: O(1) for each call after the first
// Space Complexity: O(1) for the closure variables

// other example with async function
const fetchData = once(async () => {
  console.log("Fetching data...");
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
});

fetchData().then(console.log); // Logs: Fetching data... then after 1 second: Data fetched
fetchData().then(console.log); // Immediately logs: Data fetched

// Time Complexity: O(1) for each call after the first
// Space Complexity: O(1) for the closure variables 

// other example with error handling
const riskyOperation = once(() => {
  if (Math.random() > 0.5) {
    throw new Error("Operation failed");
  }
  return "Operation succeeded";
});

try {
  console.log(riskyOperation());
} catch (e) {
  console.error(e.message);
}

try {
  console.log(riskyOperation()); // Will not retry the operation
} catch (e) {
  console.error(e.message);
}

// Time Complexity: O(1) for each call after the first
// Space Complexity: O(1) for the closure variables