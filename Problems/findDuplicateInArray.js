// Find Duplicates in an Array
function findDuplicateInArray(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

// Example usage:
console.log(findDuplicateInArray([1, 2, 3, 4, 5, 3, 2])); // Output: [2, 3]
console.log(findDuplicateInArray([1, 1, 1, 1]));          // Output: [1]
console.log(findDuplicateInArray([1, 2, 3, 4, 5]));       // Output: []

export { findDuplicateInArray };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(n) - In the worst case, we may store all elements in the 'seen' set.

// Other way:
// function findDuplicateInArray(arr) {
//     const duplicates = [];
//     arr.sort((a, b) => a - b); // Sort the array first

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }

//     return duplicates;
// }

// Example usage:
// console.log(findDuplicateInArray([1, 2, 3, 4, 5, 3, 2])); // Output: [2, 3]
// console.log(findDuplicateInArray([1, 1, 1, 1]));          // Output: [1]
// console.log(findDuplicateInArray([1, 2, 3, 4, 5]));       // Output: []

// export { findDuplicateInArray };

// Time Complexity: O(n log n) - Due to the sorting step.
// Space Complexity: O(1) - If we ignore the space used by the output array.

// Note: The first method using a Set is generally more efficient for this problem.