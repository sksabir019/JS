// memoizeFunction.js
// Write a function that takes another function as input and returns a memoized version of that function.
// The memoized function should cache the results of previous calls and return the cached result when the same inputs occur again.

function memoizeFunction(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

// Example usage:
const add = (a, b) => a + b;
const memoizedAdd = memoizeFunction(add);
console.log(memoizedAdd(2, 3)); // 5
console.log(memoizedAdd(2, 3)); // 5 (cached)
console.log(memoizedAdd(3, 4)); // 7

// Time Complexity: O(n) for the first call with unique arguments, O(1) for subsequent calls with the same arguments
// Space Complexity: O(m) where m is the number of unique calls made to the memoized function

// factorial example
const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};
const memoizedFactorial = memoizeFunction(factorial);
console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // 120 (cached)
console.log(memoizedFactorial(6)); // 720

// Time Complexity: O(n) for the first call with unique arguments, O(1) for subsequent calls with the same arguments
// Space Complexity: O(m) where m is the number of unique calls made to the memoized function

// fibonacci example
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
const memoizedFibonacci = memoizeFunction(fibonacci);
console.log(memoizedFibonacci(10)); // 55
console.log(memoizedFibonacci(10)); // 55 (cached)
console.log(memoizedFibonacci(15)); // 610

// Time Complexity: O(n) for the first call with unique arguments, O(1) for subsequent calls with the same arguments
// Space Complexity: O(m) where m is the number of unique calls made to the memoized function
