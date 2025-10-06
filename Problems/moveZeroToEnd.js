// The task is to move all the zeroes in an array to the end while maintaining the
// order of non-zero elements.

function moveZeroToEnd(arr) {
    let nonZeroIndex = 0;

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap non-zero element to the front
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }

    return arr;
}

// Example usage:
console.log(moveZeroToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroToEnd([0, 0, 1]));         // Output: [1, 0, 0]
console.log(moveZeroToEnd([1, 2, 3]));         // Output: [1, 2, 3]

export { moveZeroToEnd };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use a constant amount of space for the index.

// Other way:
// function moveZeroToEnd(arr) {
//     const nonZeroElements = arr.filter(num => num !== 0); // Filter out non-zero elements
//     const zeroCount = arr.length - nonZeroElements.length; // Count of zero elements
//     return [...nonZeroElements, ...Array(zeroCount).fill(0)]; // Combine non-zero elements with zeros at the end
// }

// Example usage:
// console.log(moveZeroToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
// console.log(moveZeroToEnd([0, 0, 1]));         // Output: [1, 0, 0]
// console.log(moveZeroToEnd([1, 2, 3]));         // Output: [1, 2, 3]

// export { moveZeroToEnd };

// Time Complexity: O(n) - The filter method traverses the array.
// Space Complexity: O(n) - We create a new array for non-zero elements and another for zeros.

// Note: The first method modifies the array in place and is more space-efficient, while the second method is more concise but uses additional space.
