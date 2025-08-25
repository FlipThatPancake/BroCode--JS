


// SORT
// sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical. Lexicographic = (alphabet + numbers + symbols) as strings

let numbers995 = [1, 10, 2, 9, 3, 8, 4, 8, 6]

numbers995.sort()
// Output: [1, 10, 2, 3, 4, 6, 8, 8, 9] Why? Because it sorts as strings, so 1 comes before 2, but 10 comes after 1 because the second character (0) comes after nothing.

numbers995.sort((a, b) => a - b) // Ascending order
// Output: [1, 2, 3, 4, 6, 8, 8, 9, 10] Why? Because it sorts numbers in ascending


const people1 = [
    { name: 'Spongebob', age: 30, gpa: 3.0 },
    { name: 'Patrick', age: 35, gpa: 2.5 },
    { name: 'Squidward', age: 25, gpa: 3.5 },
    { name: 'Mr. Krabs', age: 40, gpa: 1.5 },
    { name: 'Sandy', age: 28, gpa: 3.8 },
]

people1.sort((a, b) => a.age - b.age) // Sorts people by age in ascending order

people1.sort((a, b) => a.name.localeCompare(b.name)) // Sorts people by name in alphabetical order)



// SHUFFLING AN ARRAY with FISHER-YATES ALGORITHM
// Fisher-Yates algorithm = an algorithm for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence.
// it's suggested to use this algorithm instead of sort(() => Math.random() - 0.5) because that method is not truly random and can lead to biased results.

const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

shuffle(cards)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]] // swap elements at indices i and j
    }
    return array
}



// DATE OBJECTS

// date objects = objects that represent a single moment in time in a platform-independent format. Date objects contain a number that represents milliseconds since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time).

// Date(year, month, day, hours, minutes, seconds, milliseconds)


let date1 = new Date() // current date and time

let date2 = new Date('December 17, 1995 03:24:00') // specific date and time


let date3 = new Date(1995, 11, 17, 3, 24, 0) // specific date and time (month is 0-indexed, so 11 = December)


let date4 = new Date(1995, 11, 17) // specific date (month is 0-indexed, so 11 = December)

// Time since Epic Day (January 1, 1970)
let date5 = new Date(819170640000) 

// Pass a string representation of a date to the Date constructor
const date6 = new Date(`2024-01-02T12:00:00Z`) // ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
// Output: Tue Jan 02 2024 07:00:00 GMT-05000 (Eastern Standard Time) (if you're in EST timezone)
// Note: The 'Z' at the end indicates UTC time. Without it, the time is considered local time.



// SETTING DATE AND TIME COMPONENTS

date1.setFullYear(2023) // sets the year to 2023
date1.setMonth(0) // sets the month to January (0-indexed, so 0 = January, 11 = December)
date1.setDate(1) // sets the day of the month to 1
date1.setHours(0) // sets the hour to



// GETTING DATE AND TIME COMPONENTS
// getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getDay()

let year = date1.getFullYear() // returns the year (4 digits for 4-digit years)
let month = date1.getMonth() // returns the month (0-11, 0 = January, 11 = December)
let day = date1.getDate() // returns the day of the month (1-31)
let hours = date1.getHours() // returns the hour (0-23)
let minutes = date1.getMinutes() // returns the minute (0-59)
let seconds = date1.getSeconds() // returns the second (0-59)
let milliseconds = date1.getMilliseconds() // returns the millisecond (0-999)
let dayOfWeek = date1.getDay() // returns the day of the week (0-6, 0 = Sunday, 6 = Saturday)


// COMPARING DATES
// You can compare date objects using comparison operators (>, <, >=, <=, ===, !==)

let dateA = new Date('2023-01-01')
let dateB = new Date('2024-01-01')
console.log(dateA < dateB) // true
console.log(dateA > dateB) // false
console.log(dateA === dateB) // false
console.log(dateA !== dateB) // true
console.log(dateA <= dateB) // true
console.log(dateA >= dateB) // false


// CLOSURES

// closure = a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created whenever a function is created, at function creation time.


// Example 1
function outerFunction() {
    let outerVariable = 'I am from the outer function'

    function innerFunction() {
        console.log(outerVariable) // innerFunction has access to outerVariable
    }

    return innerFunction
}

const myInnerFunction = outerFunction()
myInnerFunction() // Output: I am from the outer function

// Example 2
function makeCounter() {
    let count = 0 // count is a private variable

    function increment() {
        count++
        return count // inner function has access to count
    }

    function getCount() {
        return count // inner function has access to count
    }
    
}

const counter = makeCounter()
console.log(counter.increment()) // Output: 1
console.log(counter.increment()) // Output: 2

console.log(counter.getCount()) // Output: 2
console.log(counter.count) // Output: undefined (count is not accessible from outside)



// SETTIMEOUT() & CLEARTIMEOUT()
// setTimeout() = method that calls a function or evaluates an expression after a specified number of milliseconds.
// clearTimeout() = method that cancels a timeout previously established by calling setTimeout().


// Example 1

function sayHello() {
    console.log('Hello, world!')
}

setTimeout(sayHello, 2000) // calls sayHello after 2 seconds (2000 milliseconds)


// Example 2 - using an anonymous function
const timeoutId = setTimeout(() => {
    window.alert('This message is shown after 3 seconds')
}, 3000) // calls the anonymous function after 3 seconds (3000 milliseconds)

clearTimeout(timeoutId) // cancels the timeout before it executes



// TIME

// console.time() = method that starts a timer you can use to track how long an operation takes. Call console.timeEnd() with the same label to stop the timer and log the elapsed time.
