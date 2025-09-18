

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
newParagraph.id = "myParagraph";
document.body.appendChild(newParagraph);

// Add a new element before an existing element
const newH1 = document.createElement("h1");
newH1.textContent = "This is h1";
newH1.id = "myH1";
const elementBefore = document.getElementById("myParagraph");
document.body.insertBefore(newH1, newParagraph);

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



// DOM NAVIGATION

// DOM Navigation = the process of moving through the DOM tree to access and manipulate elements and nodes

// Common DOM Navigation Properties:
// 1. parentNode
// 2. childNodes
// 3. firstChild
// 4. lastChild
// 5. nextSibling
// 6. previousSibling
// 7. children
// 8. firstElementChild
// 9. lastElementChild
// 10. nextElementSibling
// 11. previousElementSibling

const list = document.getElementById("myList");

// Accessing parent node
const parent = list.parentNode;
console.log("Parent Node:", parent);
// Example output: "Parent Node: <div id="container">...</div>"

// Accessing child nodes
const children = list.childNodes; // Includes text nodes (like whitespace)
children.forEach(child => {
    console.log("Child Node:", child);
});
// Example output: "Child Node: #text", "Child Node: <li>Item 1</li>", etc.

// Accessing first and last child
const firstChild = list.firstChild; // Could be a text node
const lastChild = list.lastChild;   // Could be a text node
console.log("First Child:", firstChild);
console.log("Last Child:", lastChild);
// Example output: "First Child: #text", "Last Child: #text"

// Accessing next and previous siblings
// Example html structure:
// <div id="sibling1">Sibling 1</div>
// <div id="sibling2">Sibling 2</div>
// <div id="sibling3">Sibling 3</div>

const sibling2 = document.getElementById("sibling2");
const nextSibling = sibling2.nextSibling; // Could be a text node
const previousSibling = sibling2.previousSibling; // Could be a text node
console.log("Next Sibling:", nextSibling);
console.log("Previous Sibling:", previousSibling);
// Example output: "Next Sibling: #text", "Previous Sibling: #text"


// Child vs element Child
// Child nodes include all node types (element nodes, text nodes, comment nodes, etc.)
// Element node example: <div>, <p>, <span>, etc.
// Text node example: the text inside an element
// Comment node example: <!-- This is a comment -->


// Accessing only element children
const elementChildren = list.children; // Only element nodes
Array.from(elementChildren).forEach(child => {
    console.log("Element Child:", child);
});
// Example output: "Element Child: <li>Item 1</li>", etc.

// Accessing first and last element child
const firstElementChild = list.first



// EVENTS

// eventListener = a procedure in JavaScript that waits for an event to occur

// Common Events:
// 1. click
// 2. mouseover
// 3. mouseout
// 4. keydown
// 5. keyup
// 6. submit
// 7. load
// 8. resize
// 9. scroll
// 10. change


// Example: Adding a click event listener to a button

const clickButton = document.getElementById("clickButton");

function changeText(event) {
    event.target.textContent = "Clicked!";
}

clickButton.addEventListenter("click", changeText);
clickButton.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
});

clickButton.addEventListenter("click", function (event) {
    event.target.textContent = "Clicked!";
});


// Example: move object with arrows 

// create a small circle in DOM using JS
const circle = document.createElement("div");
circle.style.width = "50px";
circle.style.height = "50px";
circle.style.backgroundColor = "red";
circle.style.borderRadius = "50%";
circle.style.position = "absolute";
circle.style.top = "100px";
circle.style.left = "100px";
document.body.appendChild(circle);

// move the circle using arrow keys
document.addEventListener("keydown", (event) => {
    const step = 10; // number of pixels to move
    const rect = circle.getBoundingClientRect();
    switch (event.key) {
        case "ArrowUp":
            circle.style.top = `${rect.top - step}px`;
            break;
        case "ArrowDown":
            circle.style.top = `${rect.top + step}px`;
            break;
        case "ArrowLeft":
            circle.style.left = `${rect.left - step}px`;
            break;
        case "ArrowRight":
            circle.style.left = `${rect.left + step}px`;
            break;
    }
});

