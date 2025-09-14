/**
 * Throttling function to limit the rate at which a function can fire.
 * @param {Function} func - The function to throttle.
 * @param {number} wait - The number of milliseconds to wait before allowing the function to be called again.
 * @returns {Function} - A throttled version of the input function.
 */
function throttle(func, wait) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
// Example usage:
const logThrottle = (data) => console.log(data);
const throttledLog = throttle(logThrottle, 2000);

// Call the throttled function multiple times
throttledLog("D");
throttledLog("Dz");
throttledLog("Dza");
throttledLog("DzaM"); // Only the first call will be executed immediately, subsequent calls will be ignored until 2 seconds have passed

// Using closure - call
function throttleCall(func, wait) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      func.call(this, ...args);
    }
  };
}
// Example usage:
const logThrottleCall = (data) => console.log(data);
const throttledLogCall = throttleCall(logThrottleCall, 2000);

// Call the throttled function multiple times
throttledLogCall("E");
throttledLogCall("Ez");
throttledLogCall("Eza");
throttledLogCall("EzaM"); // Only the first call will be executed immediately, subsequent calls will be ignored until 2 seconds have passed

// Using closure - setTimeout
function throttleTimeout(func, wait) {
  let timeout = false;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = true;
        func.apply(this, args);``
      }, wait);
    }
  };
}
// Example usage:
const logThrottleTimeout = (data) => console.log(data);
const throttledLogTimeout = throttleTimeout(logThrottleTimeout, 2000);

// Call the throttled function multiple times
throttledLogTimeout("F");
throttledLogTimeout("Fz");
throttledLogTimeout("Fza");
throttledLogTimeout("FzaM"); // Only the first call will be executed after 2 seconds, subsequent calls will be ignored until the timeout is cleared