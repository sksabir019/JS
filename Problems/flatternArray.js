// flattenArray function
function flattenArray(arr) {
    const result = [];

    function flattenHelper(subArr) {
        for (let item of subArr) {
            if (Array.isArray(item)) {
                flattenHelper(item); // Recursively flatten the sub-array
            } else {
                result.push(item); // Push non-array items to the result
            }
        }
    }

    flattenHelper(arr);
    return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [[7]], 8];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = flattenArray;

// Time Complexity: O(n) where n is the total number of elements in the nested array
// Space Complexity: O(n) for the result array and call stack in case of deep nesting


// Other approach: Using stack (iterative)
function flattenArrayIterative(arr) {
    const result = [];
    const stack = [...arr]; // Initialize stack with the input array

    while (stack.length) {
        const item = stack.pop(); // Get the last item from the stack
        if (Array.isArray(item)) {
            stack.push(...item); // If it's an array, push its elements onto the stack
        } else {
            result.push(item); // If it's not an array, add it to the result
        }
    }

    return result.reverse(); // Reverse to maintain original order
}

// Example usage:
const flatArrayIterative = flattenArrayIterative(nestedArray);
console.log(flatArrayIterative); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = { flattenArray, flattenArrayIterative };

// Time Complexity: O(n) where n is the total number of elements in the nested array
// Space Complexity: O(n) for the result array and stack in case of deep nesting

// Other approach: Using built-in flat method (ES2019+)
function flattenArrayBuiltIn(arr) {
    return arr.flat(Infinity); // Use flat with Infinity to flatten all levels
}

// Example usage:
const flatArrayBuiltIn = flattenArrayBuiltIn(nestedArray);
console.log(flatArrayBuiltIn); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = { flattenArray, flattenArrayIterative, flattenArrayBuiltIn };

// Time Complexity: O(n) where n is the total number of elements in the nested array
// Space Complexity: O(n) for the result array

// other approach: Using generators
function* flattenGenerator(arr) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            yield* flattenGenerator(item); // Recursively yield from sub-array
        } else {
            yield item; // Yield non-array items
        }
    }
}

function flattenArrayGenerator(arr) {
    return Array.from(flattenGenerator(arr)); // Convert generator to array
}

// Example usage:
const flatArrayGenerator = flattenArrayGenerator(nestedArray);
console.log(flatArrayGenerator); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = { flattenArray, flattenArrayIterative, flattenArrayBuiltIn, flattenArrayGenerator };

// Time Complexity: O(n) where n is the total number of elements in the nested array
// Space Complexity: O(n) for the result array and call stack in case of deep nesting

// other approach: Using reduce
function flattenArrayReduce(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc.push(...flattenArrayReduce(item)); // Recursively flatten and concatenate
        } else {
            acc.push(item); // Push non-array items to the accumulator
        }
        return acc;
    }, []);
}

// Example usage:
const flatArrayReduce = flattenArrayReduce(nestedArray);
console.log(flatArrayReduce); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = { flattenArray, flattenArrayIterative, flattenArrayBuiltIn, flattenArrayGenerator, flattenArrayReduce };

// Time Complexity: O(n) where n is the total number of elements in the nested array
// Space Complexity: O(n) for the result array and call stack in case of deep nesting