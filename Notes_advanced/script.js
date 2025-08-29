

// CALLBACKS  = a funciton that is passed as an argument to another function

// used to handle asynchronous operations:
// 1. Reading a File
// 2. network requests
// 3. Interacting with databases

// "Hey, when you're done, call this next."





// SYNCHRONOUS & ASYNCHRONOUS

// synchronous = tasks are completed one at a time
// asynchronous = tasks are completed independently of the main program flow


function one(callback) {
    setTimeout(
        () => {
            console.log("1")
            callback()
        }, 1000);
}

function two() {
    console.log("2")
}

one(two)  // 1, 2