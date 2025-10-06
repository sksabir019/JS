// Event Emitter class
class EventEmitter {
    constructor() {
        this.events = {};
    }

    // Register an event listener
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    // Emit an event
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    // Remove an event listener
    off(event, listenerToRemove) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }
}

// Example usage:
const emitter = new EventEmitter();

function responseToEvent(msg) {
    console.log(msg);
}

// Registering an event listener
emitter.on('greet', responseToEvent);

// Emitting the event
emitter.emit('greet', 'Hello, World!'); // Output: Hello, World!

// Removing the event listener
emitter.off('greet', responseToEvent);

// Emitting the event again (no output)
emitter.emit('greet', 'Hello again!');

module.exports = EventEmitter;

// Time Complexity: O(n) for emit and off in the worst case, O(1) for on
// Space Complexity: O(n) where n is the number of unique events and listeners