/*
  Objectives
    - Define the event loop and the queue
    - Describe how the event loop and the queue
      work with the stack
    - Define Javascipt as a single threaded language

*/
/*
  The Queue
    - An ordered list of functions waiting to be placed
    on the stack

    - function in the queue are processed on a first in,
      firs out basis(FIFO)
*/
/*
  The Event loop
  - Functionality in the Javascipt runtime that checks
    the queue when the stack is empty

  - If the stack is empty, the front of the queue is placed
    in the stack
*/

//Queue Example

setTimeout(function(){
  console.log("Hello world");
}, 0); //placed in the queue right away.


function square(n){
  return n *n;
}

setTimeout(function(){
  console.log("Callback is placed", "on the queue");
}, 0);
console.log(square(2));


/*
  Javascipt is single threaded
    - Single threaded: code execution is linear. Code that
      is running cannot be interrupted by something else going
      on in the program.
*/

//Single Threaded Example

setTimeout(function(){
  console.log("Hello from the timeout");
}, 0);

for (var i = 0; i < 10000000; i++){
  var x = i * 2;
}
consolelog("Done with loop");
