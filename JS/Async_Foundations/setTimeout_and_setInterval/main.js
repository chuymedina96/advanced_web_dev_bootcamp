/*
  Objectives
    - write asynchronous code using setTimeout
    - Write asynchronous code using setInterval

    setTimeout
      - A function that asynchronously invokes a callback after a delay in milliseconds
*/

// setTimeout usage
function callback(){
  console.log("callback function");
}
var delay = 1000; //Delayt is in ms

setTimeout(callback, delay);

setTimeout(function(){
  console.log("Run in aprrox. 2000ms");
}, 2000);


var timerId = setTimeout(function(){
  console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function(){
  console.log("I am canceling the first setTimeout", timerId);
  clearTimeout(timerId);
}, 2000)
