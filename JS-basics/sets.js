/*
    Sets do not store duplicate values
*/

const numbers = new Set([1,2,3,3,4])
// { 1, 2, 3, 4}

numbers.add(5)

// forEach is the only loop you can use for sets and maps