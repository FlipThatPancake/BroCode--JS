// CONSOLE

console.log(`Hello!`);

// window.alert(`I like pizza.`);

document.getElementById(`myH1`).textContent = `Hello World!`;
document.getElementById(`myP1`).textContent = `This is a paragraph.`;


// This is a comments

/* This is a multi-line comment
    It can span multiple lines
*/

// VARIABLES
let x;
x = 5;

// or

let y = 5;

let firstName = "Bro";

console.log(typeof x); // Output: number
console.log(typeof firstName); // Output: string
console.log(`Your name is ${firstName}.`);
console.log(`You are ${x} years old.`);
console.log(`The price is $${y} dollars.`);

document.getElementById(`myH1`).textContent = `Hello ${firstName}!`;

let students = 30;

students = students + 1;

students += 1; 

console.log(`There are ${students} students in the class.`);


// INPUT
// let userName = prompt(`What is your name?`);
// console.log(`Hello ${userName}!`);

document.getElementById(`myInput`).addEventListener(`input`, function() {
    let inputValue = document.getElementById(`myInput`).value;
    document.getElementById(`myP1`).textContent = `You typed: ${inputValue}`;
    console.log(`You typed: ${inputValue}`);
});

document.getElementById(`myButton`).onclick = function() {
    let inputValue = document.getElementById(`myInput`).value;
    console.log(`Button clicked! You typed: ${inputValue}`);
}
    

// STRING OPERATIONS


// Type conversion

let numString = "123";
let num = Number(numString); // Convert string to number
console.log(num); // Output: 123

let x2 = "pizza";
let y2 = "burger";
let z2 = "fries";

x2 = Number(x2); // Convert string to number
y2 = String(y2); // Convert string to number
z2 = Boolean(z2); // Convert string to number

console.log(x2); // Output: NaN (Not a Number)
console.log(y2); // Output: "burger"
console.log(z2); // Output: true (non-empty string is truthy)


// USING CONSTANTS
// Calculating circumference of a circle

const PI = 3.14159; // Using const for a constant value; use capitalize name of constants, but only numbers, not strings
let pi = PI; // Assigning the constant value to a variable
let radius;
let circumference;

radius = 5;
circumference = 2 * pi * radius;
console.log(`The circumference of the circle with radius ${radius} is ${circumference}.`);


document.getElementById(`calculateButton`).addEventListener(`click`, function () {
    let radius = parseFloat(document.getElementById(`radiusInput`).value);
    if (isNaN(radius) || radius <= 0) {
        document.getElementById(`circumferenceOutput`).textContent = `Please enter a valid radius.`;
    } else {
        let circumference = PI * 2 * radius;
        document.getElementById(`circumferenceOutput`).textContent = `The circumference of the circle with radius ${radius} is ${circumference}.`;
        console.log(`The circumference of the circle with radius ${radius} is ${circumference}.`);
    }
});


// COUNTER PROGRAM

const decreaseBtn = document.getElementById(`decrementButton`);
const increaseBtn = document.getElementById(`incrementButton`);
const resetBtn = document.getElementById(`resetButton`);
const countLabel = document.getElementById(`countLabel`);

let count = 0;

increaseBtn.onclick = function() {
    count++; // Increment the count by 1
    countLabel.textContent = count; 
}

decreaseBtn.onclick = function() {
    count--; // Decrement the count by 1
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0; // Reset the count to 0
    countLabel.textContent = count;
}

// MATH - bult-in object that provides mathematical constants and functions

console.log(Math.PI); // Output: 3.141592653589793 (value of PI)
console.log(Math.sqrt(16)); // Output: 4 (square root of 16)
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.random()); // Output: A random number between 0 and 1
console.log(Math.floor(4.7)); // Output: 4 (rounds down to the nearest integer)
console.log(Math.ceil(4.1)); // Output: 5 (rounds up to the nearest integer)
console.log(Math.round(4.5)); // Output: 5 (rounds to the nearest integer)
console.log(Math.max(1, 5, 3, 9)); // Output: 9 (maximum value from the list)
console.log(Math.min(1, 5, 3, 9)); // Output: 1 (minimum value from the list)
console.log(Math.abs(-10)); // Output: 10 (absolute value of -10)
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees)
console.log(Math.cos(0)); // Output: 1 (cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tangent of 45 degrees)


// RANDOM NUMBER GENERATION


let randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 0 and 100 (exclusive 100)
console.log(`random number is: ${randomNum}`); // Output: A random number between 0 and 99

let randomNumRange = Math.floor(Math.random() * (50 - 10 + 1)) + 10; // Generate a random number between 10 and 50 (inclusive)
console.log(`random number in range 10-50 is: ${randomNumRange}`);


// ROLL THE DICE

const rollButton = document.getElementById(`rollbtn`);
const diceResult = document.getElementById(`diceResult`);
const min= 1;
const max = 6;
let diceRoll;

rollButton.onclick = function () {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    diceResult.textContent = `You rolled a ${randomNum}.`;
    console.log(`You rolled a ${randomNum}.`);
};



// IF STATEMENTS

let ageif = 20;

if (ageif >= 18) {
    console.log(`You are an adult.`);
} else if (ageif >= 18) {
    console.log(`You are a kid.`);
}


// CHECKED STATE (PAYMENT) 

const myCheckBox = document.getElementById(`myCheckbox`);
const visaBtn = document.getElementById(`visaBtn`);
const mastercardBtn = document.getElementById(`mastercardButton`);
const paypalBtn = document.getElementById(`paypalBtn`);
const submitBtn = document.getElementById(`submitBtn`);
const submitResult = document.getElementById(`submitResult`);
const paymentResult = document.getElementById(`paymentResult`);

submitBtn.onclick = function () {
    
    if (myCheckBox.checked) {
        submitResult.textContent = `You are subscribed`;
    } else {
        submitResult.textContent = `You are not subscribed`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = `You are paying with Mastercard`;
    } 
    else if (paypalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    } 
    else {
        paymentResult.textContent = `Please select a payment method.`;
    }
};


// TERNARY OPERATOR
// ternary operator = a shorthand way to write an if-else statement; it takes three operands: a condition, a value if true, and a value if false

let ageTernary = 20;
console.log(ageTernary >= 18 ? "Ternary: You are an adult." : "Ternary: You are a kid.");

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 0.1 : 0; // 10% discount if purchase amount is greater than $100, otherwise no discount
let finalPrice = purchaseAmount - (purchaseAmount * discount);
console.log(`Ternary: Final price after discount: $${finalPrice}`); // Output: "Final price after discount: $112.5"


// SWITCH STATEMENTS

let day = 3; // Example day of the week (1 = Monday, 2 = Tuesday, ..., 7 = Sunday)
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = `${day} is not a valid day of the week.`;
        break;
}
console.log(`Switches: Today is ${dayName}.`); // Output: "Today is Wednesday."


// STRING METHODS

// String concatenation
let str1 = "Hello";
let str2 = "World";
let combined = str1 + " " + str2; // Concatenate strings with a space
console.log(combined); // Output: "Hello World"

// String interpolation
let username = "Bro";
let age = 20;
let message = `My name is ${username} and I am ${age} years old.`; // Template literal
console.log(message); // Output: "My name is Bro and I am 20 years old."

// String Case Conversion
let text = "Hello, World!";
console.log(text.toUpperCase()); // Output: "HELLO, WORLD!" (convert to uppercase)
console.log(text.toLowerCase()); // Output: "hello, world!" (convert to lowercase)

// String splitting
let csv = "apple,banana,orange";
let fruits = csv.split(","); // Split the string by comma
console.log(fruits); // Output: ["apple", "banana", "orange"]

// String joining
let joinedFruits = fruits.join(" - "); // Join the array elements with " - "
console.log(joinedFruits); // Output: "apple - banana - orange"

// String trimming
let whitespace = "   Hello, World!   ";
console.log(whitespace.trim()); // Output: "Hello, World!" (remove leading and trailing whitespace)

