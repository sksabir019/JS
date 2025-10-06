// Given an array and a sum, find all unique pairs of integers in the
// array that add up to the sum.

function findPairsWithGivenSum(arr, targetSum) {
    const seen = new Set();
    const pairs = new Set();

    for (let num of arr) {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            // Create a sorted pair to avoid duplicates like (2,3) and (3,2)
            const pair = [Math.min(num, complement), Math.max(num, complement)];
            pairs.add(pair.toString()); // Use string representation to store in Set
        }
        seen.add(num);
    }

    // Convert string pairs back to array of numbers
    return Array.from(pairs).map(pair => pair.split(',').map(Number));
}

// Example usage:
console.log(findPairsWithGivenSum([1, 2, 3, 4, 5], 5)); // Output: [[1,4],[2,3]]
console.log(findPairsWithGivenSum([1, 1, 2, 3, 4], 4)); // Output: [[1,3]]
console.log(findPairsWithGivenSum([0, -1, 2, -3, 1], -2)); // Output: [[-3,1]]

export { findPairsWithGivenSum };

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(n) - We use sets to track seen numbers and pairs.

// Other way:
// function findPairsWithGivenSum(arr, targetSum) {
//     const pairs = [];
//     arr.sort((a, b) => a - b); // Sort the array first

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         const currentSum = arr[left] + arr[right];
//         if (currentSum === targetSum) {
//             pairs.push([arr[left], arr[right]]);
//             left++;
//             right--;
//             // Skip duplicates
//             while (left < right && arr[left] === arr[left - 1]) left++;
//             while (left < right && arr[right] === arr[right + 1]) right--;
//         } else if (currentSum < targetSum) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return pairs;
// }

// Example usage:
// console.log(findPairsWithGivenSum([1, 2, 3, 4, 5], 5)); // Output: [[1,4],[2,3]]
// console.log(findPairsWithGivenSum([1, 1, 2, 3, 4], 4)); // Output: [[1,3]]
// console.log(findPairsWithGivenSum([0, -1, 2, -3, 1], -2)); // Output: [[-3,1]]

// export { findPairsWithGivenSum };

// Time Complexity: O(n log n) - Due to the sorting step.
// Space Complexity: O(1) - If we ignore the space used by the output array.

// Note: The first method using a Set is generally more efficient for this problem.