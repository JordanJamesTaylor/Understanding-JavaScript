/*
    *** STATIC Vs DYNAMIC TYPED LANGUAGES ***

    Statically typed languages (like C++) require developers to state the data 
    type to be stored in a variable ahead of time. Once its type has been declared 
    it cannot be changed.

    Dynamically typed languages (like JavaScript) do NOT require developers to state 
    a variable’s type and its type can be changed during execution. 
 
    PRIMITIVE TYPE → Represents a single value in memory

    UNDEFINED
        A variable exists but doesn’t yet have a value. All variables begin with the
        value of undefined unless they’re given a value when declared. If they’re not
        given a value when declared, the browser will allocate the variable a space
        in memory and give it the value of undefined until it reaches a line that gives 
        it a value.

    NULL
        Same as undefined but should be used if you want to explicitly state a variable
        doesn’t have a value. Undefined is for the engine to use, null is for the 
        developer to use.

    STRING
        Sequence of characters but is still considered a primitive type in JS.

    NUMBER
        JS doesn’t distinguish between integers, short, long, float, etc. All JS numbers 
        are stored as floating point numbers.

    BOOLEAN
        true or false

    NON-PRIMITIVE TYPES → Represents a location in memory

    ARRAY

    OBJECT

*/

// ASSOCIATIVITY & PRECEDENCE
// MDN Table: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// All operators are the same ( = ), so they have the same precedence. When operators have the same
// precedence look at the operators associativity ( = has a right-to-left associativity).
let a = 2, b = 3, c = 4;

a = b = c;
/*
    Start from the most right =
    = is an infix operator
    = sets the thing on the left to the thing on the right
    
    Order or operations:
        1. b = c
        2. a = b
*/
console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

/*
    *** TYPE COERCION ***

    Sameness Table:
    

    Start from the most left <
    < is an infix operator
    < compares the value on the left to the value on the right
    
    Order or operations 1 < 2 < 3:
        1. 1 < 2 --> returns true
        2. true < 3
            2a. Two different types (boolean and number)
            2b. Type coercion occurs and the boolean is converted to a number
            2c. true === 1 (only boolean true === 1, string 'true' === NaN)
            2d. Operation becomes 1 < 3
        3. Return true   

    Order of operations 3 < 2 < 1:
        1. 3 < 2 --> returns false
        2. false < 1
            2a. Two different types (number and boolean)
            2b. Type coercion occurs and the boolean is converted to a number 
            2c. false === 0
            2d. Operation becomes 0 < 1
        3. Return true

    We can see what the values will be coerced to with Number() (Number(false),  Number(true), Number('3') etc.)
*/
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true

// More weird cases with equality (with coercion) --> can be avoided with strict equality (no coercion)
console.log(3 == 3); // true
console.log('3' == 3); // true
console.log(false == 0); // true
console.log(null == 0); // false
// but null < 1 is true
console.log(null < 1); // true
console.log("" == 0); // true
console.log("" == false); // true

// Strict equality
console.log(3 === 3); // true
console.log('3' === 3); // false
console.log(false === 0); // false
console.log(null === 0); // false 
console.log("" === 0); // false
console.log("" === false); // false
console.log(NaN === NaN) // false --> if one value is NaN then return will always be false