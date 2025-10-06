// Given two sorted arrays, merge them into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    // Traverse both arrays and insert the smaller element into the merged array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in either array, add them to the merged array
    merged.push(...arr1.slice(i));
    merged.push(...arr2.slice(j));

    return merged;
}

// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays(['a', 'c', 'e'], ['b', 'd', 'f'])); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

export { mergeSortedArrays };

// Time Complexity: O(n + m) - We traverse both arrays once.
// Space Complexity: O(n + m) - We create a new array to hold the merged elements.


// Other way:
// function mergeSortedArrays(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// Example usage:
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays(['a', 'c', 'e'], ['b', 'd', 'f'])); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

// export { mergeSortedArrays };

// Time Complexity: O((n + m) log(n + m)) - Due to the sorting step after merging.
// Space Complexity: O(n + m) - We create a new array to hold the merged elements.