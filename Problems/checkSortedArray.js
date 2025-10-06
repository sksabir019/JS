// Check if an array is sorted in non-decreasing order.
function isSortedArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isSortedArray([1, 2, 3, 4, 5])); // Output: true
console.log(isSortedArray([5, 4, 3, 2, 1])); // Output: false
console.log(isSortedArray([1, 2, 2, 3, 4])); // Output: true

export { isSortedArray };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use a constant amount of space.

// Other way:
// function isSortedArray(arr) {
//     return arr.every((value, index) => index === 0 || value >= arr[index - 1]);
// }

// Example usage:
// console.log(isSortedArray([1, 2, 3, 4, 5])); // Output: true
// console.log(isSortedArray([5, 4, 3, 2, 1])); // Output: false
// console.log(isSortedArray([1, 2, 2, 3, 4])); // Output: true

// export { isSortedArray };

// Time Complexity: O(n) - The every method traverses the array.
// Space Complexity: O(1) - We use a constant amount of space.

// Note: The first method is more explicit and may be easier to understand for beginners, while the second method is more concise and leverages JavaScript's built-in array methods.