// alternative way

const step = 10;
let x = 0;
let y = 0;



document.addEventListener("keydown", event => {

    event.preventDefault(); // prevents the viewport from following object if it moves beyond view port

    if (event.key.startsWith("Arrow"))

        switch (event.key) {
            case "ArrowUp":
                y -= step;
                break;
            case "ArrowDown":
                y += step;
                break;
            case "ArrowLeft":
                x -= step;
                break;
            case "ArrowRight":
                x += step;
                break;
        }

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
})





// SHOW AND HIDE HTML USING JS

// Example: Toggle visibility of a div when a button is clicked

// HTML: 
// <button id="toggleButton">Toggle Visibility</button>
// <div id="toggleDiv">This is a toggleable div.</div>

const toggleButton = document.getElementById("toggleButton");
const toggleDiv = document.getElementById("toggleDiv");

toggleButton.addEventListener("click", () => {
    if (toggleDiv.style.display === "none") {
        toggleDiv.style.display = "block"; // Show the div
    } else {
        toggleDiv.style.display = "none"; // Hide the div
    }
});




// NODELIST

// NodeList = a static collection of HTML elements by (id, class, element). Can be created by using querySelectorAll(). Similar to an array, but no (map, filter, reduce). NodeLIst won't update to automatically reflect changes. If you add a new element that should be in the NodeList by class or id, it won't update until you manually update the NodeList. 

// Methods of a NodeList:


let buttons = document.querySelectorAll(".myButtons");

// Methods of a NodeList:

let buttons = document.querySelectorAll(".myButtons");

// 1. forEach(callback)
// Loop through each node in the NodeList
buttons.forEach(button => {
    button.addEventListener("event", event => {
        event.target.style.backgroundColor = "tomato";
    })
});

// 2. item(index)
// Get the node at the specified index
let firstButton = buttons.item(0);

// 3. entries()
// Returns an iterator with [index, node] pairs
for (let [i, btn] of buttons.entries()) {
    console.log(i, btn);
}

// 4. keys()
// Returns an iterator for the indices
for (let i of buttons.keys()) {
    console.log(i);
}

// 5. values()
// Returns an iterator for the nodes
for (let btn of buttons.values()) {
    console.log(btn);
}

// You can also convert a NodeList to an array if you want to use array methods like map, filter, etc.:
let buttonsArray = Array.from(buttons);
buttonsArray.map(btn => btn.textContent);




// CLASSLIST

// classList = a read-only property that returns a live DOMTokenList collection of the class attributes of the element. It provides methods to add, remove, toggle, and check for classes on an element

// Common classList Methods:
// 1. add(className)
// 2. remove(className)
// 3. toggle(className)
// 4. contains(className)
// 5. replace(oldClass, newClass)


// Example: Using classList to add class to an element

// HTML: <div id="myElement" class="box"></div>
// css: .active { background-color: yellow; }

const myElement = document.getElementById("myElement");
myElement.classList.add("active"); // Adds the "active" class to the element

// Example: Using classList to toggle class from an element on mouseover

myElement.addEventListener("mouseover", () => {
    myElement.classList.toggle("active"); // Removes the "active" class from the element
})

// Exmaple: Using classList to check if an element has a specific class

if (myElement.classList.contains("box")) {
    console.log("Element has the 'box' class.");
} else {
    console.log("Element does not have the 'box' class.");
}

// Example: Using classList to replace a class on an element

myElement.classList.replace("box", "container"); // Replaces the "box" class with "container" class




// FETCH

// = function used for making HTTP requests to fetch resources (JSON style data, images, files). SImplifies the process of making network requests and handling responses. It returns a Promise that resolves to the Response object representing the response to the request


// Example: Fetching data from an API and handling the response

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        return response.json()
    })
    .then(data => { data.name })
    .catch(error => console.error("Error fetching data:", error));


// Example with await and async

fetchPokemon();

async function fetchPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
