// Move all zeros in an array to the beginning without changing the
// order of non-zero elements.

function moveZeroToBegin(arr) {
    let nonZeroIndex = arr.length - 1;

    // Traverse the array from the end
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            // Swap non-zero element to the back
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex--;
        }
    }

    return arr;
}

// Example usage:
console.log(moveZeroToBegin([0, 1, 0, 3, 12])); // Output: [0, 0, 1, 3, 12]
console.log(moveZeroToBegin([1, 2, 0]));         // Output: [0, 1, 2]
console.log(moveZeroToBegin([1, 2, 3]));         // Output: [1, 2, 3]

export { moveZeroToBegin };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use a constant amount of space for the index.

// Other way:
// function moveZeroToBegin(arr) {
//     const nonZeroElements = arr.filter(num => num !== 0); // Filter out non-zero elements
//     const zeroCount = arr.length - nonZeroElements.length; // Count of zero elements
//     return [...Array(zeroCount).fill(0), ...nonZeroElements]; // Combine zeros at the beginning with non-zero elements
// }

// Example usage:
// console.log(moveZeroToBegin([0, 1, 0, 3, 12])); // Output: [0, 0, 1, 3, 12]
// console.log(moveZeroToBegin([1, 2, 0]));         // Output: [0, 1, 2]
// console.log(moveZeroToBegin([1, 2, 3]));         // Output: [1, 2, 3]

// export { moveZeroToBegin };

// Time Complexity: O(n) - The filter method traverses the array.
// Space Complexity: O(n) - We create a new array for non-zero elements and another for zeros.

// Note: The first method modifies the array in place and is more space-efficient, while the second method is more concise but uses additional space.