// Scheduler with concurrency limit
function schedulerWithConcurrencyLimit(tasks, limit) {
    const results = [];
    let index = 0;
    let activeCount = 0;

    return new Promise((resolve) => {
        function runNext() {
            if (index === tasks.length && activeCount === 0) {
                resolve(results);
                return;
            }

            while (activeCount < limit && index < tasks.length) {
                const currentIndex = index++;
                const task = tasks[currentIndex];
                activeCount++;
                task().then(result => {
                    results[currentIndex] = result;
                    activeCount--;
                    runNext();
                });
            }
        }
        runNext();
    });
}

// Example usage:
const createTask = (time, value) => () => new Promise(resolve => setTimeout(() => resolve(value), time));

const tasks = [
    createTask(3000, 'Task 1'),
    createTask(2000, 'Task 2'),
    createTask(1000, 'Task 3'),
    createTask(4000, 'Task 4'),
    createTask(500, 'Task 5')
];

schedulerWithConcurrencyLimit(tasks, 2).then(results => {
    console.log('All tasks completed:', results);
});

module.exports = schedulerWithConcurrencyLimit;

// Time Complexity: O(n) where n is the number of tasks
// Space Complexity: O(n) for storing results and the call stack in worst case

// Explanation:
// 1. The function `schedulerWithConcurrencyLimit` takes an array of tasks (functions returning promises) and a concurrency limit.
// 2. It maintains the number of active tasks and starts new tasks as long as the limit is not reached.
// 3. When a task completes, it decrements the active count and attempts to start more tasks.
// 4. The process continues until all tasks are completed, at which point the results are resolved.

// other way:
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }
  add(task) {
    return new Promise(resolve => {
      const run = () => {
        this.running++;
        task().then(resolve).finally(() => {
          this.running--;
          if (this.queue.length) this.queue.shift()();
        });
      };
      if (this.running < this.limit) run();
      else this.queue.push(run);
    });
  }
}
// Example usage:
const scheduler = new Scheduler(2);
const tasks2 = [
  createTask(3000, 'Task 1'),
  createTask(2000, 'Task 2'),
  createTask(1000, 'Task 3'),
  createTask(4000, 'Task 4'),
  createTask(500, 'Task 5')
];
Promise.all(tasks2.map(task => scheduler.add(task))).then(results => {
  console.log('All tasks completed (class):', results);
});

module.exports = { schedulerWithConcurrencyLimit, Scheduler };

// Time Complexity: O(n) where n is the number of tasks
// Space Complexity: O(n) for storing results and the queue in worst case