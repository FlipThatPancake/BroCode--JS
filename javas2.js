


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

