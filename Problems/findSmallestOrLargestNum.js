// Find the Largest/Smallest Element in an Array
function findSmallestNum(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

function findLargestNum(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
console.log(findSmallestNum([3, 1, 4, 1, 5, 9])); // Output: 1
console.log(findLargestNum([3, 1, 4, 1, 5, 9]));  // Output: 9

export { findSmallestNum, findLargestNum };

// Time Complexity: O(n) - We traverse the array once to find the smallest or largest number.
// Space Complexity: O(1) - We use a constant amount of space regardless of input size.

// Other way:
// function findSmallestNum(arr) {
//     return Math.min(...arr);
// }

// function findLargestNum(arr) {
//     return Math.max(...arr);
// }
// Example usage:
// console.log(findSmallestNum([3, 1, 4, 1, 5, 9])); // Output: 1
// console.log(findLargestNum([3, 1, 4, 1, 5, 9]));  // Output: 9

// export { findSmallestNum, findLargestNum };

// Time Complexity: O(n) - Math.min and Math.max internally traverse the array.
// Space Complexity: O(n) - The spread operator creates a new array in memory.

// Note: The optimized way using Math.min and Math.max is more concise but may have higher space complexity for large arrays due to the spread operator.