// String trimming with specific characters
let specialChars = "###Hello, World!###";
console.log(specialChars.replace(/^#+|#+$/g, "")); // Output: "Hello, World!" (remove leading and trailing # characters)

// String searching
let searchText = "Hello, World!";
console.log(searchText.includes("World")); // Output: true (check if the substring "World" exists in the string)
console.log(searchText.startsWith("Hello")); // Output: true (check if the string starts with "Hello")
console.log(searchText.endsWith("!")); // Output: true (check if the string ends with "!")

// String comparison
let strA = "apple";
let strB = "banana";
console.log(strA === strB); // Output: false (strict equality comparison)
console.log(strA < strB); // Output: true (lexicographical comparison)

// String escaping
let escapedString = "He said, \"Hello, World!\""; // Escape double quotes
console.log(escapedString); // Output: He said, "Hello, World!"

// String length
let longString = "This is a long string that contains multiple words.";
console.log(longString.length); // Output: 50 (length of the string)

// String comparison with locale
let str1Locale = "apple";
let str2Locale = "Banana";
console.log(str1Locale.localeCompare(str2Locale)); // Output: 1 (str1Locale is greater than str2Locale in lexicographical order)

// String padding
let paddedString = "5".padStart(3, "0").padEnd(1, "9"); // Pad the string with zeros to a total length of 3
console.log(paddedString); // Output: "005"

// String conversion to number
let numericString = "123.45";
let number = parseFloat(numericString); // Convert string to number
console.log(number); // Output: 123.45

// String conversion to boolean
let truthyString = "true";
let falsyString = "false";
let isTruthy = truthyString === "true"; // Convert string to boolean
let isFalsy = falsyString === "true"; // Convert string to boolean
console.log(isTruthy); // Output: true
console.log(isFalsy); // Output: false

// String conversion to date
let dateString = "2023-10-01";
let date = new Date(dateString); // Convert string to date
console.log(date); // Output: Sun Oct 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

// String conversion to JSON
let jsonString = '{"name": "Bro", "age": 20}';
let jsonObject = JSON.parse(jsonString); // Convert JSON string to object
console.log(jsonObject); // Output: { name: 'Bro', age: 20 }

// String conversion to XML
let xmlString = `<person><name>Bro</name><age>20</age></person>`;
let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlString, "text/xml"); // Convert XML string to XML document
console.log(xmlDoc.getElementsByTagName("name")[0].textContent); // Output: "Bro"

// String conversion to base64
let base64String = btoa("Hello, World!"); // Convert string to base64
console.log(base64String); // Output: "SGVsbG8sIFdvcmxkIQ=="

// String conversion from base64
let decodedString = atob(base64String); // Convert base64 back to string
console.log(decodedString); // Output: "Hello, World!"

// String conversion to hexadecimal
let hexString = "Hello, World!".split("").map(char => char.charCodeAt(0).toString(16)).join(""); // Convert string to hexadecimal
console.log(hexString); // Output: "48656c6c6f2c20576f726c6421

// String conversion from hexadecimal
let decodedHex = hexString.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join(""); // Convert hexadecimal back to string
console.log(decodedHex); // Output: "Hello, World!"

// String conversion to binary
let binaryString = "Hello, World!".split("").map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(" "); // Convert string to binary
console.log(binaryString); // Output: "01001000 01100101 01101100 01101100 01101111 00101100 0010000001010111 01101111 01110010 01101100 01100100 00100001"

// String conversion from binary
let decodedBinary = binaryString.split(" ").map(byte => String.fromCharCode(parseInt(byte, 2))).join(""); // Convert binary back to string
console.log(decodedBinary); // Output: "Hello, World!"

// String conversion to URL
let urlString = "https://example.com/path?query=123";
let url = new URL(urlString); // Convert string to URL object
console.log(url.hostname); // Output: "example.com" (get the hostname from the URL)

// String conversion to URL-encoded format
let urlEncodedString = encodeURIComponent("Hello, World!"); // Convert string to URL-encoded format
console.log(urlEncodedString); // Output: "Hello%2C%20World%21"

// String conversion from URL-encoded format
let decodedUrlEncodedString = decodeURIComponent(urlEncodedString); // Convert URL-encoded format back to string
console.log(decodedUrlEncodedString); // Output: "Hello, World!"

// String replacing
let replacedString = "Hello, World!".replace("World", "JavaScript"); // Replace "World" with "JavaScript"
console.log(replacedString); // Output: "Hello, JavaScript!"

// String repeating
let repeatedString = "Hello! ".repeat(3); // Repeat the string 3 times
console.log(repeatedString); // Output: "Hello! Hello! Hello! "

// String slicing
let slicedString = "Hello, World!".slice(0, 5); // Extract a substring from index 0 to 5
console.log(slicedString); // Output: "Hello

// String index seraching
let textIdx = "Hello, World!";
console.log(textIdx.indexOf("World")); // Output: 7 (index of the substring "World")

// String last index searching
console.log(textIdx.lastIndexOf("o")); // Output: 4 (last index of the character "o")

// String character accessing
console.log(textIdx.charAt(0)); // Output: "H" (character at index 0)
console.log(textIdx[1]); // Output: "e" (character at index 1)

// String slicing with search
let sentenceSlice = "This is a sentence.";
let slicedAtSpace = sentenceSlice.split(" ").slice(0, 3).join(" "); // Extract the first 3 words
console.log(slicedAtSpace); // Output: "This is a"

let sliceAtSpace2 = "My Name";
let slicedAtSpace2 = sliceAtSpace2.slice(sliceAtSpace2.indexOf(" ") + 1); // Extract the first word
console.log(slicedAtSpace2); //  Output: "Name"

let sliceAtSpace3 = "My Name";
let slicedAtSpace3 = sliceAtSpace3.slice(0, sliceAtSpace3.indexOf(" ")); // Extract the first word
console.log(slicedAtSpace3); //  Output: "My"

const emailSlice = "Bro@gmail.com";

let usernameSlice = emailSlice.slice(0, emailSlice.indexOf("@")); // Extract the username from the email
let extension = emailSlice.slice(emailSlice.indexOf("@") + 1); // Extract the extension from the email

console.log(`Username: ${usernameSlice}`); // Output: "Username: Bro"
console.log(`Extension: ${extension}`); // Output: "Extension: gmail.com"


// METHOD CHAINING

let finaltextchain = "Hello, World!   "
  .trim()
  .replace(/^./, c => c.toUpperCase())
  .replace(/^(.)((.|\s)+)/, (match, first, rest) => first + rest.toLowerCase());

console.log(finaltextchain); // Output: "Hello, world!"



// LOGICAL OPERATORS

// AND = &&
// OR = ||
// NOT = !

// = assignment operator
// == equality operator
// === strict equality operator (checks value and type)
// != inequality operator
// !== strict inequality operator (checks value and type)

const PI2 = 3.14;

if (PI2 == "3.14") {
    console.log("This is PI");
} else {
    console.log("This is not PI");
}; // Output: "This is PI" (because == checks value only, not type)

if (PI2 === "3.14") {
    console.log("This is PI");
} else {
    console.log("This is not PI");
}; // Output: "This is not PI" (because === checks value and type, and PI2 is a number, not a string)


// FOR LOOPS

for (let i = 0; i < 2; i++) {
    console.log(`This is for loop iteration ${i + 1}.`);   
}


// FUNCTIONS

function happyBirthday(username) {
    console.log(`Happy Birthday!`);

    document.getElementById(`happyBirthdayText`).textContent = `Happy Birthday ${username}! Wishing you a wonderful day! May all your dreams come true!`;
    document.getElementById(`happyBirthdayText`).style.color = `blue`;
    document.getElementById(`happyBirthdayText`).style.fontSize = `24px`;
    document.getElementById(`happyBirthdayText`).style.fontWeight = `bold`;
    document.getElementById(`happyBirthdayText`).style.textAlign = `center`;
    document.getElementById(`happyBirthdayText`).style.marginTop = `20px`;
    document.getElementById(`happyBirthdayText`).style.padding = `10px`;
    document.getElementById(`happyBirthdayText`).style.border = `2px solid blue`;
    document.getElementById(`happyBirthdayText`).style.borderRadius = `10px`;
    document.getElementById(`happyBirthdayText`).style.backgroundColor = `lightblue`;
    document.getElementById(`happyBirthdayText`).style.boxShadow = `0 4px 8px rgba(0, 0, 0, 0.2)`;
    document.getElementById(`happyBirthdayText`).style.transition = `all 0.3s ease-in-out`;
    document.getElementById(`happyBirthdayText`).style.cursor = `pointer`;
    document.getElementById(`happyBirthdayText`).addEventListener(`click`, function() {
        alert(`Thank you for the birthday wishes!`);
    });
    document.getElementById(`happyBirthdayText`).addEventListener(`mouseover`, function() {
        document.getElementById(`happyBirthdayText`).style.backgroundColor = `lightgreen`;
    });
}

happyBirthday(`Paul`); // Call the function to execute its code


// ARRAYS

let fruitz = ["apple", "banana", "orange"];
console.log(fruitz[0]); // Output: "apple" (accessing the first element of the array)
console.log(fruitz.length); // Output: 3 (length of the array

// Adding an element to the array
fruitz.push("grape"); // Adds "grape" to the end of the array
console.log(fruitz); // Output: ["apple", "banana", "orange", "grape"]  

// Removing the last element from the array
fruitz.pop(); // Removes the last element ("grape") from the array
console.log(fruitz); // Output: ["apple", "banana", "orange"]   

// Adding an element to the beginning of the array
fruitz.unshift("kiwi"); // Adds "kiwi" to the beginning of the array
console.log(fruitz); // Output: ["kiwi", "apple", "banana", "orange"]

// Removing the first element from the array
fruitz.shift(); // Removes the first element ("kiwi") from the array
console.log(fruitz); // Output: ["apple", "banana", "orange"]   

// Finding the index of an element in the array
let index = fruitz.indexOf("banana"); // Finds the index of "banana" in the array
console.log(index); // Output: 1 (index of "banana")

// Checking if an element exists in the array
let exists = fruitz.includes("orange"); // Checks if "orange" exists in the array
console.log(exists); // Output: true (because "orange" is in the array)

// Reversing the order of elements in the array
fruitz.reverse(); // Reverses the order of elements in the array
console.log(fruitz); // Output: ["orange", "banana", "apple"]

// Sorting the elements in the array
fruitz.sort(); // Sorts the elements in alphabetical order
console.log(fruitz); // Output: ["apple", "banana", "orange"]

for (i = fruitz.length - 1; i >= 0; i--) {
    HTMLFormControlsCollection.log(`Fruit ${i + 1}: ${fruitz[i]}`); // Output: "Fruit 1: apple", "Fruit 2: ban ana", "Fruit 3: orange"
}

for (let i of fruitz) {
    console.log(`Fruit: ${fruit}`); // Output: "Fruit: apple", "Fruit: banana", "Fruit: orange"
}


// 2D ARRAYS
// Tic tac toe example

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix[0][0] = `x`; // Change the first element of the first row to "x"
matrix[1][1] = `o`; // Change the second element of the second row to "o"
matrix[2][2] = `x`; // Change the third element of the third row

for (let row of matrix) {
    const rowString = row.join(` `);
    console.log(rowString); // Output: "1 2 3", "4 5 6", "7 8 9"
}


// SPREAD OPERATOR

// The spread operator (...) allows you to expand an iterable (like an array) into individual elements.

// Separating string into characters using the spread operator
let str = "Hello";
let charArray = [...str]; // Convert string to an array of characters using the spread operator
console.log(charArray); // Output: ["H", "e", "l", "l", "o"]
charArray.join(`-`); // Join the characters with a hyphen
console.log(charArray.join(`-`)); // Output: "H-e-l-l-o"


// Combining two arrays using the spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2, 2, 5]; // Combine two arrays using the spread operator
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Finding the maximum value in an array using the spread operator
let maximum = Math.max(...combinedArr); // Find the maximum value in the combined array using the spread operator
console.log(maximum); // Output: 6


// REST PARAMETERS

// allows funciton to work with a variable number of arguments by bundling them into an array

function openFridge(...foods) {
    console.log(...foods); // Log all the foods passed as arguments
}

function getFood(...foods) {
    return foods;
}

const food1 = "chicken breast";
const food2 = "broccoli";
const food3 = "rice";

// Using the rest parameter to pass multiple arguments to the function

openFridge(food1, food2, food3); // Call the function with multiple arguments
// Output: "chicken breast broccoli rice" (all foods are logged)

const foods = getFood(food1, food2, food3); // Call the function and store the result in an array
console.log(foods); // Output: ["chicken breast", "broccoli", "rice"] (the foods are stored in an array)


// Combine multiple strings into a single string

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num; // Sum all the numbers passed as arguments
    }
    return total; // Return the total sum
}

