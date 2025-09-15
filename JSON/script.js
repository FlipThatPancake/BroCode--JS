

// JSON FIles

// json = is a format for storing and transporting data
// json = is "self-describing" and easy to understand
// json = it is language independent
// json = it uses JavaScript syntax, but the JSON format is text only
// json = can be used with any programming language




// 1. Convert string/array to JSON

const names = ['Charlie', 'Bob', 'Alice'];
const people = [
  { name: 'Charlie', age: 32 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 29 },
];

const jsonNames = JSON.stringify(names); // convert array to a long string which looks like this: '["Charlie","Bob","Alice"]'

console.log(jsonString);
console.log(typeof jsonString); // string

const jsonPeople = JSON.stringify(people); // convert array of objects to a long string which looks like this: '[{"name":"Charlie","age":32},{"name":"Bob","age":25},{"name":"Alice","age":29}]'

console.log(jsonPeople);
console.log(typeof jsonPeople); // string




// 2. Convert JSON to array

const parsedNames = JSON.parse(jsonNames); // convert json string back to array

console.log(parsedNames);
console.log(typeof parsedNames); // object (array is a type of object)

const parsedPeople = JSON.parse(jsonPeople); // convert json string back to array of objects

console.log(parsedPeople);
console.log(typeof parsedPeople); // object (array is a type of object)



// 3. fetch() JSON data from a file

fetch('people.json') // fetch() returns a promise
    // parse the JSON from the response
    .then((response) => response.json())
    // log each person's name to the console
    .then((data) => data.forEach((person) => console.log(person.name)))
    // log any errors to the console
    .catch((error) => console.log('Error:', error));
    
  
// or

fetch('people.json')
  .then(response => response.json())
  .then(data => data.forEach(person => console.log(person.name)))
  .catch(error => console.log('Error:', error));