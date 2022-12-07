/*
    *** Functions are Objects ***

    Functions in JavaScript are also known as first class functions. You can assign them to 
    variables, pass them around, and create them on the fly. 

    Functions are a special type of object that have all the features of a regular object and 
    then some:
    
        - You can attach properties and methods to a function (i.e. primitives, objects, other functions)
        - Has a hidden property of name which it doesn't need to have - anonymous functions
        - Has a hidden property that is the actual code of the function - special, invocable property

    We can have two types of functions:
        1. Function expression --> created in an expression and returns a value (doesn't have to save it to a variable)
        2. Function statement --> a declared function saved for later use
     
*/

// *** Adding a property to a function object ***
function greet(){
    console.log('Hi');
};

greet.language = 'English';
console.log(greet.language); // English
greet(); // Hi


// *** Passing functions around ***
function anonymousGreet(a){
    a();
};

anonymousGreet(function(){
    console.log('Hi!')
});


// *** The this keyword ***
console.log("Global object: ", this); // global object

function a(){
    console.log("a this: ", this); // invoking the function points to the global object
    this.newVariable = 'Hello'; // created new property for the global object
};

a();
console.log("newVariable: ", newVariable); // can access outside of the function as it was added to the global obj

const b = {
    name: 'The B object',
    log: function(){
        // Get around weird JS behaviour and ensure this points to this execution context of this function, not the global object
        let self = this;
        self.name = 'Updated B object';
        console.log("first b self: ", self);
        let setName = function(newName){
            self.name = newName;
        }
        setName('Updated the B object again!');
        console.log("second b self: ", self);
    }
}

b.log();


// *** Immediately Invoked Function Expressions (IIFEs) ***

// Trick syntax parser by wrapping the function in () to turn function statement to an expression
(function(name){
    const greeting = 'From IFFE: Hello'
    console.log(`${greeting} ${name}!`);
}('John')) // Here we invoke the function


// *** .call(), .apply(), .bind() and borrowing functions ***
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
};

const person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
};

const logName = function(lang1, lang2){
    console.log(`Hello ${this.getFullName()}!`);
    console.log(`${this.firstName} can speak ${lang1} and ${lang2}.`);
    console.log('-----------------------------------\n');
};

// call() invokes a function, sets the this keyword, and can takes in additional arguments
logName.call(person1, 'English', 'Spanish');

// bind() creates a copy, sets the this keyword, and doesn't invoke the function
const logPersonName = logName.bind(person1);
logPersonName('English', 'Spanish');

// apply() does the same as call() but takes in arguments as an array
logName.apply(person1, ['English', 'Spanish']);

// apply() can be used to borrow methods from other objects (all js functions are objects)
console.log(`Hello ${person1.getFullName.apply(person2)}!`);


// *** Function currying ***

// Function currying is when we create a copy of a function with some preset parameters
function multiply(a, b){
    return a * b;
};
/*
    bind() doesn't invoke the function it's bound to, so what are the arguments for?
    Passing bind() arguments presets what the functions arguments will be when it is invoked.

    First argument for .bind() has to be this
    Second argument sets the a parameters for multiply to always be 2 for this particular function object
*/
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // a has been set by bind(), so we pass in 4 as b

const makeTen = multiply.bind(this, 2, 5); // a and b have been permanently set to 2 and 5
console.log(makeTen());