/**
 * Factorial function with memoization in JavaScript
 */

// Method 1: Using a closure to store memoized values
const factorial = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return 1;
    memo[n] = n * factorial(n - 1, memo);
    return memo[n];
};

console.log(factorial(5));  // Output: 120

// Method 2: Using an IIFE to create a memoized factorial function
const factorialIIFE = (() => {
    const memo = {};
    return (n) => {
        if (n in memo) return memo[n];
        if (n === 0) return 1;
        memo[n] = n * factorialIIFE(n - 1);
        return memo[n];
    };
})();

console.log(factorialIIFE(6));  // Output: 720

// Method 3: Using a class to encapsulate the memoization logic
class Factorial {
    constructor() {
        this.memo = {};
    }

    compute(n) {
        if (n in this.memo) return this.memo[n];
        if (n === 0) return 1;
        this.memo[n] = n * this.compute(n - 1);
        return this.memo[n];
    }
}

const factorialInstance = new Factorial();
console.log(factorialInstance.compute(7));  // Output: 5040