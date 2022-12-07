/*
    *** CLOSURES ***
    
    1. Global execution context has access to makeGreeting(), greetInSpanish, and greetInEnglish
    2. greetInSpanish invokes makeGreeting function and passes 'es' as the language argument
    3. makeGreeting returns an anonymous function that takes two arguments (firstName and lastName) and stores it in greetInSpanish
    4. The same occurs for greetInEnglish
    5. We invoke the function stored in greetInSpanish with the arguments 'John' and 'Doe'
    6. Function checks for the value of language, how does it know what language is?

    The anonymous function knows the value of language due to closures. When the anonymous is invoked it remembers the data 
    available to it at the time of its execution (its execution context). 
    
    At the time this particular function was executed, language = ‘es’. So when we run this function it checks its current 
    execution context. It can't find a language variable so it moves up the stack to the execution context of makeGreeting. 

    Even though the makeGreeting function's execution context (specifically the one that made this particular anonymous 
    function) has been removed from the stack, we still have access to the variables from its from it while it still existed 
    on the stack - this is until JS begins garbage collection. This is also the reason why JS knows what value langauge has 
    (either 'en' or 'es') and will log the appropriate string.

*/
function makeGreeting(language){
    return function(firstName, lastName){
        if(language === 'en') console.log(`Hello ${firstName} ${lastName}`);
        if(language === 'es') console.log(`Halo ${firstName} ${lastName}`);
    }
};

const greetInSpanish = makeGreeting('es');
const greetInEnglish = makeGreeting('en');

greetInSpanish('John', 'Doe'); // Halo John Doe
greetInEnglish('John', 'Doe'); // Hello John Doe