function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// example usage:
const log = (message) => console.log(message);
const debouncedLog = debounce(log, 1000);

debouncedLog("Hello");
debouncedLog("Hello again"); // Only this call will log after 1 second

function throttle(fn, limit) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= limit) {
      fn(...args);
      last = now;
    }
  };
}
// example usage:
const throttledLog = throttle(log, 1000);

throttledLog("Hello");
setTimeout(() => throttledLog("Hello again"), 500); // Ignored
setTimeout(() => throttledLog("Hello after 1.5s"), 1500); // This will log

module.exports = { debounce, throttle };

// Time Complexity: O(1) for both debounce and throttle
// Space Complexity: O(1) for both debounce and throttle