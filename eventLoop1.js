const fs = require("fs");
const crypto = require("crypto");

console.log("1. script start");

// Microtasks
process.nextTick(() => console.log("2. process.nextTick callback 1 (microtask)"));
Promise.resolve().then(() => console.log("3. Promise resolved callback 1 (microtask)"));

setTimeout(() => console.log("4. setTimeout 0s callback 1 (macrotask)"), 0);
setTimeout(() => console.log("5. setTimeout 0s callback 2 (macrotask)"), 0);

// Another microtask batch
process.nextTick(() => console.log("6. process.nextTick callback 2 (microtask)"));
Promise.resolve().then(() => console.log("7. Promise resolved callback 2 (microtask)"));

// setImmediate (check phase)
setImmediate(() => console.log("8. setImmediate callback 1 (check)"));
setImmediate(() => console.log("9. setImmediate callback 2 (check)"));

// I/O callback
fs.readFile(__filename, () => {
  console.log("10. file read operation (I/O callback)");

  // Nested setImmediate inside I/O
  setImmediate(() => console.log("11. setImmediate inside I/O (check)"));

  // Nested setTimeout inside I/O
  setTimeout(() => console.log("12. setTimeout inside I/O (macrotask)"), 0);

  // Nested process.nextTick inside I/O
  process.nextTick(() => console.log("13. process.nextTick inside I/O (microtask)"));

  // Nested promise inside I/O
  Promise.resolve().then(() => console.log("14. Promise inside I/O (microtask)"));
});

// CPU-intensive operation
crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (err, key) => {
  if (err) throw err;
  console.log("15. pbkdf2 operation completed 1 (CPU intensive task)");
});

// Another CPU-intensive operation
crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (err, key) => {
  if (err) throw err;
  console.log("16. pbkdf2 operation completed 2 (CPU intensive task)");
});

// Additional I/O operation (fs.writeFile)
fs.writeFile("test.txt", "Hello, Node.js!", () => {
  console.log("17. file write operation completed (I/O callback)");

  setImmediate(() => console.log("18. setImmediate inside file write (check)"));
  process.nextTick(() => console.log("19. process.nextTick inside file write (microtask)"));
});

console.log("20. script end");

/**
 * Output:
 * 1. script start
 * 20. script end
 * 2. process.nextTick callback 1 (microtask)
 * 6. process.nextTick callback 2 (microtask)
 * 3. Promise resolved callback 1 (microtask)
 * 7. Promise resolved callback 2 (microtask)
 * 4. setTimeout 0s callback 1 (macrotask)
 * 5. setTimeout 0s callback 2 (macrotask)
 * 8. setImmediate callback 1 (check)
 * 9. setImmediate callback 2 (check)
 * 17. file write operation completed (I/O callback)
 * 19. process.nextTick inside file write (microtask)
 * 10. file read operation (I/O callback)
 * 13. process.nextTick inside I/O (microtask)
 * 14. Promise inside I/O (microtask)
 * 18. setImmediate inside file write (check)
 * 11. setImmediate inside I/O (check)
 * 12. setTimeout inside I/O (macrotask)
 * 15. pbkdf2 operation completed 1 (CPU intensive task)
 * 16. pbkdf2 operation completed 2 (CPU intensive task)
 */