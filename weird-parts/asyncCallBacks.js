// long running function
function waitThreeSeconds(){
    const ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finisihed function')
};

function clickHandler(){
    console.log('click event!');
};

// listen for click event
document.getEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
/*
    *** EXECUTION STACK AND EVENT QUEUE ***

    In the browser we have:
        JavaScript engine
        Rendering engine --> prints to the screen what you're trying to show
        HTTP Requests --> fetching data

    The JS engine has hooks that allow it to talk to the rendering engine to change what 
    the webpage looks like. It can request data via HTTP. These run alongside each other
    asynchronously in the browser; everything happening inside the JS engine is NOT
    asynchronous. 

    When this file is run in the browser and the user DOES NOT click on the page we get:
        1. finished function --> function
        2. finished execution --> global

    If the user refreshes the page and clicks we get:
        1. finished function --> function
        2. finished execution --> global
        3. click event! --> function

    The order is dictated by the execution stack and event queue. The JavaScript engine won't 
    look at the event queue until the stack is empty. 
    
    Once the event queue is empty the engine will sit a look for more events, and execute any
    associated functions.

    JS does not work asynchronously, but the browser does. The browser asynchronously places things
    into the event queue for the JS engine to work through in the order they arrived in the queue.
    The JS code is still running line by line.

*/