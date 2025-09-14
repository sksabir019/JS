/**
 * Different types of promise APIs available in JavaScript
 * 1. Promise.all: Waits for all promises to resolve or any to reject.
 * 2. Promise.race: Returns the result of the first settled promise, whether it resolves or rejects.
 * 3. Promise.allSettled: Waits for all promises to settle, regardless of their outcome. Then returns an array of objects 
 * describing the outcome of each promise.
 * 4. Promise.any: Returns the first fulfilled promise or rejects if all fail. 
 *
 * Each of these methods serves a different purpose when dealing with multiple promises.
 * Below are examples of how to use each of these methods.
 */

// Real world example of Promise APIs in action
// Fetching data from multiple dummy APIs and processing the results

// const fetchDataFromAPI1 = () =>
//   fetch("https://jsonplaceholder.typicode.com/post/1").then((response) =>
//     response.json()
//   );

// const fetchDataFromAPI2 = () =>
//   fetch("https://jsonplaceholder.typicode.com/posts/2").then((response) =>
//     response.json()
//   );

// const fetchDataFromAPI3 = () =>
//   fetch("https://jsonplaceholder.typicode.com/posts/3").then((response) =>
//     response.json()
//   );

const fetchDataFromAPI1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/post/1")
                .then((response) => response.json())
                .then(resolve)
                .catch((err) => {
                    console.error("API1 failed to fetch data:", err);
                    reject("API1 failed to fetch data");
                });
        }, 2000);
    });

const fetchDataFromAPI2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/post/2")
                .then((response) => response.json())
                .then(resolve)
                .catch((err) => {
                    console.error("API2 failed to fetch data:", err);
                    reject("API2 failed to fetch data");
                });
        }, 4000);
    });

const fetchDataFromAPI3 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/post/3")
                .then((response) => response.json())
                .then(resolve)
                .catch((err) => {
                    console.error("API3 failed to fetch data:", err);
                    reject("API3 failed to fetch data");
                });
        }, 6000);
    });

// Using Promise.all to wait for all API calls to complete
Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2(), fetchDataFromAPI3()])
  .then((results) => {
    console.log("Promise.all: All API data:", results);
  })
  .catch((error) => {
    console.error("Error in one of the API calls:", error);
  });

// Using Promise.race to get the fastest response
Promise.race([fetchDataFromAPI1(), fetchDataFromAPI2(), fetchDataFromAPI3()])
  .then((result) => {
    console.log("Promise.race: Fastest API response:", result);
  })
  .catch((error) => {
    console.error("Error in one of the API calls:", error);
  });

// Using Promise.allSettled to get the status of all API calls
Promise.allSettled([
  fetchDataFromAPI1(),
  fetchDataFromAPI2(),
  fetchDataFromAPI3(),
]).then((results) => {
  console.log("Promise.allSettled: API results:", results);
});

// Using Promise.any to get the first successful response
Promise.any([fetchDataFromAPI1(), fetchDataFromAPI2(), fetchDataFromAPI3()])
  .then((result) => {
    console.log("Promise.any: First successful API response:", result);
  })
  .catch((error) => {
    console.error("All API calls failed:", error);
  });

/**
 * In this example:
 * 1. task is a function that returns a promise which resolves after a delay and logs a message.
 * 2. We chain multiple calls to task using .then(), ensuring that each task starts only after the previous one has completed.
 * 3. Finally, we log a message indicating that all tasks have been completed.
 *
 * This pattern is useful for executing a series of asynchronous operations in a specific order.
 */
