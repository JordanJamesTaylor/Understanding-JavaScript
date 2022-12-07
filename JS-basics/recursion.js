/*
    A function that calls itself, until it doesn't
    
    Recursion builds stacks
    Each recursive function call adds that call to the top of the stack
    The callstack for factorial looks like...

    return 1 - base case reached
    return 2 * factorial(1) - third loop
    return 3 * factorial(2) - second loop
    return 4 * factorial(3) - first loop
    factorial(4)

    Once the base case has been hit, we remove from the top of the stack and pass the return to the next layer down...

    return 1
    return 2 * 1
    return 3 * 2
    return 4 * 6
    factorial(4) will now return 4! (24)
*/

function factorial(n){
    if(n === 1) return 1 // Base case
    return n * factorial(n - 1) // Recursively call self with until base case is hit
}

factorial(4)