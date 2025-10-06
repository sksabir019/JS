### Explain the event loop and how it handles asynchronous operations

The **event loop** is a core concept in JavaScript that enables non-blocking, asynchronous operations, even though JavaScript itself is single-threaded. It works by continuously monitoring the **call stack** and the **message queue**:

- When the call stack is empty, the event loop takes the first message from the queue and pushes its associated callback onto the stack for execution.
- Asynchronous operations (like `setTimeout`, Promises, or I/O tasks) are managed by the browser or Node.js environment. Once these operations complete, their callbacks are placed in the message queue.
- This mechanism allows JavaScript to handle tasks such as server requests or file reads without freezing the main thread, ensuring a responsive user experience.

In summary, the event loop is essential for managing asynchronous code execution, allowing JavaScript applications to remain performant and responsive by efficiently handling multiple operations concurrently.

### What are the differences between == and ===? When would you use one over the other?

The 

