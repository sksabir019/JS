// Reverse an Array
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']

export { reverseArray };

// Time Complexity: O(n) - We traverse half of the array to reverse it.
// Space Complexity: O(1) - We use a constant amount of space for the pointers.

// Other way:
// function reverseArray(arr) {
//     return arr.reverse();
// }

// Example usage:
// console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
// console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']

// export { reverseArray };

// Time Complexity: O(n) - The built-in reverse method traverses the array.
// Space Complexity: O(1) - The built-in reverse method reverses the array in place.

// Note: The built-in reverse method is more concise and leverages JavaScript's native capabilities.