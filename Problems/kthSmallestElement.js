// Given an array and an integer k , find the kth smallest element in the array.
function kthSmallestElement(arr, k) {
    if (k < 1 || k > arr.length) {
        return null; // Handle invalid k values
    }
    const sortedArr = [...arr].sort((a, b) => a - b); // Sort the array in ascending order
    return sortedArr[k - 1]; // Return the kth smallest element (1-based index)
}

// Example usage:
console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 3)); // Output: 7
console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 4)); // Output: 10
console.log(kthSmallestElement([1, 2, 3, 4, 5], 1));       // Output: 1

export { kthSmallestElement };

// Time Complexity: O(n log n) - Sorting the array takes O(n log n) time.
// Space Complexity: O(n) - We create a copy of the array to sort it.

// Other way:
// function kthSmallestElement(arr, k) {
//     if (k < 1 || k > arr.length) {
//         return null; // Handle invalid k values
//     }
//     const minHeap = [];
    
//     // Build a min-heap using the first k elements
//     for (let i = 0; i < k; i++) {
//         minHeap.push(arr[i]);
//     }
//     minHeap.sort((a, b) => a - b); // Initial sort to create a heap-like structure

//     // Process the remaining elements
//     for (let i = k; i < arr.length; i++) {
//         if (arr[i] < minHeap[k - 1]) {
//             minHeap[k - 1] = arr[i];
//             minHeap.sort((a, b) => a - b); // Re-sort to maintain heap property
//         }
//     }

//     return minHeap[k - 1]; // The root of the min-heap is the kth smallest element
// }

// Example usage:
// console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 4)); // Output: 10
// console.log(kthSmallestElement([1, 2, 3, 4, 5], 1));       // Output: 1

// export { kthSmallestElement };

// Time Complexity: O(n log k) - We process each of the n elements and maintain a heap of size k.
// Space Complexity: O(k) - We use a min-heap of size k.

// Note: The first method is simpler and works well for small to medium-sized arrays. The second method is more efficient for large arrays when k is much smaller than n.