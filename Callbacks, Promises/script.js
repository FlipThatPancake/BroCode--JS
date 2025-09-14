


// Callback Hell

// = a situation in JS where we have multiple nested callbacks
// = makes code hard to read and maintain

// Example of Callback Hell
// setTimeout(() => {
//     console.log('1st step');
//     setTimeout(() => {
//         console.log('2nd step');
//         setTimeout(() => {
//             console.log('3rd step');
//             setTimeout(() => {
//                 console.log('4th step');
//                 setTimeout(() => {
//                     console.log('5th step');
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Avoiding Callback Hell with Named Functions

function step1() {
    console.log('1st step');
    setTimeout(step2, 1000);
}

function step2() {
    console.log('2nd step');
    setTimeout(step3, 1000);
}

function step3() {
    console.log('3rd step');
    setTimeout(step4, 1000);
}

function step4() {
    console.log('4th step');
    setTimeout(step5, 1000);
}

function step5() {
    console.log('5th step');
}

setTimeout(step1, 1000);




// Promises

// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You DIDN'T take out the trash");
            }

        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
                  .then(value => {console.log(value); return takeOutTrash()})
                  .then(value => {console.log(value); console.log("You finished all the chores!")})
    .catch(error => console.error(error));
                  

// Notes
// 2:40
// 1) Why do we need callbacks to do these chores in order?
// I was wondering why don't we just call the functions like this..
// walkDog();
// cleanKitchen();
// takeOutTrash();
// We can't do this because the output is going to be 
// >> You take out the trash
// >> You walk the dog
// >> You clean the kitchen
// So the function that takes less time is going to be executed first.
// Since we want to make sure that each chore is going to be done after the another in order we have to use callbacks since the next function It will never be called unless the function fully executes 

// 3:10
// 2) What is Callback hell?
// is an old pattern to handle asynchronous functions
// I watched the video Callback hell , and It also answers the first question 

// 3) Why do we need a new arrow function to act as it our callback and not use the functions that we already have ?
// walkDog(cleanKitchen(takeOutTrash))
// I tried doing something like this , with the last function without a parameter since there is no next chore..It returned an error that the passed argument to walkDog is not a function ..and I checked the type by console.log(typeof cleanKitchen(takeOutTrash)) and it was undefined ..So this method only works for two chores maximum like this..  --> cleanKitchen(takeOutTrash) and the output will be following the order correctly 


// 6:33 
// 4) How can the function provide a value parameter ?

// one snippet of code that made me understand better is 
// let prom = walkDog() // returns a promise object and store in prom
// setTimeout(() => {console.log(prom)}, 3000) /*which is going to make sure that the result of the promise is not pending , logging it without the timeout will output Promise { <pending> } which is also cool */

// the output is going to be 
// >>  Promise { 'You walk the dog' }

// so we are just like passing the value to then handler like the following ..

// Promise {value}.then( value=>console.log(value))


// ( searching different sites mainly FreeCodeCamp)
// our function walkDog is returning a promise object which can have there different results ..
// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// The .then() method should be called on the promise object to handle the value or the error of the promise.
// the parameters of then receive data from the Promise
// then(successFunc, rejectFunc) returns a promise 

// If you are interested only in successful outcomes, you can just pass one argument to it.

// 7:22 
// 5) Why returning cleanKitchen and not just calling it ?
// Because we want to return what the function returns 
// so simply .. return what cleanKitchen returns 
// cleanKitchen returns a promise and we want to returns that promise 
// It just like storing the returned promise to const prom and then returning it like..
// const prom = cleanKitchen()
// return prom
// we need a promise since we are going to attach the handler then to it



