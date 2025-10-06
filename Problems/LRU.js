// LRU Cache Implementation
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        // Move the accessed item to the end (most recently used)
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // Remove the old entry
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // Remove the least recently used (first item in the Map)
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        // Insert the new entry
        this.cache.set(key, value);
    }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1); // Cache is {1=1}
lruCache.put(2, 2); // Cache is {1=1, 2=2}
console.log(lruCache.get(1)); // Returns 1, Cache is {2=2, 1=1}
lruCache.put(3, 3); // Evicts key 2, Cache is {1=1, 3=3}
console.log(lruCache.get(2)); // Returns -1 (not found)
lruCache.put(4, 4); // Evicts key 1, Cache is {3=3, 4=4}
console.log(lruCache.get(1)); // Returns -1 (not found)
console.log(lruCache.get(3)); // Returns 3
console.log(lruCache.get(4)); // Returns 4

module.exports = LRUCache;

// Time Complexity: O(1) for both get and put operations
// Space Complexity: O(capacity)