let result = sum(1, 2, 3, 4, 5); // Call the function with multiple arguments
console.log(result); // Output: 15 (the sum of all the numbers)


// Combine multiple strings into a single string with spaces

function combineStrings(...strings) {
    return strings.join(" "); // Combine all the strings into a single string with spaces
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName); // Output: "Mr. Spongebob Squarepants III" (the strings are combined into a single string with spaces)




// CALLBACKS

// callback = a funciotn that is passed as an argument to another function and is executed after the completion of that function

// Example 1 of callback

hello(goodbye); // executes goodbye after hello (in place of "callback()")

function hello(callback) {
    console.log("Hello!");
    callback(); // Call the callback function after logging "Hello!"
}

function goodbye() {
    console.log("Goodbye!");
}

// Example 2 of callback

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}




// FOREACH
// foreach = a method that executes a provided function once for each array element

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display); // Call the display function for each element in the numbers array

numbers.forEach(double); // Call the double function for each element in the numbers array

function double(element, index, array) {
    array[index] = element * 2; // Double each element in the array
}

function display(number) {
    console.log(`Number: ${number}`); // Log each number in the array
}

let fruits2 = ["apple", "banana", "orange"];

fruits2.forEach(upperCase); // Call the upperCase function for each element in the fruits2 array

