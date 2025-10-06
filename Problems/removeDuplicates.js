// Remove Duplicate Elements from an Array
function removeDuplicates(arr) {
    const uniqueElements = [];
    const seen = new Set();

    for (let num of arr) {
        if (!seen.has(num)) {
            seen.add(num);
            uniqueElements.push(num);
        }
    }

    return uniqueElements;
}

// Example usage:
console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1]));          // Output: [1]
console.log(removeDuplicates([]));                     // Output: []

export { removeDuplicates };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(n) - In the worst case, we may store all elements in the 'seen' set and 'uniqueElements' array.

// Other way:
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// Example usage:
// console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([1, 1, 1, 1]));          // Output: [1]
// console.log(removeDuplicates([]));                     // Output: []

// export { removeDuplicates };

// Time Complexity: O(n) - Creating a Set from the array traverses it once.
// Space Complexity: O(n) - The Set may store all elements in the worst case.

// Note: The first method maintains the original order of elements, while the second method using Set does not guarantee order.