// deep clone function
function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return null; // null is object
    if (typeof obj !== 'object') return obj; // primitives are returned as is
    if (obj instanceof Date) return new Date(obj); // handle Date
    if (obj instanceof RegExp) return new RegExp(obj); // handle RegExp
    if (hash.has(obj)) return hash.get(obj); // cyclic reference

    const clone = Array.isArray(obj) ? [] : {}; // handle arrays and objects
    hash.set(obj, clone); // store reference in hash map

    // Use Reflect.ownKeys to include non-enumerable and symbol properties

    Reflect.ownKeys(obj).forEach(key => {
        clone[key] = deepClone(obj[key], hash);
    });

    return clone;
}

// Example usage:
const original = {
    name: "John",
    age: 30,
    details: {
        hobbies: ["reading", "traveling"],
        address: {
            city: "New York",
            zip: "10001"
        }
    },
    dateOfBirth: new Date('1993-01-01'),
    pattern: /abc/g
};

const cloned = deepClone(original);
console.log(cloned);
console.log(cloned.details === original.details); // false
console.log(cloned.dateOfBirth === original.dateOfBirth); // false
console.log(cloned.pattern === original.pattern); // false

module.exports = deepClone;

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack and hash map

// Note: This implementation handles most common cases including nested objects, arrays, Date, RegExp, and cyclic references. 
// However, it may need further enhancements to handle other special objects like Map, Set, etc.

// Limitations: Functions, DOM nodes, and certain built-in objects (like Map, Set, WeakMap, WeakSet) are 
// not deeply cloned in this implementation.

// Functions are copied by reference, not cloned.
// DOM nodes are not handled and will be copied by reference.
// Map and Set can be added with additional handling if needed.
// For a more comprehensive deep clone, consider using libraries like Lodash's _.cloneDeep.

// other approach: Using JSON methods (limitations apply)
function deepCloneJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Example usage:
const clonedJSON = deepCloneJSON(original);
console.log(clonedJSON);
console.log(clonedJSON.details === original.details); // false
console.log(clonedJSON.dateOfBirth); // undefined
console.log(clonedJSON.pattern); // undefined

module.exports = { deepClone, deepCloneJSON };

// Time Complexity: O(n)
// Space Complexity: O(n)

// Limitations of JSON approach:
// Does not handle functions, undefined, Date, RegExp, Map, Set, and cyclic references.
// Use with caution depending on the data structure being cloned.

