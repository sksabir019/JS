// finding the missing and repeating elements in an array.
function findMissingAndRepeating(arr) {
    const n = arr.length;
    let missing, repeating;

    // Calculate the expected sum and actual sum
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // Find the repeating element
    const numSet = new Set();
    for (let i = 0; i < n; i++) {
        if (numSet.has(arr[i])) {
            repeating = arr[i];
        }
        numSet.add(arr[i]);
    }

    // Find the missing element
    missing = expectedSum - (actualSum - repeating);

    return { missing, repeating };
}

// Example usage:
console.log(findMissingAndRepeating([3, 1, 3])); // Output: { missing: 2, repeating: 3 }
console.log(findMissingAndRepeating([1, 2, 2])); // Output: { missing: 3, repeating: 2 }
console.log(findMissingAndRepeating([2, 3, 1, 5, 3])); // Output: { missing: 4, repeating: 3 }

export { findMissingAndRepeating };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(n) - We use a set to track seen numbers.