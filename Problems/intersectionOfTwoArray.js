// Find the common elements (intersection) between two arrays.
function intersectionOfTwoArrays(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [...set1].filter(item => set2.has(item));
    return intersection;
}

// Example usage:
console.log(intersectionOfTwoArrays([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
console.log(intersectionOfTwoArrays(['a', 'b', 'c'], ['b', 'c', 'd'])); // Output: ['b', 'c']

export { intersectionOfTwoArrays };

// Time Complexity: O(n + m) - We traverse both arrays once.
// Space Complexity: O(n) - We store elements in sets.

// Other way:
// function intersectionOfTwoArrays(arr1, arr2) {
//     const intersection = [];
//     const set2 = new Set(arr2);

//     for (let item of arr1) {
//         if (set2.has(item) && !intersection.includes(item)) {
//             intersection.push(item);
//         }
//     }

//     return intersection;
// }

// Example usage:
// console.log(intersectionOfTwoArrays([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
// console.log(intersectionOfTwoArrays(['a', 'b', 'c'], ['b', 'c', 'd'])); // Output: ['b', 'c']

// export { intersectionOfTwoArrays };

// Time Complexity: O(n * m) - In the worst case, we may check each element of arr1 against all elements of arr2.
// Space Complexity: O(n) - We store elements in the intersection array.

// Note: The first method using sets is generally more efficient for this problem.