editFruits2(displayFruits);

function editFruits2(callback) {
    fruits2.forEach(upperCase);
    callback(fruits2); 
}

function displayFruits() {
    console.log('Fruits after editing:');
    fruits2.forEach(function(fruit) {
        console.log(fruit); // Log each fruit in the edited fruits2 array
    }
    );
}

function upperCase(element, index, array) {
    array[index] = element.toUpperCase(); // Convert each element to uppercase
}

fruits2.forEach(capitalize);

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}



// MAP
// .map() = accepts a callback and applies that function to each element of an array, then returns a new array

const numbers2 = [1, 2, 3, 4, 5];
const cubes = numbers.map(cube);

console.log(cubes); // Output: [1, 8, 27, 64, 125] (cubes of each number in the array)

function cube(element) {
    return Math.pow(element, 3);
}

const dates = ["2023-10-01", "2023-10-02", "2023-10-03"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}



// FILTER
// .filter() = creates a new array with all elements that pass the test implemented by the provided function

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers3.filter(isEven);

console.log(evenNumbers);

function isEven(element) {
    return element % 2 === 0;
}


// REDUCE
// .reduce() = reduce the elements of an array to a single value by applying a function to each element in the array


// Example 1
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`) // Output: "$105.00" (total price of all items in the array)

function sum(accumulator, element) {
    return accumulator + element;
}

// Example 2
const grades = [75, 50, 90, 70, 65, 95];

const maximumGrade = grades.reduce(getMax);

console.log(maximumGrade); // Output: 

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}


// FUNCTION EXPRESSIONS
// funciton expressions = a way to define functions as values or variable
// NOT function declarations

// Example 1

function hi() { // declaration
    console.log("hi");
}

const hello = function () { // expression
    console.log("hi");
}

// Example 2

setTimeout(function () {
    console.log("Hello!");
}, 3000); // Output: execute hello after 3s


// Example 3
const nums53 = [1, 2, 3, 4, 5];
const squres53 = nums53.map(function (element) {
    return Math.pow(element, 2);
});

console.log(squares53);


// ARROW
// arrow func = a concise way to write function expressions good for simple functions that you use only once (parameters) => some cod

// Example 1
const hello = (name) => console.log(`${name} function!`);

hello("Arrow");

// Example 2
setTimeout( () => console.log("Delayed arrow function!"), 3000 );

// Example 3
const numbersArrow = [1, 2, 3, 4, 5];

const squaress = numbersArrow.map((element) => Math.pow(element, 2));

console.log(squaress);


// OBJECTS

//object = a collection of related properties and/or methods. Can represent real world objects.
// object = {key:value, function()}

const personObject = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log("HI! I'm Spongebob")}
}

console.log(personObject.firstName);


// THIS

// this = reference to the object where THIS is used (the object depends on the immediate context)
// person.name = this.name

// ATTENTION: this. does not work in () => functions!

const personObject2 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {console.log(`Hi, I am ${this.name}`)}
}

personObject2.sayHello();


// CONSTRUCTOR

// constructor = special method for defining the properties and methods of objects

// three random const objects
// ...existing code...

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("Toyota", "Camry", 2020, "Blue");
const car2 = new Car("Honda", "Civic", 2019, "Red");


// CLASS

// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional construction functions, ex. static keywords, encapsulation, iheritance, polymorhism.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.07; // 7% sales tax

const product1 = new Product("Laptop", 999.99);
const product2 = new Product("Smartphone", 499.99);

const productTotal = product1.calculateTotal(salesTax);



// STATIC
// static = a keyword that defines properties of methods that belong to a class itself rather than the objects created from that class (class owns anytihng static, not the objects)

// Example 1

class MathUtil {
    static PI = 3.14159;

    static getCircumference(radius) {
        return radius * this.PI * 2;
    }
}

console.log(MathUtil.PI); // Output: 3.14159 (accessing the static property directly from the class)

console.log(MathUtil.getCircumference(5)); // Output: 10 (calling the static method directly from the class)

// Example 2

class User {
    static userCount = 0

    construtor(username) {
        this.username = username;
        User.userCount++;
    }

    // Non-static method
    sayHello() {
        console.log(`Hello, ${this.username}`);
    }

    // Static method
    static getUserCount() {
        console.log(`Total users: $(User.userCount)`);
    }
}

const user1 = new User("Bro");
const user2 = new User("Dude");

user1.sayHello(); // Output: "Hello, Bro" (calling the non-static method from the object)

console.log(User.userCount); // Output: 2 (accessing the static property directly from the class)

User.getUserCount(); // Output: "Total users: 2" (calling the static method directly from the class)


// INHERITANCE
// inheritance = a way to create a new class based on an existing class, inheriting its properties and methods. This is useful, because Animal can serve as a blueprint for species classes, each of which can have their unique methods


// Example 1

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";

    run() {
        console.log(`This ${this.name} is running.`);
    }
}

class Fish extends Animal {
    name = "Fish";

    swim() {
        console.log(`This ${this.name} is swimming.`);
    }
}

const rabbit1 = new Rabbit();
const fish = new Fish();

console.log(rabbit1.alive); // Output: true (inherited property from Animal class)
rabbit1.eat(); // Output: "This Rabbit is eating." (inherited method from Animal class)


// SUPER
// super = keyword is used in class to call the constructor or access the properties and methods of a parent (superclass)
// this = current class (subclass)
// super = parent class (superclass)


// Example 1

class Animal {
    constructor() {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} can move.`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); // Call the constructor of the parent class (Animal)
        // Initialize properties specific to Rabbit
        this.runSpeed = runSpeed;
    }

    run () {
        console.log(`${this.name} is running at ${this.runSpeed} km/h.`);
        super.move(this.runSpeed); // Call the move method from the parent class (Animal)
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age); // Call the constructor of the parent class (Animal)
        // Initialize properties specific to Fish
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} is swimming at ${this.swimSpeed} km/h.`);
        super.move(this.swimSpeed); // Call the move method from the parent class (Animal)
    }
}

const rabbit2 = new Rabbit("Bunny", 2, 10);
const fish2 = new Fish("Goldfish", 1, 5);


// SETTERS & GETTERS

// setter = special method that makes a property readable
// getter = special method that makes a property writable

// Example 1

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth < 0) {
            console.log("Width cannot be negative.");
        
        } else {
            this._width = newWidth; // Use a private property to store the value
        }
    }

    set height(newHeight) {
        if(newHeight < 0) {
            console.log("Height cannot be negative.");
        
        } else {
            this._height = newHeight; // Use a private property to store the value
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`; // Return the private property value
    }

    get width() {
        return `${this._height.toFixed(1)}cm`; // Return the private property value
    }

    get area() {
        return `${this._width * this._height.toFixed(1)}cm`; // Calculate and return the area
    }
}

