/**
 * Debounce function to limit the rate at which a function can fire.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait before allowing the function to be called again.
 * @returns {Function} - A debounced version of the input function.
 */
// Using clousere - apply
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
    // or timeout = setTimeout(() => func(...args), wait);
  };
}
// Example usage:
const log = (data) => console.log(data);
const debouncedLog = debounce(log, 2000);

// Call the debounced function multiple times
debouncedLog("A");
debouncedLog("Az");
debouncedLog("Aza");
debouncedLog("AzaM"); // Only this call will result in 'Function executed!' being logged after 2 seconds

// Using clousere - call
function debounceCall(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.call(context, ...args), wait);
  };
}
// Example usage:
const logCall = (data) => console.log(data);
const debouncedLogCall = debounceCall(logCall, 2000);

// Call the debounced function multiple times
debouncedLogCall("B");
debouncedLogCall("Bz");
debouncedLogCall("Bza");
debouncedLogCall("BzaM"); // Only this call will result in 'Function executed!' being logged after 2 seconds
