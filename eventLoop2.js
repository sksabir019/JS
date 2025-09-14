const fs = require("fs");
const crypto = require("crypto");

console.log("1. script start");

// Microtasks
process.nextTick(() => console.log("2. process.nextTick callback 1 (microtask)"));
Promise.resolve().then(() => console.log("3. Promise resolved callback 1 (microtask - main thread)"));

setTimeout(() => console.log("4. setTimeout 0s callback 1 (macrotask - main thread )"), 0);
setTimeout(() => console.log("5. setTimeout 0s callback 2 (macrotask - main thread )"), 0);
setTimeout(() => console.log("6. setTimeout 100ms callback (macrotask - main thread)"), 100);

// Another batch of microtasks
process.nextTick(() => console.log("7. process.nextTick callback 2 (microtask - main thread )"));
Promise.resolve().then(() => console.log("8. Promise resolved callback 2 (microtask - main thread)"));

// setImmediate (check phase)
setImmediate(() => {
  console.log("9. setImmediate callback 1 (check)");
  setImmediate(() => console.log("10. setImmediate nested inside check phase (check)"));
});

setImmediate(() => console.log("11. setImmediate callback 2 (check)"));

// I/O operation 1
fs.readFile(__filename, () => {
  console.log("12. ----- file read operation 1 (I/O callback)");

  // Nested microtasks
  process.nextTick(() => console.log("13. ----- process.nextTick inside I/O 1 (microtask)"));
  Promise.resolve().then(() => console.log("14. ----- Promise inside I/O 1 (microtask)"));

  // Nested macrotasks
  setTimeout(() => console.log("15. ----- setTimeout inside I/O 1 (macrotask)"), 0);
  setImmediate(() => console.log("16. ----- setImmediate inside I/O 1 (check)"));
});

// CPU-intensive operation 1
crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (err, key) => {
  if (err) throw err;
  console.log("17. pbkdf2 operation completed 1 (CPU intensive task)");
});

// CPU-intensive operation 2 (delayed simulation)
setTimeout(() => {
  crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (err, key) => {
    if (err) throw err;
    console.log("18. pbkdf2 operation completed 2 Inside Timeout (delayed CPU intensive task)");
  });
}, 50);

// I/O operation 2 (delayed)
setTimeout(() => {
  fs.readFile(__filename, () => {
    console.log("19. ----- File Read indise timeout:  file read operation 2 (I/O callback)");

    // Nested inside I/O 2
    process.nextTick(() => console.log("20. -----  indise timeout: process.nextTick inside I/O 2 (microtask)"));
    Promise.resolve().then(() => console.log("21. -----  indise timeout: Promise inside I/O 2 (microtask)"));

    setTimeout(() => console.log("22. -----  indise timeout: setTimeout inside I/O 2 (macrotask)"), 0);
    setImmediate(() => console.log("23. -----  indise timeout: setImmediate inside I/O 2 (check)"));
  });
}, 10);


// Additional I/O operation (fs.writeFile)
fs.writeFile("test.txt", "Hello, Node.js!", () => {
  console.log("24. ----- file write operation completed (I/O callback)");

  setImmediate(() => console.log("25. ----- setImmediate inside file write (check)"));
  process.nextTick(() => console.log("26. ----- process.nextTick inside file write (microtask)"));
});

console.log("27. script end");

/**
 * 1. script start
 * 27. script end
 * 2. process.nextTick callback 1 (microtask)
 * 7. process.nextTick callback 2 (microtask)
 * 3. Promise resolved callback 1 (microtask)
 * 8. Promise resolved callback 2 (microtask)
 * 4. setTimeout 0s callback 1 (macrotask)
 * 5. setTimeout 0s callback 2 (macrotask)
 * 9. setImmediate callback 1 (check)
 * 11. setImmediate callback 2 (check)
 * 10. setImmediate nested inside check phase (check)
 * 24. file write operation completed (I/O callback)
 * 26. process.nextTick inside file write (microtask)
 * 25. setImmediate inside file write (check)
 * 12. file read operation 1 (I/O callback)
 * 13. process.nextTick inside I/O 1 (microtask)
 * 14. Promise inside I/O 1 (microtask)
 * 16. setImmediate inside I/O 1 (check)
 * 15. setTimeout inside I/O 1 (macrotask)
 * 17. pbkdf2 operation completed 1 (CPU intensive task)
 * 19. file read operation 2 (I/O callback)
 * 20. process.nextTick inside I/O 2 (microtask)
 * 21. Promise inside I/O 2 (microtask)
 * 23. setImmediate inside I/O 2 (check)
 * 22. setTimeout inside I/O 2 (macrotask)
 * 18. pbkdf2 operation completed 2 (delayed CPU intensive task)
 * 6. setTimeout 100ms callback (macrotask)
 * 
 * Key Takeaways from This Version:
 * Microtasks (process.nextTick & Promise) always execute before any macrotasks.
 * Timers (setTimeout 0s) execute in the next event loop iteration after microtasks.
 * Check phase (setImmediate) executes after I/O callbacks but before setTimeouts inside I/O.
 * CPU-intensive tasks (crypto.pbkdf2) run asynchronously but can delay subsequent tasks.
 * Delays in I/O (fs.readFile) can change when setImmediate and setTimeout execute.
A setTimeout with 100ms delay waits for the timer phase after the previous event loop cycles.
 */