const rectangle = new Rectangle(-100000, "pizza"); // Invalid value will not be set

console.log(`Area: ${rectangle.area}`); // Output: "Area: NaN" (because width and height are not set correctly)


// Example 2

class Person {

    construtor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName; // Use a private property to store the value
        } else {
            console.log("Invalid first name.");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName; // Use a private property to store the value
        } else {
            console.log("Invalid last name.");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge; // Use a private property to store the value
        } else {
            console.log("Invalid age.");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

}

const person = new Person("John", "Doe", 30);


// DESTRUCTURING

// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way, [] = to perform array destructuring, {} to perform object dest.

// Example 1 - Swapping value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

// Example two -- swapping elements in an array

const colors = ["red", "green", "blue"];
[colors[0], colors[1]] = [colors[1], colors[0]]

// Example 3 - Extracting values from an array

const numbers4 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers4; // Extract first two elements and the rest of the array

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5] (the rest of the array)

// Example 4 - Extracting values from an object (with default values)

const personObject3 = {
    name: "Spongebob",
    age: 30,
    occupation: "Fry Cook"
};

const personObject4 = {
    name: "Patrick",
    age: 28,
};

const { name55, age55, occupation55="Unemployed" } = personObject3; // Extract properties from the object
console.log(name55); // Output: "Spongebob"
console.log(age55); // Output: 30
console.log(occupation55); // Output: "Fry Cook"

