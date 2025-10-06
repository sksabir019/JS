// Find a subarray with a given sum (if it exists).
function findSubarrayWithSum(arr, targetSum) {
    const n = arr.length;
    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        for (let end = start; end < n; end++) {
            currentSum += arr[end];
            if (currentSum === targetSum) {
                return arr.slice(start, end + 1);
            }
        }
    }
    return null;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const targetSum = 9;
const subarray = findSubarrayWithSum(arr, targetSum);
console.log(subarray); // Output: [2, 3, 4]

module.exports = findSubarrayWithSum;

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Other approach: Using HashMap (for non-negative numbers)
function findSubarrayWithSumHashMap(arr, targetSum) {
    const sumMap = new Map();
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum === targetSum) {
            return arr.slice(0, i + 1);
        }

        if (sumMap.has(currentSum - targetSum)) {
            const startIdx = sumMap.get(currentSum - targetSum) + 1;
            return arr.slice(startIdx, i + 1);
        }

        sumMap.set(currentSum, i);
    }

    return null;
}

// Example usage:
const subarrayHashMap = findSubarrayWithSumHashMap(arr, targetSum);
console.log(subarrayHashMap); // Output: [2, 3, 4]

module.exports = { findSubarrayWithSum, findSubarrayWithSumHashMap };

// Time Complexity: O(n)
// Space Complexity: O(n)

// Note: The HashMap approach works correctly for arrays with non-negative numbers. For arrays with negative numbers, a different approach is needed.
// The two-pointer or sliding window technique generally works for non-negative numbers only.
// For arrays with negative numbers, the brute-force approach is more reliable unless additional constraints are known.
// For arrays with both positive and negative numbers, the brute-force approach is more reliable unless additional constraints are known.
// For arrays with both positive and negative numbers, a more complex approach involving prefix sums and a hash map can be used, but it may not always yield a valid subarray if negative numbers are involved.