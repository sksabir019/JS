// Rate limit (token buffer) implementation
function rateLimit(fn, limit, interval) {
    let tokens = limit;
    const queue = [];

    setInterval(() => {
        tokens = Math.min(tokens + 1, limit);
        if (queue.length > 0 && tokens > 0) {
            tokens--;
            const { context, args } = queue.shift();
            fn.apply(context, args);
        }
    }, interval);

    return function(...args) {
        if (tokens > 0) {
            tokens--;
            fn.apply(this, args);
        } else {
            queue.push({ context: this, args });
        }
    };
}

// Example usage:
const logMessage = (message) => console.log(`${new Date().toISOString()}: ${message}`);
const limitedLog = rateLimit(logMessage, 2, 1000); // 2 calls per second

limitedLog("Message 1");
limitedLog("Message 2");
limitedLog("Message 3"); // This will be queued
limitedLog("Message 4"); // This will be queued

// Output:
// 2023-10-05T12:00:00.000Z: Message 1
// 2023-10-05T12:00:00.000Z: Message 2
// (after 1 second)
// 2023-10-05T12:00:01.000Z: Message 3
// (after another second)
// 2023-10-05T12:00:02.000Z: Message 4

module.exports = rateLimit;

// Time Complexity: O(1) for each call, O(n) in the worst case for queue processing
// Space Complexity: O(n) for the queue in the worst case

class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit;
    this.tokens = limit;
    setInterval(() => this.tokens = this.limit, interval);
  }
  tryRemoveToken() {
    if (this.tokens > 0) {
      this.tokens--;
      return true;
    }
    return false;
  }
}
// Example usage:
const limiter = new RateLimiter(2, 1000); // 2 tokens per second