const { name56, age56, occupation56="Unemployed" } = personObject4; // Extract properties from the object
console.log(name56); // Output: "Patrick"
console.log(age56); // Output: 28
console.log(occupation56); // Output: "Unemployed" (default value since occupation is not defined in personObject4)

// Example 5 - Destructuring in function parameters

function displayPerson({ name, age, occupation = "Unemployed" }) {
    console.log(`Name: ${name}, Age: ${age}, Occupation: ${occupation}`);
}

displayPerson(personObject3); // Output: "Name: Spongebob, Age: 30, Occupation: Fry Cook"
displayPerson(personObject4); // Output: "Name: Patrick, Age: 28, Occupation: Unemployed"

// Example 6 - Nested destructuring

const user = {
    id: 1,
    name: "Spongebob",
    address: {
        street: "123 Bikini Bottom",
        city: "Bikini Bottom",
        country: "Ocean"
    }
};  

const { id, name: userName, address: { street, city, country } } = user; // Nested destructuring
console.log(id); // Output: 1
console.log(userName); // Output: "Spongebob"
console.log(street); // Output: "123 Bikini Bottom"
console.log(city); // Output: "Bikini Bottom"
console.log(country); // Output: "Ocean"

// Example 7 - Destructuring with function return values

function getCoordinates() {
    return [10, 20, 30]; // Return an array of coordinates
}

