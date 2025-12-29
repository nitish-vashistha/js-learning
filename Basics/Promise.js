// Basic Promise Example

let myPromise = new Promise((resolve, reject) => {
    let condition = false; // Change to true to test resolve

    setTimeout(() => {
        if (condition) {
            resolve("Promise fulfilled!");
        } else {
            reject("Promise rejected!");
        }
    },500);
});
const promise1 = new Promise(resolve => setTimeout(() => resolve(3), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('42'), 3000));

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() =>console.log("Promise execution completed."));


// Promise states
    // A promise is in one of three different states: 
        // pending - The initial state of a promise. 
        // fulfilled - The state of a promise representing a successful operation. 
        // rejected - The state of a promise representing a failed operation.


// Chaining
    // Promises can be chained using .then() to handle successive asynchronous operations.

    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    })
        .then(result => {
            console.log(result); // 1
            return result * 2;
        })
        .then(result => {
            console.log(result); // 2
            return result * 2;
        })
        .then(result => {
            console.log(result); // 4
        })
        .catch(error => console.log(error));


// Error handling
// Promises provide a way to handle errors using .catch().


// Promise.all
    // Promise.all takes an array of promises 
    // Return resultant array if all promises are resolved
    // Rejects if any promise rejects
    
    Promise.all([promise1, promise2, promise3, myPromise])
        .then(values => console.log(values)) // [3, "foo", 42]
        .catch(error => console.log(error));

// Promise.allSettled
    // Promise.allSettled takes an array of promises
    // Returns array of objects describing outcome of each promise
    
    Promise.allSettled([promise1, promise2, promise3, myPromise])
        .then(results => console.log(results))
        .catch(error => console.log(error));

// Promise.race
    // Promise.race takes an array of promises
    // Returns the result of the first settled promise

    Promise.race([promise1, promise2, promise3, myPromise])
        .then(result => console.log(result))
        .catch(error => console.log(error));

// Promise.any
    // Promise.any takes an array of promises
    // Returns the result of the first fulfilled promise
    // Rejects if all promises are rejected

    Promise.any([promise1, promise2, promise3, myPromise])
        .then(result => console.log(result)) // 'Success'
        .catch(error => console.log(error));
