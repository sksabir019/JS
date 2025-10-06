// Promise.all Polyfill
if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let completed = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value;
            completed += 1;
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });

      if (promises.length === 0) {
        resolve(results);
      }
    });
    };
}

Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
    let results = [], completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        if (++completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
};


// Promise.race Polyfill
if (!Promise.race) {
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        Promise.resolve(promise).then(resolve).catch(reject);
      });
    });
  };
}

Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};

module.exports = { Promise }; // Exporting the modified Promise object

// Time Complexity: O(n) for both Promise.all and Promise.race
// Space Complexity: O(n) for Promise.all, O(1) for Promise.race

// Promise.allSettled Polyfill
if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return new Promise((resolve) => {
      let results = [];
      let completed = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = { status: 'fulfilled', value };
          })
          .catch((reason) => {  
            results[index] = { status: 'rejected', reason };
          })
          .finally(() => {
            completed += 1;
            if (completed === promises.length) {
              resolve(results);
            }
          });
      });
    });
  };
}

Promise.myAllSettled = function(promises) {
  return new Promise((resolve) => {
    let results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = { status: 'fulfilled', value: val };
      }).catch(err => {
        results[i] = { status: 'rejected', reason: err };
      }).finally(() => {
        completed += 1;
        if (completed === promises.length) resolve(results);
      });
    });
  });
};

module.exports = { Promise }; // Exporting the modified Promise object