const [x5, y5, z5] = getCoordinates(); // Destructure the returned array
console.log(x5); // Output: 10
console.log(y5); // Output: 20
console.log(z5); // Output: 30


// NESTED OBJECTS

// nested objects = objects that contain other objects as properties

const userNested = {
    id: 1,
    name: "Spongebob",
    address: {
        street: "123 Bikini Bottom",
        city: "Bikini Bottom",
        country: "Ocean"
    },
    hobbies: ["Jellyfishing", "Karate", "Cooking"],
    getFullAddress: function() {    
        return `${this.address.street}, ${this.address.city}, ${this.address.country}`;
    }
};

console.log(userNested.name);
// Output: "Spongebob" (accessing the name property)

console.log(userNested.address.city);
// Output: "Bikini Bottom" (accessing the city property of the address object)

console.log(userNested.hobbies[0]);
// Output: "Jellyfishing" (accessing the first hobby in the hobbies array)

console.log(userNested.getFullAddress());
// Output: "123 Bikini Bottom, Bikini Bottom, Ocean" (calling the getFullAddress method)

for (const property in userNested.address) {
    console.log(`${property}: ${userNested.address[property]}`);
    // Output: "street: 123 Bikini Bottom", "city: Bikini Bottom", "country: Ocean"
}

// Example 2

class PersonNested {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new AddressNested(...address);
    }
}

class AddressNested {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const personNested = new PersonNested("Spongebob", 30, "123 Bikini Bottom", "Bikini Bottom", "Ocean");

const personNested2 = new PersonNested("Patrick", 28, "456 Jellyfish Fields", "Bikini Bottom", "Ocean");

console.log(personNested.name);
// Output: "Spongebob"

console.log(personNested.address.city);
// Output: "Bikini Bottom"

console.log(personNested2.address.street);
// Output: "456 Jellyfish Fields"




// ARRAYS OF OBJECTS

const fruits995 = [
    { name: "apple", color: "red", calories: 95 },
    { name: "banana", color: "yellow", calories: 105  },
    { name: "grape", color: "purple", calories: 30  }
];

for (let fruit of fruits995) {
    console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}`);
    
    // Output: "Fruit: apple, Color: red", "Fruit: banana, Color: yellow", "Fruit: grape, Color: purple"
}

// Push
fruits995.push({ name: "coconut", color: "brown", calories: 159  })

// Splice
fruits995.splice(1, 1); // Remove the second element (banana)

// forEach()
fruits995.forEach(fruit => console.log(`Fruit: ${fruit.name}`));
// Output: "Fruit: apple", "Fruit: grape", "Fruit: coconut"

// map
const fruitNames = fruits995.map(fruit => fruit.name);
console.log(fruitNames); // Output: ["apple", "grape", "coconut"]

// filter
const redFruits = fruits995.filter(fruit => fruit.color === "red");
console.log(redFruits); // Output: [{ name: "apple", color: "red" }]

// reduce
// find fruit with the highest amount of calories
const maxFruit = fruits995.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);


