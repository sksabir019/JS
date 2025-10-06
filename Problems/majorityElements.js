// Find the element that appears more than n/2 times in an array.
function findMajorityElement(arr) {
    const n = arr.length;
    const countMap = new Map();

    for (let i = 0; i < n; i++) {
        const num = arr[i];
        countMap.set(num, (countMap.get(num) || 0) + 1);
        if (countMap.get(num) > n / 2) {
            return num;
        }
    }
    return null;
}

// Example usage:
const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 4

module.exports = findMajorityElement;

// Time Complexity: O(n)
// Space Complexity: O(n)

// other approach: Boyer-Moore Voting Algorithm
function findMajorityElementBoyerMoore(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify if the candidate is actually the majority element
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > arr.length / 2 ? candidate : null;
}

// Example usage:
const majorityElementBM = findMajorityElementBoyerMoore(arr);
console.log(majorityElementBM); // Output: 4

module.exports = { findMajorityElement, findMajorityElementBoyerMoore };

// Time Complexity: O(n)
// Space Complexity: O(1)