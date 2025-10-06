// Rotate an array by k positions to the right.
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than array length
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)]; // Create the rotated array 
    return rotated;
}

// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotateArray(['a', 'b', 'c', 'd'], 1)); // Output: ['d', 'a', 'b', 'c']

export { rotateArray };

// Time Complexity: O(n) - We traverse the array to create the rotated version.
// Space Complexity: O(n) - We create a new array to hold the rotated elements.

// Other way:
// function rotateArray(arr, k) {
//     const n = arr.length;
//     k = k % n;
//     for (let i = 0; i < k; i++) {
//         const temp = arr[n - 1];
//         for (let j = n - 1; j > 0; j--) {
//             arr[j] = arr[j - 1];
//         }
//         arr[0] = temp;
//     }
//     return arr;
// }

// Example usage:
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// console.log(rotateArray(['a', 'b', 'c', 'd'], 1)); // Output: ['d', 'a', 'b', 'c']

// export { rotateArray };

// Time Complexity: O(n * k) - We may need to perform k rotations, each taking O(n) time.
// Space Complexity: O(1) - We rotate the array in place without using extra space.