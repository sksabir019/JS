class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    // Dummy head and tail nodes
    this.head = new ListNode(null, null);
    this.tail = new ListNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this._remove(node);
    this._add(node); // Move to front (most recently used)
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }

    const newNode = new ListNode(key, value);
    this._add(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.cache.delete(lru.key);
    }
  }
}
// Example usage:
const lru = new LRUCache(2);
lru.put(1, 1); // cache is {1=1}
lru.put(2, 2); // cache is {1=1, 2=2}
console.log(lru.get(1)); // return 1
lru.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
console.log(lru.get(2)); // returns -1 (not found)
lru.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
console.log(lru.get(1)); // return -1 (not found)
console.log(lru.get(3)); // return 3
console.log(lru.get(4)); // return 4

module.exports = LRUCache;