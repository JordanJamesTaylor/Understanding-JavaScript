/*

Splice is the only native array function that lets you remove or add elements from the middle of an array without creating a new array.

- First param = start
- Second param = deleteCount
- Any param after deleteCount is treated as an element to be added to the array beggining from start

*/

const numbers = [ 1, 2, 3, 4, 5, 6]
console.log("NUMBERS ARRAY: ", numbers);


// To REMOVE the middle element from the array
// First parameter is which index to start from
// Second is how many elements to remove, iterating from the starting index
numbers.splice(2, 2);
console.log("NUMBERS REMOVED: ", numbers);


// To ADD an element to an array
// First parameter is which index to start from
// Second parameter is how many elements to remove, iterating from the starting index
// We pass 0 as we do not want to remove any elements from the array
// Every parameter after the second is treated as an element to add to the array from the start index
numbers.splice(2, 0, 3, 4);
console.log("NUMBERS ADDED: ", numbers);

