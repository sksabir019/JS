// reverse the array in groups of a given size k .
function reverseArrayInGroups(arr, k) {
    for (let i = 0; i < arr.length; i += k) {
        const group = arr.slice(i, i + k); // Extract the current group
        arr.splice(i, k, ...group.reverse()); // Reverse the group and place it back into the array
    }
    return arr;
}

// Example usage:
console.log(reverseArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]
console.log(reverseArrayInGroups([1, 2, 3, 4, 5], 2));             // Output: [2, 1, 4, 3, 5]
console.log(reverseArrayInGroups([1], 1));                         // Output: [1]

export { reverseArrayInGroups };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We reverse the elements in place.

// Other way:
// function reverseArrayInGroups(arr, k) {
//     for (let i = 0; i < arr.length; i += k) {
//         let left = i;
//         let right = Math.min(i + k - 1, arr.length - 1);

//         while (left < right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }
//  }

// export { reverseArrayInGroups };
// Example usage:
// console.log(reverseArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]
// console.log(reverseArrayInGroups([1, 2, 3, 4, 5], 2));             // Output: [2, 1, 4, 3, 5]
// console.log(reverseArrayInGroups([1], 1));                         // Output: [1]

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We reverse the elements in place.

// Note: The second method avoids creating subarrays with slice, making it more space-efficient.