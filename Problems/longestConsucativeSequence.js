// Given an unsorted array, find the longest consecutive sequence of integers.
function findLongestConsecutiveSequence(arr) {
    if (arr.length === 0) return 0;

    const numSet = new Set(arr);
    let longestStreak = 0;

    for (let num of numSet) { // Iterate through each number in the set
        // Only check for the start of a sequence
        if (!numSet.has(num - 1)) { // Check if it's the start of a sequence
            let currentNum = num; 
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
const arr = [100, 4, 200, 1, 3, 2];
const longestStreak = findLongestConsecutiveSequence(arr);
console.log(longestStreak); // Output: 4 (Sequence: 1, 2, 3, 4)

module.exports = findLongestConsecutiveSequence;

// Time Complexity: O(n)
// Space Complexity: O(n)


// other approach: Sorting
function findLongestConsecutiveSequenceSorting(arr) {
    if (arr.length === 0) return 0;

    arr.sort((a, b) => a - b); // Sort the array
    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) { // Skip duplicates
            if (arr[i] === arr[i - 1] + 1) { // Check if it's consecutive
                currentStreak++;
            } else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1; // Reset for a new sequence
            }
        }
    }

    return Math.max(longestStreak, currentStreak); // Final check
}

// Example usage:
const longestStreakSorting = findLongestConsecutiveSequenceSorting(arr);
console.log(longestStreakSorting); // Output: 4 (Sequence: 1, 2, 3, 4)

module.exports = { findLongestConsecutiveSequence, findLongestConsecutiveSequenceSorting };

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) if sorting in place, otherwise O(n)