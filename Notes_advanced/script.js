

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




// ERROR

// Error = an object that is created to represent a problem that occurs; occurs often with user input or establishing a connection

// errors happen due to:
// 1. User input
// 2. Network issues
// 3. File system issues
// 4. Promise rejection
// 5. Security erros

// Example 1: Using try-catch to handle an error

try {
    console.log(x)
    throw new Error("This is a custom error message");
}
catch (error) {
    console.error("An error occurred:", error.message);
}
finally {
    console.log("This will always run, regardless of an error.")
    // Cleanup code or final actions can go here
}

// Example 2 Handling division by zero error

const dividend = Number(windows.prompt("Enter a dividend:"));
const divisor = Number(windows.prompt("Enter a divisor:"));

try {
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Both dividend and divisor must be numbers.");
    }
    if (divisor === "0") {
        throw new Error("Cannot divide by zero.");
    }
    
    // Perform the division
    const result = dividend / divisor;
    console.log(`Result: ${result}`);

} catch (error) {
    console.error("An error occurred:", error.message);
}


// Example 3: Using a callback to handle an error

function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const error = new Error("Failed to fetch data");
        callback(error, null);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Data:", data);
    }
});

// Example 4: Using a promise to handle an error

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error("Failed to fetch data");
            reject(error);
        }, 1000);
    });
}

fetchDataPromise()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error.message));

// Example 5: Using async/await to handle an error

async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchDataAsync();

// Example 6: Using a custom error class

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function riskyOperation() {
    throw new CustomError("Something went wrong in the risky operation.");
}

try {
    riskyOperation();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Custom Error:", error.message);
    } else {
        console.error("An unexpected error occurred:", error.message);
    }
}



// DOM

// DOM = Document Object Model; an API that represents and interacts with HTML, XML documents; it provides a structured representation of the document as a tree of objects and defines methods by which these objects can be accessed and manipulated

// DOM Manipulation = the process of dynamically changing the structure, style, or content of a web document using JavaScript

// Example: Changing the text of an HTML element

// HTML: <div id="myDiv">Hello, World!</div>

const myDiv = document.getElementById("myDiv");
myDiv.textContent = "Hello, DOM!";

// Example: Adding a new element to the DOM

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);

// Example: Adding an event listener to a button

// HTML: <button id="myButton">Click Me</button>

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
    alert("Button was clicked!");
});

// Example: Changing the style of an element

myDiv.style.color = "blue";
myDiv.style.fontSize = "20px";

// Example: Removing an element from the DOM

// HTML: <div id="removeMe">This will be removed.</div>

const removeMe = document.getElementById("removeMe");
removeMe.parentNode.removeChild(removeMe);



// ELEMENT SELECTORS


// Common DOM Manipulation Methods:
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()
// 6. createElement()
// 7. appendChild()
// 8. removeChild()
// 9. setAttribute()
// 10. addEventListener()


// Turn class of HTMLCollection into an array

const items = document.getElementsByClassName("item");
const itemsArray = Array.from(items);
itemsArray.forEach(item => {
    console.log(item.textContent);
});

// querySelector() = returns the first element that matches a specified CSS selector(s) in the document

const element = document.querySelector(".container .item"); // Selects the first element with class "item" inside an element with class "container"

// querySelectorAll() = returns a static NodeList representing a list of the document's elements that match the specified group of selectors

const elements = document.querySelectorAll(".container .item"); // Selects all elements with class "item" inside an element with class "container" and returns a NodeList (static list)
elements.forEach(el => {
    console.log(el.textContent);
});
