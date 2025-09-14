/**
 * Craete chunks from an array based on size.
 * arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * chunkArray(arr, 3) => [[1,2,3],[4,5,6],[7,8,9]]
 * or, arr.chunk(3) => [[1,2,3],[4,5,6],[7,8,9]]
 */
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = chunkArray(arr, 3);
console.log(chunked); // [[1,2,3],[4,5,6],[7,8,9]]

// Using the method directly on Array prototype
Array.prototype.chunk = function(size) {
    const result = [];
    for (let i = 0; i < this.length; i += size) {
        result.push(this.slice(i, i + size));
    }
    return result;
};

// Example usage:
const chunkedDirect = arr.chunk(4);
console.log(chunkedDirect); // [[1,2,3,4],[5,6,7,8],[9]]
