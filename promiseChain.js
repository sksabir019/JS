/**
 * Promise chaining: Promise chaining in JavaScript is a powerful pattern that allows you to
 * execute asynchronous operations in sequence, passing results from one .then() to the next.
 * It’s a clean alternative to callback hell and makes your async logic easier to read, debug,
 * and maintain.
 *
 * When you return a value or another promise inside a .then() block, the next .then() receives
 * that result. This creates a chain of dependent operations.
 */

// Example of Promise chaining
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve(`Data from ${url}`);
      } else {
        reject("Invalid URL");
      }
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Processed: ${data}`);
    }, 1000);
  });
}

function displayData(data) {
  console.log(data);
}

// Using promise chaining to fetch, process, and display data
fetchData("https://api.example.com/data")
  .then((data) => {
    return processData(data); // Return a new promise
  })
  .then((processedData) => {
    displayData(processedData); // Final step
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors in the chain
  });

/**
 * In this example:
 * 1. fetchData simulates fetching data from a URL and returns a promise.
 * 2. processData takes the fetched data and processes it, returning another promise.
 * 3. displayData simply logs the processed data to the console.
 * 4. The .then() methods are chained together, allowing each step to wait for the previous one to complete.
 * 5. The .catch() at the end handles any errors that may occur in any part of the chain.
 *
 * This pattern is especially useful when you have multiple asynchronous operations that depend on each other.
 */

// Basic Example of Promise Chaining
function task(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

task("Task 1", 1000)
  .then(() => task("Task 2", 2000))
  .then(() => task("Task 3", 1000));

// Multiple chain example with one catch
new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
})
  .then((num) => {
    console.log("Step 1:", num);
    return num + 3;
  })
  .then((num) => {
    console.log("Step 2:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Step 3:", num);
    return num - 4;
  })
  .then((num) => {
    console.log("Step 4:", num);
    return `Final result is ${num}`;
  })
  .then((message) => {
    console.log("Step 5:", message);
  })
  .catch((err) => {
    console.error("Caught error:", err.message);
  });

// Multiple chain example with multiple catches:
// In JavaScript Promise chaining, you can absolutely use multiple .catch() blocks to handle different errors
// at different stages. But there’s a nuance: once an error is caught, the chain continues unless you explicitly
// rethrow or return a rejected promise.

new Promise((resolve) => {
  setTimeout(() => resolve(10), 500);
})
  .then((num) => {
    console.log("Step 1:", num);
    if (num === 10) throw new Error("Error in Step 1");
    return num + 1;
  })
  .catch((err) => {
    console.error("Caught at Step 1:", err.message);
    // Optionally rethrow to stop further execution
    throw err;
  })
  .then((num) => {
    console.log("Step 2:", num); // Won’t run if error is rethrown
    if (num > 5) throw new Error("Error in Step 2");
    return num * 2;
  })
  .catch((err) => {
    console.error("Caught at Step 2:", err.message);
    // Recover or rethrow
    return 0; // Recovery path
  })
  .then((num) => {
    console.log("Step 3:", num); // Will run with recovered value
  });

// Each .catch() handles errors from the previous .then() chain.
// If you don’t rethrow, the chain continues with the return value from .catch().
// If you do rethrow, the next .then() is skipped and the next .catch() is triggered.

// In this example, if an error occurs in Step 1, it’s caught by the first .catch(), and the chain stops there if we rethrow the error.
// If Step 1 succeeds but Step 2 fails, the second .catch() handles that error, allowing the chain to continue with a recovery value.
// This approach allows for granular error handling at different stages of your promise chain.
// However, be cautious with multiple .catch() blocks, as they can make the flow harder to follow.
// In most cases, a single .catch() at the end of the chain is sufficient and keeps the code cleaner.

// Real World Example:
createUser("azaM@example.com")
  .then((user) => {
    console.log("User created:", user.id);
    return setupTenant(user.id);
  })
  .catch((err) => {
    console.error("User creation failed:", err.message);
    throw err; // Rethrow to stop further steps
  })
  .then((tenant) => {
    console.log("Tenant setup:", tenant.name);
    return configureBilling(tenant.id);
  })
  .catch((err) => {
    console.warn("Tenant setup failed, fallback to default plan:", err.message);
    return { plan: "free-tier" }; // Recover with default
  })
  .then((billing) => {
    console.log("Billing configured:", billing.plan);
    return sendWelcomeEmail();
  })
  .catch((err) => {
    console.warn("Email failed:", err.message);
    // Log but don't block onboarding
  });
// In this real-world example, each step of the user onboarding process is handled in sequence.
// Errors are caught at each stage, allowing for specific handling and recovery strategies.
// This ensures that a failure in one step doesn’t necessarily block the entire process,
// providing a more resilient user experience.
