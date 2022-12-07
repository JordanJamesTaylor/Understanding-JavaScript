/*
    *** Functional Programming ***

    JS uses first class functions - they can be assigned to variables, 
    passed around, and created on the fly - which allows to take advantage
    of functional programming.

*/

// * 2 to each element in an array and add the results to a new array
let arr1 = [2, 4, 6];
let arr2 = [];

for(let i = 0; i < arr1.length; i++){
    arr2.push(arr1[i] * 2);
};

// Doing the same thing with functional programming
function mapForEach(arr, fn){
    
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i])); // execute function passed to mapForEach
    }; 

    return newArr;
};

// Send a function to the mapForEach function
arr2 = mapForEach(arr1, function(element){
    return element * 2;
}); // [4, 8, 12]

// This allows us to dynamically change the function mapForEach executes
let arr3 = mapForEach(arr1, function(element){
    return element / 2;
}); // [1, 2, 3]

let arr4 = mapForEach(arr1, function(element){
    return element > 2;
}); // [false, true, true]

// console.log("ORIGINAL ARRAY: ", arr1);
// console.log("MULTIPLICATION: ", arr2);
// console.log("DIVISION: ", arr3);
// console.log("BOOLEAN: ", arr4);

// This function takes two arguments, but the function mapForEach takes is...
// ...only meant to have one
const checkPastLimit = function(limiter, element){
    return element > limiter;
};
/*
    We can use bind() to give values to the extra arguments thanks to first class 
    functionality.

    Create a copy of the checkPastLimit function on the fly and pass it
    an argument. Arguments are accepted left-to-right:
        - bind() expects the this key word to give it it's execution context, so we pass that
        - the next argument will take the place of the left most argument in checkPastLimit
        - any additional arguments will be added left-to-right
        
    checkPastLimit's second argument will be populated within the mapForEach function, so
    we don't pass it here.
*/
arr1 = [1, 2, 3];
let arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log("PASSING MULTIPLE FUNCTIONS: ", arr5); // [false, true, true]

// If we want to pass only a limiter and not the this key word
const checkPastLimitSimplified = function(limiter){
    return function(limiter, element){ // return a function, element is passed by 
        return element > limiter; // returned function is what does the calculation
    }.bind(this, limiter); // call bind() on the returned function to set scope and keep track of limiter
};

arr5 = mapForEach(arr1, checkPastLimitSimplified(1)); // only need to set limiter
// console.log("SIMPLIFIED: ", arr5); // [false, true, true]
