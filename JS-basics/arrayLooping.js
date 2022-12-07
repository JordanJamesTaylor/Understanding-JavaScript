// FOR LOOPS
/*

- Any for loop can be used - read more about the different JavaScript loops.
- Less common nowadays, due to functional programming being more popular.
- Control over the iteration, such as skipping over elements or early returns.
- Resulting array needs to be declared beforehand, outside the loop.
- Uses Array.prototype.push() or the spread (...) operator to add elements.
- 0(n) complexity, each element will be iterated over only once.

*/
const files1 = ['foo.txt', '.bar', ' ', 'baz.foo'];
let filePaths1 = [];

for(file of files1){
    const fileName = file.trim(); // .trim() removes whitespaces from both ends of a string
    if(fileName){
        const filePath = `'~/cool_app/${fileName}`
        filePaths1.push(filePath)
    }
};

// filePaths1 = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']


// ARRAY REDUCE
/*

- Uses Array.prototype.reduce() with an empty array as the initial value.
- More common nowadays, due to functional programming being more popular.
- Less control over the iteration, cannot skip elements or return early.
- Can be chained with other methods, if necessary.
- Uses Array.prototype.push() or the spread (...) operator to add elements.
- 0(n) complexity, each element will be iterated over only once.

*/
const files2 = ['foo.txt', '.bar', ' ', 'baz.foo'];

// Reduce takes two arguments, an optional inital value, and a callback function
const filePaths2 = files2.reduce((acc, file) => { // acc = previous value, file = next value
    const fileName = file.trim()
    if(fileName){
        const filePath = `'~/cool_app/${fileName}`
        acc.push(filePath)
    }
    return acc
}, []);

// filePaths2 = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

// Method chaining
/*

- Uses Array.prototype.map() and Array.prototype.filter().
- More common nowadays, due to functional programming being more popular.
- Less control over the iteration, cannot skip elements or return early.
- Declarative, easier to read and refactor, chain can grow as necessary.
- Does not use Array.prototype.push() or the spread (...) operator.
- 0(cn) complexity, c iterations per element, (c: length of the chain).

*/

const files3 = ['foo.txt', '.bar', ' ', 'baz.foo'];
const filePaths3 = files3
.map(file => file.trim())
.filter(Boolean) // Iterates over arr, passes each element to Boolean obj which checks for, and returns, truthy values 
.map(fileName => `~/cool_app/${fileName}`);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']