// removing duplicates from a sorted array and returning the length of the array with no duplicates.
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let writeIndex = 1;

    // Traverse the array and copy unique elements to the front
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[writeIndex] = arr[i];
            writeIndex++;
        }
    }

    // Resize the array to the new length
    arr.length = writeIndex;
    return writeIndex;
}

// Example usage:
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 4])); // Output: 5

export { removeDuplicates };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use a constant amount of space for the write index.

// Other way:
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// Example usage:
// console.log(removeDuplicates([1, 1, 2])); // Output: [1, 2]
// console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 4])); // Output: [0, 1, 2, 3, 4]

// export { removeDuplicates };

// Time Complexity: O(n) - The Set constructor traverses the array.
// Space Complexity: O(n) - We create a new array to hold the unique elements.

// Note: The first method modifies the array in place and is more space-efficient, while the second method is more concise but uses additional space.