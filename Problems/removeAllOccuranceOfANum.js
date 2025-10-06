// removing all occurrences of a specified element from an array.
function removeAllOccurrences(arr, num) {
    let writeIndex = 0;

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            arr[writeIndex] = arr[i]; // Move non-matching elements to the front
            writeIndex++;
        }
    }

    // Resize the array to the new length
    arr.length = writeIndex;
    return arr;
}

// Example usage:
console.log(removeAllOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: [1, 3, 4]
console.log(removeAllOccurrences([5, 6, 7, 8], 9));       // Output: [5, 6, 7, 8]
console.log(removeAllOccurrences([1, 1, 1, 1], 1));       // Output: []

export { removeAllOccurrences };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use a constant amount of space for the write index.

// Other way:
// function removeAllOccurrences(arr, num) {
//     return arr.filter(item => item !== num);
// }

// Example usage:
// console.log(removeAllOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: [1, 3, 4]
// console.log(removeAllOccurrences([5, 6, 7, 8], 9));       // Output: [5, 6, 7, 8]
// console.log(removeAllOccurrences([1, 1, 1, 1], 1));       // Output: []

// export { removeAllOccurrences };

// Time Complexity: O(n) - The filter method traverses the array.
// Space Complexity: O(n) - The filter method creates a new array to hold the filtered elements.

// Note: The first method modifies the array in place and is more space-efficient, while the second method is more concise but uses additional space.