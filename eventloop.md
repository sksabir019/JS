# 🧠 What Is the Event Loop?

The **event loop** is a mechanism that continuously checks:

- If the call stack is empty
- If there are tasks in the task queue or microtask queue

It pulls tasks from these queues and executes them one by one, ensuring smooth handling of asynchronous operations like `setTimeout`, `fetch`, or `Promise`.

---

## 🔍 Key Terms in the Event Loop

### 1. Call Stack

A **LIFO (Last-In, First-Out)** structure that tracks function execution.

- When a function is called, it’s pushed onto the stack; when it finishes, it’s popped off.

```js
function greet() {
    console.log("Hello");
}
greet(); // pushed → executed → popped
```

---

### 2. Web APIs / Background APIs

Provided by the browser (or Node.js) to handle async tasks like:

- `setTimeout`, `setInterval`
- `fetch`, `XMLHttpRequest`
- DOM events

These run outside the call stack and queue their callbacks once done.

---

### 3. Task Queue (Macrotask Queue)

Holds callbacks from:

- `setTimeout`, `setInterval`
- I/O operations
- `setImmediate` (Node.js)

Executed after the current stack is empty and after microtasks.

---

### 4. Microtask Queue

Holds callbacks from:

- `Promise.then`, `catch`, `finally`
- `MutationObserver`
- `queueMicrotask`

Always executed **before** the task queue.

```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```

---

### Node.js Event Loop Phases

Node.js has more granular phases:

- **Timers Phase:** Executes `setTimeout` and `setInterval`
- **I/O Callbacks Phase:** Handles completed I/O
- **Poll Phase:** Retrieves new I/O events
- **Check Phase:** Executes `setImmediate`
- **Close Callbacks Phase:** Handles socket closures
- **Microtasks:** Run after each phase before moving on

---

## ⚠️ Common Pitfalls

- **Callback Starvation:** Microtasks can delay macrotasks indefinitely if flooded.
- **Blocking Code:** Long synchronous tasks block the loop and freeze the UI.
- **Misunderstood Timing:** `setTimeout(fn, 0)` doesn’t mean “immediate” — it waits for the stack and microtasks to clear.

---

## 🧠 Summary Flow

1. Execute synchronous code (call stack)
2. Process all microtasks (Promise callbacks)
3. Process one macrotask (e.g., setTimeout)
4. Repeat

```mermaid
flowchart TD
    A[Call Stack|Executes sync code]
    B[Microtask Queue|Promise callbacks]
    C[Macrotask Queue|setTimeout, I/O]
    D[Event Loop|Orchestrates everything]

    A --> B --> C --> D
```

---

### 🧱 Node.js Event Loop Phases

| Phase            | Description                        |
|------------------|------------------------------------|
| **Timers**       | Executes `setTimeout`, `setInterval` |
| **I/O Callbacks**| Handles completed I/O              |
| **Poll**         | Retrieves new I/O events           |
| **Check**        | Executes `setImmediate`            |
| **Close Callbacks** | Handles socket closures         |
| **Microtasks**   | Runs after each phase              |


